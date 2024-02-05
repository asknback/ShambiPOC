function createCollection( selectedCollection, selectedMode ) {
  // console.log('selectedCollection.id', selectedCollection.id)
  if (selectedCollection.id) {  //collection exists
    const collection = figma.variables.getVariableCollectionById(
      selectedCollection.id
    );
    const modeId = selectedMode.id;
    if (modeId) { // mode exists
      return { collection, modeId };
    } else {// otherwise create new mode
      const newMode = collection.addMode(selectedMode.name); 
      return { collection, modeId: newMode };
    }
  }
  
  // collection doesn't exist, so mode doesn't exist
  const collection = figma.variables.createVariableCollection(
    selectedCollection.name
  );

  const modeId = collection.modes[0].modeId;
  collection.renameMode(modeId, selectedMode.name);

  return { collection, modeId };
}

function createToken( variableMap, collection, modeId, type, name, value ) {
  const existingCollection = variableMap[collection.id];
  let token = existingCollection ? existingCollection[name] : null;

  if (!token) {
    token = figma.variables.createVariable(name, collection.id, type);
  }
  token.setValueForMode(modeId, value);

  return token;
}

function createVariable( variableMap, collection, modeId, key, valueKey, tokens ) {
  const token = tokens[valueKey];
  return createToken(variableMap, collection, modeId, token.resolvedType, key, {
    type: "VARIABLE_ALIAS",
    id: `${token.id}`,
  });
}

export function importJSONFile({ selectedCollection, selectedMode, body }) {
  const json = body;
  console.log("importJSONFile");
  const { collection, modeId } = createCollection( selectedCollection, selectedMode );
  const variableMap = loadExistingVariableMap();

  const aliases = {};
  const tokens = {};
  
  Object.entries(json).forEach(([key, object]) => {
    // console.log("Object.entries(json).forEach", key, object);
    traverseToken({ variableMap, collection, modeId, type: json.$type, key, object, tokens, aliases, });
  });
  
  processAliases({ variableMap, collection, modeId, aliases, tokens });
}

function loadExistingVariableMap() {
  const variables = figma.variables.getLocalVariables();
  const map = {};
  variables.forEach((variable) => {
    map[variable.variableCollectionId] =
      map[variable.variableCollectionId] || {};
    map[variable.variableCollectionId][variable.name] = variable;
  });
  // console.log('map',map) ;
  return map;
}

function processAliases({ variableMap, collection, modeId, aliases, tokens }) {
  aliases = Object.values(aliases);
  let generations = aliases.length;
  while (aliases.length && generations > 0) {
    for (let i = 0; i < aliases.length; i++) {
      const { key, type, valueKey } = aliases[i];
      const token = tokens[valueKey];
      if (token) {
        aliases.splice(i, 1);
        tokens[key] = createVariable(
          variableMap,
          collection,
          modeId,
          key,
          valueKey,
          tokens
        );
      }
    }
    generations--;
  }
}

function isAlias(value) {
  return value.toString().trim().charAt(0) === "{";
}

function traverseToken({ variableMap, collection, modeId, type, key, object, tokens, aliases, }) {
  type = type || object.$type;
  // if key is a meta field, move on
  if (key.charAt(0) === "$") {
    return;
  }
  if (object.$value !== undefined) {
    if (isAlias(object.$value)) {
      const valueKey = object.$value
        .trim()
        .replace(/\./g, "/")
        .replace(/[\{\}]/g, "");
      if (tokens[valueKey]) {
        tokens[key] = createVariable( variableMap, collection, modeId, key, valueKey, tokens );
      } else {
        aliases[key] = { key, type, valueKey, };
      }
    } else if (type === "color") {
      tokens[key] = createToken( variableMap, collection, modeId, "COLOR", key, parseColor(object.$value) );
    } else if (type === "number") {
      tokens[key] = createToken( variableMap, collection, modeId, "FLOAT", key, object.$value );
    } else {
      console.log("unsupported type", type, object);
    }
  } else {
    Object.entries(object).forEach(([key2, object2]) => {
      if (key2.charAt(0) !== "$") {
        traverseToken({ variableMap, collection, modeId, type, key: `${key}/${key2}`, object: object2, tokens, aliases, });
      }
    });
  }
}

function parseColor(color) {
  color = color.trim();
  const rgbRegex = /^rgb\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*\)$/;
  const rgbaRegex =
    /^rgba\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*([\d.]+)\s*\)$/;
  const hslRegex = /^hsl\(\s*(\d{1,3})\s*,\s*(\d{1,3})%\s*,\s*(\d{1,3})%\s*\)$/;
  const hslaRegex =
    /^hsla\(\s*(\d{1,3})\s*,\s*(\d{1,3})%\s*,\s*(\d{1,3})%\s*,\s*([\d.]+)\s*\)$/;
  const hexRegex = /^#([A-Fa-f0-9]{3}){1,2}$/;
  const floatRgbRegex =
    /^\{\s*r:\s*[\d\.]+,\s*g:\s*[\d\.]+,\s*b:\s*[\d\.]+(,\s*opacity:\s*[\d\.]+)?\s*\}$/;

  if (rgbRegex.test(color)) {
    const [, r, g, b] = color.match(rgbRegex);
    return { r: parseInt(r) / 255, g: parseInt(g) / 255, b: parseInt(b) / 255 };
  } else if (rgbaRegex.test(color)) {
    const [, r, g, b, a] = color.match(rgbaRegex);
    return {
      r: parseInt(r) / 255,
      g: parseInt(g) / 255,
      b: parseInt(b) / 255,
      a: parseFloat(a),
    };
  } else if (hslRegex.test(color)) {
    const [, h, s, l] = color.match(hslRegex);
    return hslToRgbFloat(parseInt(h), parseInt(s) / 100, parseInt(l) / 100);
  } else if (hslaRegex.test(color)) {
    const [, h, s, l, a] = color.match(hslaRegex);
    return Object.assign(
      hslToRgbFloat(parseInt(h), parseInt(s) / 100, parseInt(l) / 100),
      { a: parseFloat(a) }
    );
  } else if (hexRegex.test(color)) {
    const hexValue = color.substring(1);
    const expandedHex =
      hexValue.length === 3
        ? hexValue
            .split("")
            .map((char) => char + char)
            .join("")
        : hexValue;
    return {
      r: parseInt(expandedHex.slice(0, 2), 16) / 255,
      g: parseInt(expandedHex.slice(2, 4), 16) / 255,
      b: parseInt(expandedHex.slice(4, 6), 16) / 255,
    };
  } else if (floatRgbRegex.test(color)) {
    return JSON.parse(color);
  } else {
    throw new Error("Invalid color format");
  }
}

function hslToRgbFloat(h, s, l) {
  const hue2rgb = (p, q, t) => {
    if (t < 0) t += 1;
    if (t > 1) t -= 1;
    if (t < 1 / 6) return p + (q - p) * 6 * t;
    if (t < 1 / 2) return q;
    if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
    return p;
  };

  if (s === 0) {
    return { r: l, g: l, b: l };
  }

  const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
  const p = 2 * l - q;
  const r = hue2rgb(p, q, (h + 1 / 3) % 1);
  const g = hue2rgb(p, q, h % 1);
  const b = hue2rgb(p, q, (h - 1 / 3) % 1);

  return { r, g, b };
}