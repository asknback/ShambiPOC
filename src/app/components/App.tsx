import * as React from 'react';
import _, {set} from 'lodash';
import {Box, CssBaseline, Sheet, Stack}  from '@mui/joy';
import {AppTabs, AppTab} from '../components/AppTabs';
import {PageSemanticColors} from '../components/PageSemanticColors';
import {PageCustomColors} from '../components/PageCustomColors';

import {LocalVariablesPicker} from './LocalVariablesPicker';
import {updateSemanticColors} from '../semanticTokens';
import {updateCustomColors} from '../customTokens';

function App() {
  
  // Set colour for ColorPickers
  const [activeColorProps, setActiveColorProps] = React.useState({ id: '', color: '' });

  React.useEffect(() => {
    // console.log('activeColorProps: ', activeColorProps);

    setSemanticColors(updateSemanticColors(activeColorProps));  // console.log('activeColorProps', activeColorProps)
  }, [activeColorProps]);  // This effect runs whenever activeColorProps changes

  const updateActiveColorProps = (id, activeColor) => {
    setActiveColorProps({ id: id, color: activeColor });
  };

  // Initiate objects for tokens
  const [semanticColors, setSemanticColors] = React.useState(() => updateSemanticColors(activeColorProps));
  const [customColors, setCustomColors] = React.useState(() => updateCustomColors(activeColorProps, semanticColors));

  interface ColorTree {
    [key: string]: { [subKey: string]: {color: string, colorGenerated: string, colorOverride: string} };
  }

  const semanticColorTree: ColorTree = Object.entries(semanticColors).reduce((acc, [key, value]) => {
    const path = key.split('/');
    set(acc, path, value);
    return acc;
  }, {}); //console.log('semanticColorTree: ', semanticColorTree);


  const customColorTree: ColorTree = Object.entries(customColors).reduce((acc, [key, value]) => {
    const path = key.split('/');
    set(acc, path, value);
    return acc;
  }, {}); //console.log('customColorTree: ', customColorTree);


  // Function to transform the semanticColors into Local Variables structure
  const getSemanticColorJson = (data: Record<string, { color: string; colorGenerated: string }>) => {
    const output: any = {
        Semantic: {}
    };

    Object.entries(data).forEach(([key, value]) => {
        const [category, subKey] = key.split('/');
        if (!output.Semantic[category]) {
            output.Semantic[category] = {
                $type: "color"
            };
        }
        output.Semantic[category][subKey] = { $value: value.color };
    });

    return output;
  };

  const semanticColorJson = getSemanticColorJson(semanticColors);

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
          <AppTab label="Spacing, Sizing & Shadows" />
        </AppTabs>
      </Sheet>
      <Box role="contentWrapper" sx={{ flexGrow: 1, overflow: 'auto' }}>
        <Box role="tabPanel" hidden={value !== 0} >
          <PageSemanticColors 
            semanticColorTree={semanticColorTree}
            updateActiveColorProps={updateActiveColorProps} />
        </Box>
        <Box role="tabPanel" hidden={value !== 1} sx={{ p: 2 }}>
          <PageCustomColors  
            customColorTree={customColorTree}
            updateActiveColorProps={updateActiveColorProps} />
        </Box>

        <Box role="tabPanel" hidden={value !== 2} sx={{ p: 2 }}>Typography</Box>
        <Box role="tabPanel" hidden={value !== 3} sx={{ p: 2 }}>Spacing, Sizing & Shadows</Box>
      </Box>


      <Stack direction="row" justifyContent="space-between" spacing={0} sx={{bgcolor: '#FFFFFF', zIndex: 2, boxShadow: 'md', borderTop: '1px solid #e8e8e8', px: '16px',fontSize: '11px', lineHeight: '48px', color: 'rgba(0, 0, 0, 0.56)'}}>
        v. 0.012
        <Stack direction="row" spacing={0} alignItems="center" sx={{ marginLeft: 'auto', gap: '4px',}}>
          <LocalVariablesPicker semanticColorJson={semanticColorJson} />
        </Stack>
      </Stack>
    </Box>
  );
}

export default App;
