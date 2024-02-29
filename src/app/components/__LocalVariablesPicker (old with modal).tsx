import * as React from 'react';
import { Button, Box, IconButton, Input, Modal, ModalDialog, Option, Select, SelectStaticProps, Stack, Typography} from '@mui/joy';
import CloseRounded from '@mui/icons-material/CloseRounded';

let collections = {};

export const LocalVariablesPicker = ({semanticColors, customColors}) => {

  const [activeCollectionId, setActiveCollectionId] = React.useState<string | null>(null);
  const [activeCollectionOptions, setActiveCollectionOptions] = React.useState([])
  const [activeCollectionName, setActiveCollectionName] = React.useState<string | null>(null);

  const [activeModeId, setActiveModeId] = React.useState<string | null>(null);
  const [activeModeOptions, setActiveModeOptions] = React.useState([])
  const [activeModeName, setActiveModeName] = React.useState<string | null>(null);

  // const selectModeAction: SelectStaticProps['action'] = React.useRef(null);
  const selectCollectionAction: SelectStaticProps['action'] = React.useRef(null);

  const [inputCollectionValue, setInputCollectionValue] = React.useState<string>('');
  // const [inputModeValue, setInputModeValue] = React.useState<string>('');
  
  React.useEffect(() => {   // console.log('activeCollectionId',activeCollectionId); 
    handleCollectionChange();
  }, [activeCollectionId]);

  React.useEffect(() => {   // console.log('activeCollectionOptions',activeCollectionOptions); 
  }, [activeCollectionOptions]);

  React.useEffect(() => {   // console.log('activeCollectionName',activeCollectionName); 
  }, [activeCollectionName]);

  React.useEffect(() => {   // console.log('activeModeId',activeModeId); 
    // handleModeChange();
  }, [activeModeId]);

  React.useEffect(() => {   // console.log('activeModeOptions',activeModeOptions); 
  }, [activeModeOptions]);

  React.useEffect(() => {   // console.log('activeModeName',activeModeName); 
  }, [activeModeName]);

  React.useEffect(() => {   // console.log('activeModeName',activeModeName); 
    setActiveCollectionName(inputCollectionValue);
  }, [inputCollectionValue]);

  // React.useEffect(() => {   // console.log('activeModeName',activeModeName);
  //   setActiveModeName(inputModeValue);
  // }, [inputModeValue]);


  window.onmessage = (event) => {
    let message = event.data.pluginMessage;

    if (message.type === "LOAD_COLLECTIONS") {
      collections = {};
      const collectionOptions = [];

      Object.entries(message.collections).forEach(([name, collection]) => {
        interface Collection { id: string }
        const col = collection as Collection;

        collections[col.id] = collection;
        collectionOptions.push({ name, value: col.id, });
      });

      // console.log('collections',collections)
      setActiveCollectionOptions(collectionOptions);
    }
  };

  function handleCollectionChange() {
    const currentCollection = collections[activeCollectionId];
    if (!currentCollection) {
      setActiveCollectionName(null); //reset
      setActiveModeId(null); //reset
    } else {  
      setActiveCollectionName(currentCollection.name);

      const modeOptions = [];
      
      if (currentCollection.modes) {
        currentCollection.modes.map(({ modeId, name }) => {
          modeOptions.push({ name, value: modeId, });
        })
      }
      setActiveModeOptions(modeOptions); 

      if (modeOptions.length > 0) {
        setActiveModeName(modeOptions[0].name);
        setActiveModeId(modeOptions[0].value);
        // console.log('handleCollectionChange',modeOptions[0].value)
      } else {  
        setActiveModeName(null);
        setActiveModeId(null);
      }
    }
  }

  // function handleModeChange() { // If we ever want to use the modes again.
  //   const currentMode = activeModeOptions.find(option => option.value === activeModeId);
  //   if (!currentMode) {
  //     setActiveModeName(null);
  //   } else {  
  //     setActiveModeName(currentMode.name);
  //   }
  // }

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

  const createLocalVariables = () => {
    let selectedCollection = {};
    let selectedMode = {};
    const body = getSemanticColorJson(semanticColors);

    console.log('body',body)

    if (!activeCollectionId && !activeCollectionName) {
      alert("Please pick a current Collection or create a new.");
      return;
    } else {
      selectedCollection = { name: activeCollectionName, id: activeCollectionId };
    }

    if (!activeModeId) {
      selectedMode = { name: 'Value', id: null };
    } else {
      selectedMode = { name: activeModeName, id: activeModeId };
    }

    setInputCollectionValue('') //reset input fields
    // setInputModeValue('') //reset input fields

    parent.postMessage({ pluginMessage: { selectedCollection, selectedMode, body, type: "CreateLocalVariables", },}, "*");
    parent.postMessage({ pluginMessage: { tokens: customColors, type: "CreateLocalStyles", },}, "*");
  };

  const [showPicker, setShowPicker] = React.useState(false);
  const openPicker = () => {
      setShowPicker(true);
  };
  const cancelPicker = () => {    
    setShowPicker(false);
  };

  return (
    <Box sx={{ margin:'0px'}}>
      <Button color='primary' size="sm" variant='solid' onClick={openPicker} sx={{height: '8px', fontSize: '11px'}}>Setup Local Variables</Button>
      
      <Modal sx={{ p: '0px' }} open={showPicker} onClose={cancelPicker}>
        <ModalDialog variant='plain' sx={{ width: '400px', p: '0px', }} >
          <Stack direction= 'column' spacing={2} sx={{}}>
            
            <Box sx={{ p: '16px 16px 8px', borderBottom: '1px solid rgba(0, 0, 0, 0.12)'}}> 
              <Typography level="title-md" >Apply to document </Typography>
            </Box>

            <Stack spacing={0} sx={{px: '16px' }}>
              <Typography level="title-sm" >Collection </Typography>
              <Stack direction="row" alignItems="center" spacing={1} sx={{ pt:'4px' }}>
                {activeCollectionOptions.length > 0  && (
                  <Select id="tst" action={selectCollectionAction} value={activeCollectionId} size="sm" variant="outlined" placeholder="Pick collection" sx={{ flexBasis: '100%' }}
                    onChange={(_, newValue) => setActiveCollectionId(newValue)}
                    {...(activeCollectionId && {  
                      endDecorator: (
                        <IconButton variant="plain" color="neutral" onMouseDown={(event) => { event.stopPropagation() }} onClick={() => { setActiveCollectionId(null); selectCollectionAction.current?.focusVisible(); }} >
                          <CloseRounded sx={{width:'20px', height:'20px'}} />
                        </IconButton>
                      ),
                      indicator: null, 
                    })} >
                    {activeCollectionOptions.map(({ name, value = name }) => {
                        return (
                          <Option key={value} value={value}>{name}</Option>
                      );
                    })}
                  </Select>
                )}

                {(activeCollectionOptions.length > 0 && !activeCollectionId)  && (
                  <Typography level="body-xs" >or </Typography>
                )}

                {!activeCollectionId  && (
                  <Input value={inputCollectionValue} onChange={(e: any) => setInputCollectionValue(e.target.value)} placeholder="Create new collection" size="sm" variant="soft" sx={{ flexBasis: '100%' }} />
                )}
              </Stack>
            </Stack>
            
            {/* <Stack spacing={0} sx={{px: '16px' }}>
              <Typography level="title-sm" >Mode </Typography>
              <Stack direction="row" alignItems="center" spacing={1} sx={{ pt:'4px' }}>
                {activeModeOptions.length > 0  && (
                  <Select action={selectModeAction} value={activeModeId} size="sm" variant="outlined" placeholder="Pick mode" sx={{ flexBasis: '100%' }}
                    onChange={(e, newValue) => setActiveModeId(newValue)}
                    {...(activeModeId && {   
                      endDecorator: (
                        <IconButton variant="plain" color="neutral" onMouseDown={(event) => { event.stopPropagation() }} onClick={() => { setActiveModeId(null); selectModeAction.current?.focusVisible(); }} >
                          <CloseRounded sx={{width:'20px', height:'20px'}} />
                        </IconButton>
                      ),
                      indicator: null, 
                    })} >
                    {activeModeOptions.map(({ name, value = name }) => {
                          return (
                            <Option key={value} value={value}>{name}</Option>
                        );
                      })}
                  </Select>
                )}

                {activeModeOptions.length > 0 && !activeModeId  && (
                  <Typography level="body-xs" >or </Typography>
                )}

                {!activeModeId  && (
                  <Input value={inputModeValue} onChange={(e: any) => setInputModeValue(e.target.value)} placeholder="Create new mode" size="sm" variant="soft" sx={{ flexBasis: '100%' }} />
                )}
              </Stack>
            </Stack> */}
            
            <Stack direction="row" justifyContent="space-between" spacing={0} sx={{p: '8px 16px 8px 16px', borderTop: '1px solid rgba(0, 0, 0, 0.12)'}}>
              <Stack direction="row" spacing={0} sx={{marginLeft: 'auto', gap: '4px'}}>
                <Button color='neutral' size="sm" variant='plain' onClick={cancelPicker} sx={{fontSize: '11px'}}>Cancel</Button>
                <Button color='primary' size="sm" variant='solid' onClick={createLocalVariables} sx={{fontSize: '11px'}}>APPLY</Button>
              </Stack>
            </Stack>
          </Stack>
        </ModalDialog>
      </Modal>

    </Box>
  );
}