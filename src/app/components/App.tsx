import * as React from 'react';
import _, {set} from 'lodash';
import {AccordionGroup, Accordion, AccordionSummary, accordionSummaryClasses, AccordionDetails, accordionDetailsClasses, Box, Button, CssBaseline, Grid, List, Sheet, Stack}  from '@mui/joy';
import {AppTabs, AppTab} from '../components/AppTabs';
import {ColorPickerCard} from './ColorPickerCard';
import {ColorPickerListItem} from './ColorPickerListItem';
import {LocalVariablesPicker} from './LocalVariablesPicker';
import {updateSemanticColors} from '../semanticTokens';

function App() {

  // Set colour for ColorPickers
  const [activeColorProps, setActiveColorProps] = React.useState({ id: '', color: '' });

  React.useEffect(() => {
    setSemanticColors(updateSemanticColors(activeColorProps));  // console.log('activeColorProps', activeColorProps)
  }, [activeColorProps]);  // This effect runs whenever activeColorProps changes

  const updateActiveColorProps = (id, activeColor) => {
    setActiveColorProps({ id: id, color: activeColor });
  };

  // Set semantic colors (tokens)
  const [semanticColors, setSemanticColors] = React.useState(() => updateSemanticColors(activeColorProps));

  // The semanticTree function converts the semanticColors object into a tree structure, where the Semantic Token Set is the parent and all tokens sits inside
  // Should we move this inside a function that we call when needed, rather than always run when we render?
  interface SemanticTree {
    [key: string]: { [subKey: string]: {color: string, colorGenerated: string, colorOverride: string} };
  }

  const semanticTree: SemanticTree = Object.entries(semanticColors).reduce((acc, [key, value]) => {
    const path = key.split('/');
    set(acc, path, value);
    return acc;
  }, {});
  // console.log('Tree: ', semanticTree);

  // Update Tabs and TapPanels
  const [value, setValue] = React.useState(0);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    console.log('event', event);
    setValue(newValue);
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', bgcolor: '#f6f6f6', height: '100vh'}}>
      <CssBaseline />
      <Sheet sx={{ bgcolor: '#FFFFFF'}}>
        <AppTabs value={value} onChange={handleChange} TabIndicatorProps={{ hidden: true }} sx={{ px: '16px'}}>
          <AppTab label="Semantic Colors" />
          <AppTab label="Custom Colors" />
          <AppTab label="Typography" />
          <AppTab label="Spacing & Sizing" />
          <AppTab label="Shadows" /> 
        </AppTabs>
      </Sheet>
      <Box role="contentWrapper" sx={{ flexGrow: 1, overflow: 'auto' }}>
        <Box role="tabPanel" hidden={value !== 0} sx={{ p: 2, display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
        <Stack direction="column" justifyContent="center" alignItems="center" spacing={2}>
          <Grid container justifyContent="flex-start" >
            {Object.entries(semanticTree).map(([key, subTree]) => {
              const firstSubKey = Object.keys(subTree)[0];
              const firstSubObject = subTree[firstSubKey];

              return (
                <ColorPickerCard
                  key={key + '/' + firstSubKey} 
                  initColor={firstSubObject.color}
                  orgColor ={firstSubObject.colorGenerated}
                  overrideColor ={firstSubObject.colorOverride}
                  updateColorProps={updateActiveColorProps}
                  title={key}
                  id={key + '/' + firstSubKey} />
              );
            })}
          </Grid>
          <Box role='accordionWrapper' sx={{ width: '100%', px: '9px'}}> {/* adding 1 px padding due to outline - also border radius of child gets another px*/}
            <AccordionGroup color='neutral' variant="solid"  sx={{ bgcolor: '#FFFFFF', width: '100%', boxShadow: 'md', borderRadius: '5px', overflow:'hidden', outline: 'rgba(0, 0, 0, 0.12) solid 1px'}}> 
              {Object.entries(semanticTree).map(([key, subTree]) => {
                const firstSubKey = Object.keys(subTree)[0];
                const firstSubObject = subTree[firstSubKey];
                return (
                  <Accordion key={key} sx={{ [`& .${accordionSummaryClasses.root}`]: { [`& .${accordionSummaryClasses.button}:hover`]: { bgcolor: "#FFFFFF",  }}, [`& .${accordionDetailsClasses.content}`]: { paddingInline: '0px', paddingBlock: '0px', },}}>
                  <AccordionSummary >
                    <Stack direction="row" alignItems="center" spacing={0}>
                      <Box sx={{ backgroundColor: firstSubObject.color, width: '24px', height: '24px', borderRadius: '40px', outline: 'rgba(0, 0, 0, 0.08) solid 1px', outlineOffset: '-1px', boxShadow: 'inset 0px 1px 2px 0px rgba(0, 0, 0, 0.08)'}} />
                      <Box sx={{ pl: '8px', lineHeight:'32px', color: 'rgba(0, 0, 0, 0.8)', fontSize: '14px', fontWeight: '500'}}> {key} </Box>
                    </Stack>
                  </AccordionSummary>
                  <AccordionDetails sx={{ p: 0, bgcolor: '#F6F6F6'}}>
                    <List sx={{ p: 0 }}>
                      {Object.entries(semanticTree[key]).map(([subKey, value]) => (
                          <ColorPickerListItem
                            key={key + '/' + subKey} 
                            initColor={value.color}
                            orgColor ={value.colorGenerated}
                            overrideColor ={value.colorOverride}
                            updateColorProps={updateActiveColorProps}
                            title={subKey}
                            id={key + '/' + subKey} />
                      ))}
                    </List>
                  </AccordionDetails>
                </Accordion>
                );
              })}
            </AccordionGroup>
          </Box>
        </Stack>
        </Box>
        <Box role="tabPanel" hidden={value !== 1} sx={{ p: 2 }}>Custom Colors</Box>
        <Box role="tabPanel" hidden={value !== 2} sx={{ p: 2 }}>Typography</Box>
        <Box role="tabPanel" hidden={value !== 3} sx={{ p: 2 }}>Spacing & Sizing</Box>
        <Box role="tabPanel" hidden={value !== 4} sx={{ p: 2 }}>Shadows</Box>
      </Box>


      <Stack direction="row" justifyContent="space-between" spacing={0} sx={{bgcolor: 'background.paper', borderTop: '1px solid #e8e8e8', px: '16px',fontSize: '11px', lineHeight: '48px', color: 'rgba(0, 0, 0, 0.56)'}}>
        v. 0.012
        <Stack direction="row" spacing={0} alignItems="center" sx={{ marginLeft: 'auto', gap: '4px',}}>
          <LocalVariablesPicker />
        </Stack>
      </Stack>
    </Box>
  );
}

export default App;
