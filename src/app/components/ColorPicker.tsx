import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import Typography from '@mui/material/Typography';
import { Box, Paper } from '@mui/material';
import {ChromePicker} from 'react-color';


export const ColorPicker = ({activeColor, updateColor, title}) => {

  // let newColor = activeColor; 
  const [newColor, setNewColor] = React.useState(activeColor)//just to set and change the color of the button

  // const [buttonColor, setButtonColor] = useState('#004370');


  const [color, setColor] = React.useState(activeColor)
  const handleChangeComplete = (color) => {
      setColor(color.hex.toString());
  };

  const [showPicker, setShowPicker] = React.useState(false);

  const openPicker = () => {
      setShowPicker(true);
  };

  const closePicker = () => {
      setShowPicker(false);
  };

  const saveColor = () => {
    console.log('color', color);
    console.log('newColor 1', newColor);
      setNewColor(color);
      updateColor(color);
      closePicker();
      console.log('newColor 2', newColor);
  }; 



  return (
    <Box sx={{ margin:'8px'}}>
      <Paper elevation={4} sx={{ position: 'relative', backgroundColor: newColor, width: '96px', height: '72px', borderRadius:'4px', overflow:'hidden', cursor:'pointer'}} onClick={openPicker} > 
        <Box sx={{ position: 'absolute', bottom: '0',backgroundColor: 'white', width: '96px', height: '24px', textAlign:'center', lineHeight:'24px', color: 'rgba(0, 0, 0, 0.56)', fontSize: '11px',}} onClick={openPicker} > 
          {title}
        </Box>
      </Paper>
      
      <Dialog open={showPicker} onClose={closePicker}>
        <DialogContent sx={{ p: '16px' }}>
          <ChromePicker
            color={color}
            onChange={handleChangeComplete}
            disableAlpha
          />
        </DialogContent>
        <DialogActions sx={{ p: '0px 16px 8px 16px' }}>
          <Button onClick={closePicker}>Cancel</Button>
          <Button onClick={saveColor} autoFocus>
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}