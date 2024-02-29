import * as React from 'react';
import {Box, Button, CssBaseline, Sheet, Stack}  from '@mui/joy';
import {AppTabs, AppTab} from '../components/AppTabs';
import {PageSemanticColors} from '../components/PageSemanticColors';
import {PageCustomColors} from '../components/PageCustomColors';
import {LocalVariablesPicker} from './LocalVariablesPicker';

import {updateSemanticColors} from '../semanticTokens';
import {updateCustomColors} from '../customTokens';

function App() {

  // Set colour for ColorPickers
  const [activeSemanticColorProps, setActiveSemanticColorProps] = React.useState({ id: '', color: '' });
  const [activeCustomColorProps, setActiveCustomColorProps] = React.useState({ id: '', color: '' });

  React.useEffect(() => {
    setSemanticColors(updateSemanticColors(activeSemanticColorProps)); 
  }, [activeSemanticColorProps]);

  React.useEffect(() => {
    setCustomColors(updateCustomColors(activeCustomColorProps, semanticColors)); 
  }, [activeCustomColorProps]);  

  const updateActiveSemanticColorProps = (id, activeColor) => {
    setActiveSemanticColorProps({ id: id, color: activeColor });
  };

  const updateActiveCustomColorProps = (id, activeColor) => {
    setActiveCustomColorProps({ id: id, color: activeColor });
  };

  const [semanticColors, setSemanticColors] = React.useState(updateSemanticColors(activeSemanticColorProps));
  const [customColors, setCustomColors] = React.useState(updateCustomColors(activeCustomColorProps, semanticColors));

  // Update Tabs and TapPanels
  const [value, setValue] = React.useState(0);
  const handleChange = (_: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', bgcolor: '#f6f6f6', height: '100vh'}}>
      <CssBaseline />
      <Sheet sx={{ bgcolor: '#FFFFFF', zIndex: 100, boxShadow: 'md'}}>
        <AppTabs value={value} onChange={handleChange} TabIndicatorProps={{ hidden: true }} sx={{ px: '16px'}}>
          <AppTab label="Semantic Colors" />
          <AppTab label="Custom Colors" />
          <AppTab label="Typography" />
          <AppTab label="Spacing, Sizing, Radii & Shadows" />
        </AppTabs>
      </Sheet>
      <Box role="contentWrapper" sx={{ flexGrow: 1, overflow: 'auto' }}>
        <Box role="tabPanel" hidden={value !== 0} >
          <PageSemanticColors 
            SemanticColors = {semanticColors}
            ActiveSemanticColorProps = {updateActiveSemanticColorProps} />
        </Box>
        <Box role="tabPanel" hidden={value !== 1} >
          {/* Test */}
          <PageCustomColors
            CustomColors = {customColors}
            ActiveCustomColorProps = {updateActiveCustomColorProps} />
        </Box>

        <Box role="tabPanel" hidden={value !== 2} sx={{ p: 2 }}>Typography</Box>
        <Box role="tabPanel" hidden={value !== 3} sx={{ p: 2 }}>Spacing, Sizing, Radii & Shadows</Box>
      </Box>


      <Stack direction="row" justifyContent="space-between" spacing={0} sx={{bgcolor: '#FFFFFF', zIndex: 2, boxShadow: 'md', borderTop: '1px solid #e8e8e8', px: '16px',fontSize: '11px', lineHeight: '48px', color: 'rgba(0, 0, 0, 0.56)'}}>
        v. 0.012
        <Stack direction="row" spacing={0} alignItems="center" sx={{ marginLeft: 'auto', gap: '4px',}}>
          {/* <Button color='primary' size="sm" variant='solid' onClick={createLocalStyles} sx={{height: '8px', fontSize: '11px'}}>Setup Local Styles</Button> */}
          <LocalVariablesPicker semanticColors={semanticColors} customColors={customColors} />

        </Stack>
      </Stack>
    </Box>
  );
}

export default App;
