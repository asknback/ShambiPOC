console.clear();

import {importJSONFile}  from './createLocalVariables';
import {exportToJSON}  from './exportJson';

figma.showUI(__html__);
figma.ui.resize(560, 600);

getExistingCollectionsAndModes();


figma.ui.onmessage = (e) => {
  if (e.type === "CreateLocalVariables") {
    console.log("createLocalVariables.ts received message", e);
    const { selectedCollection, selectedMode, body } = e;
    importJSONFile({ selectedCollection, selectedMode, body });
    getExistingCollectionsAndModes();
  } 
  else if (e.type === "ExportToJSON") {
    console.log("exportJson.ts received message", e);
    exportToJSON();
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