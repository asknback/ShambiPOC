import * as React from 'react';
import _, {set} from 'lodash';
import CssBaseline from '@mui/material/CssBaseline';
import {AppBar, Box, Grid}  from '@mui/material';
import {AppTabs, AppTab} from '../components/AppTabs';
import {ColorPicker} from '../components/ColorPicker';
import {updateSemanticColors} from '../semanticTokens';

function App() {

  // Set colour for ColorPickers
  const [themeColor, setThemeColor] = React.useState('#004370');
  const [transactionColor, setTransactionColor] = React.useState('#008061');
  const [highlightColor, setHighlightColor] = React.useState('#FFA300');
  const [canvasColor, setCanvasColor] = React.useState('#F0F0F0');
  const [surfaceColor, setSurfaceColor] = React.useState('#FFFFFF');

  // Set semantic colors (tokens)
  const [semanticColors, setSemanticColors] = React.useState(() => updateSemanticColors(themeColor, transactionColor, highlightColor, canvasColor, surfaceColor));

  const updateThemeColor = (color) => {
    setThemeColor(color);
  };

  React.useEffect(() => {
    setSemanticColors(updateSemanticColors(themeColor, transactionColor, highlightColor, canvasColor, surfaceColor));
  }, [themeColor]); // This effect runs whenever themeColor changes


  // Token city!
  const tree = Object.entries(semanticColors).reduce((acc, [key, value]) => {
    const path = key.split('/');
    set(acc, path, value);
    return acc;
  }, {});
  console.log('Tree: ', tree);

  // Update Tabs and TapPanels
  const [value, setValue] = React.useState(0);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    // console.log('event', event);
    setValue(newValue);
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', bgcolor: '#f6f6f6', height: '100vh'}}>
      <CssBaseline />
      <AppBar position="static" elevation={0} sx={{ bgcolor: 'background.paper'}}>
        <AppTabs value={value} onChange={handleChange} TabIndicatorProps={{ hidden: true }} sx={{ px: '20px'}}>
          <AppTab label="Semantic Colors" />
          <AppTab label="Custom Colors" />
          <AppTab label="Typography" />
          <AppTab label="Spacing & Sizing" />
          <AppTab label="Shadows" /> 
        </AppTabs>
      </AppBar>
      <Box component="main" sx={{ flexGrow: 1, overflow: 'auto' }}>
        <Box role="tabpanel" hidden={value !== 0} sx={{ p: 2 }}>
        <Grid container justifyContent="flex-start" >
            <ColorPicker 
              activeColor={themeColor}
              updateColor={updateThemeColor}
              title="Theme"
            />
            <ColorPicker 
              activeColor={themeColor}
              updateColor={updateThemeColor}
              title="Canvas"
            />
            <ColorPicker 
              activeColor={themeColor}
              updateColor={updateThemeColor}
              title="Surface"
            />
            <ColorPicker 
              activeColor={themeColor}
              updateColor={updateThemeColor}
              title="Highlight"
            />
            <ColorPicker 
              activeColor={themeColor}
              updateColor={updateThemeColor}
              title="Transaction"
            />
            <ColorPicker 
              activeColor={themeColor}
              updateColor={updateThemeColor}
              title="Selected"
            />
            <ColorPicker 
              activeColor={themeColor}
              updateColor={updateThemeColor}
              title="Header"
            />
          </Grid>
        </Box>
        <Box role="tabpanel" hidden={value !== 1} sx={{ p: 2 }}>Custom Colors</Box>
        <Box role="tabpanel" hidden={value !== 2} sx={{ p: 2 }}>Typography</Box>
        <Box role="tabpanel" hidden={value !== 3} sx={{ p: 2 }}>Spacing & Sizing</Box>
        <Box role="tabpanel" hidden={value !== 4} sx={{ p: 2 }}>Shadows</Box>
      </Box>
      <Box sx={{ textAlign: 'right', bgcolor: 'background.paper', borderTop: '1px solid #e8e8e8', px: '24px',fontSize: '11px', lineHeight: '40px', color: 'rgba(0, 0, 0, 0.56)'}}>
        v. 0.012
      </Box>
    </Box>
  );
}

export default App;
