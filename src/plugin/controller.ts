console.clear();

import {CreateLocalVariables}  from './createLocalVariables';
import {CreateLocalStyles}  from './createLocalStyles';
import {exportToJSON}  from './exportJson';

figma.showUI(__html__);
figma.ui.resize(560, 600);

// *******************
// THIS IS A GOOD WAY TO WORK WITH STYLES
// void initialize();

// async function initialize() {
//   console.log("initialize");
  
//   await figma.loadAllPagesAsync();
//   figma.on("documentchange", (event) => {
//     console.log("event", event);
//     const messages = event.documentChanges.map(documentChangeAsString);
//     figma.ui.postMessage(messages, { origin: "*" });
//   });
// }

// function documentChangeAsString(change: DocumentChange) {
//   console.log("documentChangeAsString", change);
//   const { origin, type } = change;
//   const list: string[] = [origin, type];
//   if (type === "PROPERTY_CHANGE") {
//     list.push(change.node.type, change.properties.join(", "));
//   } else if (type === "STYLE_PROPERTY_CHANGE") {
//     list.push(change.style?.name, change.properties.join(", "));
//   } else if (type === "STYLE_CREATE" || type === "STYLE_DELETE") {
//     // noop
//   } else {
//     list.push(change.node.type);
//   }
//   return list.join(" ");
// }
// *******************


figma.ui.onmessage = (e) => {
  if (e.type === "CreateLocalVariables") {
    // console.log("createLocalVariables.ts received message", e);
    const { selectedCollection, selectedMode, body } = e;
    CreateLocalVariables({ selectedCollection, selectedMode, body });
  }
  else if (e.type === "CreateLocalStyles") {
    console.log("CreateLocalStyles.ts received message", e);
    CreateLocalStyles(e.tokens);
  }
  else if (e.type === "ExportToJSON") {
    console.log("exportJson.ts received message", e);
    exportToJSON();
  }
  else if (e.type === "GetExistingCollections") {
    console.log("GetExistingCollections received message", e);
    getExistingCollectionsAndModes();
  }
};

function getExistingCollectionsAndModes() {
  const collections = figma.variables
    .getLocalVariableCollections()
    .reduce((into, collection) => {
      into[collection.name] = {
        name: collection.name,
        id: collection.id,
        defaultModeId: collection.defaultModeId,
        modes: collection.modes,
      };
      return into;
    }, {});

  figma.ui.postMessage({
    type: "LOAD_COLLECTIONS",
    collections,
  });
}