import * as React from 'react';
import { Button, Box} from '@mui/joy';

export const LocalVariablesPicker = ({semanticColors, customColors}) => {

  window.onmessage = (event) => {
    let message = event.data.pluginMessage;
    if (message.type === "LOAD_COLLECTIONS") {
      createLocalVariables(message.collections);
    }
  };

  const createLocalVariables = (collections) => {
    
    // reset Collection & Mode name and id before we check (if the user did something manually in local vars)
    let collectionName = ''
    let collectionId = ''
    let modeName = ''
    let modeId = ''

    Object.entries(collections).forEach(([name, collection]) => {
      interface Collection { id: string, modes: any}
      const col = collection as Collection;

      if (name == "Semantic") {
        collectionName = name
        collectionId = col.id

        if (col.modes[0]) {
          modeName = col.modes[0].name
          modeId = col.modes[0].modeId
        }
        return      
      }
    });

    let selectedCollection = {};
    let selectedMode = {};
    const body = getSemanticColorJson(semanticColors);

    if (!collectionId) {
      selectedCollection = { name: 'Semantic', id: null };
    } else {
      selectedCollection = { name: collectionName, id: collectionId };
    }

    if (!modeId) {
      selectedMode = { name: 'Value', id: null };
    } else {
      selectedMode = { name: modeName, id: modeId };
    }

    parent.postMessage({ pluginMessage: { selectedCollection, selectedMode, body, type: "CreateLocalVariables", },}, "*");
    parent.postMessage({ pluginMessage: { tokens: customColors, type: "CreateLocalStyles", },}, "*");
  };

  // Function to transform the semanticColors into Local Variables structure
  const getSemanticColorJson = (data: Record<string, { color: string; colorGenerated: string }>) => {
    const output: any = {
        Color: {}
    };
    
    Object.entries(data).forEach(([key, value]) => {
        const [category, subKey] = key.split('/');
        if (!output.Color[category]) {
            output.Color[category] = {
                $type: "color"
            };
        }
        output.Color[category][subKey] = { $value: value.color };
    });

    return output;
  };

  const getExistingCollections = () => {
    parent.postMessage({ pluginMessage: { type: "GetExistingCollections", },}, "*");
    // 1. fetch existing collections in controller.ts
    // 2. once we recieve them here again in (message.type === "LOAD_COLLECTIONS"), check and handle it before 
    // 3. creating or updating local variables in createLocalVariables()
  };

  return (
    <Box sx={{ margin:'0px'}}>
      <Button color='primary' size="sm" variant='solid' onClick={getExistingCollections} sx={{height: '8px', fontSize: '11px'}}>Apply Tokens</Button>
    </Box>
  );
}