import * as React from 'react';
import { Button, Box, Chip, Modal, ModalDialog, ListItem, Sheet, Stack} from '@mui/joy';
import {ChromePicker} from 'react-color';
import Color from 'tinycolor2';


export const ColorPickerListItem = ({initColor, orgColor, overrideColor, updateColorProps, title, id}) => {
  
  const [cardColor, setCardColor] = React.useState(initColor)
  const [color, setColor] = React.useState(initColor)

  React.useEffect(() => { // When we run the updateSemanticColors() in SemanticColors.ts, we need to trigger the update of both color and cardColor
    const c = setColorType(initColor);
    setColor(c);
    setCardColor(c);
  }, [initColor]);

  const handleChangeComplete = (color) => {
    const cRGBA = color.rgb; // the response from ChromePicker needs to be in rgb in order to make use of the alpha - do the conversion to rgba or hex when you save the color in - updateColorProps(id, color);
    const c = `rgba(${ cRGBA.r }, ${ cRGBA.g }, ${ cRGBA.b }, ${ cRGBA.a })`
    // console.log('handleChangeComplete', title, c);
    setColor(c); 
  };

  const setColorType= (fff) => {
    let c = Color(fff).toRgbString(); 
    if (Color(c).getAlpha() === 1) {
      c = Color(c).toHexString();
    }
    // console.log('checking setColorType(): ', title, c);
    return c;
  }; 

  let setShowOverride: boolean;
  if (overrideColor === undefined || overrideColor === '') {
    setShowOverride = false;
  } else {
    setShowOverride = true;
  }

  const [showPicker, setShowPicker] = React.useState(false);

  const openPicker = () => {
      setShowPicker(true);
  };

  const cancelPicker = () => {
    setColor(initColor); //cancel any color changes and revert back to the initial value when you opened the picker
    setShowPicker(false);
  };

  const saveColor = () => {
    const c = setColorType(color);
    setCardColor(c);
    updateColorProps(id, c);
    setShowPicker(false);
  }; 

  const resetToOrgColor = () => {
    const c = setColorType(orgColor);
    setCardColor(c);
    updateColorProps(id, '');
    setShowPicker(false);
  }; 

  return (
    <ListItem key={title} sx={{ borderTop: '1px solid rgba(0, 0, 0, 0.08)'}} >
     <Stack direction="row" alignItems="center" spacing={0} sx={{px:'13px'}}>  {/* 13px to match header 12 + 1 px */}

        <Box sx={{ position: 'relative', backgroundColor: cardColor, width: '24px', height: '24px', borderRadius: '2px', outline: 'rgba(0, 0, 0, 0.08) solid 1px', outlineOffset: '-1px', boxShadow: 'inset 0px 1px 2px 0px rgba(0, 0, 0, 0.08)', cursor:'pointer'}} onClick={openPicker} > 
          {/* <Box sx={{ position: 'absolute', bottom: '0', backgroundColor: 'white', width: '100%', height: '12px', borderTop: '1px solid rgba(0, 0, 0, 0.12)'}}>
            
          </Box> */}
          {setShowOverride  && (
              <Sheet color="warning" variant="solid" sx={{ position: 'absolute', top: '4px', right:'-8px', borderRadius: '4px', width: '4px', height: '4px'}} />
            )}
        </Box>

        <Modal sx={{ minWidth: '400px', p: '0px' }} open={showPicker} onClose={cancelPicker}>
          <ModalDialog variant='plain' sx={{ p: '0px', }} >
            <Box sx={{ position: 'relative', display: 'flex', justifyContent: 'space-between', p: '16px 16px 8px', lineHeight:'24px', borderBottom: '1px solid rgba(0, 0, 0, 0.12)', color: 'rgba(0, 0, 0, 0.87)', fontSize: '14px', fontWeight: '500'}}> 
              {title} 
              {setShowOverride  && (
                <Chip variant="solid" size='sm' color='warning' sx={{ position: 'absolute', top: '8px', right: '8px', px: '8px', "--Chip-minHeight": "16px", lineHeight:'16px', fontSize: '10px', fontWeight: '700'}}>OVERRIDE</Chip>
              )}
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'center'}}> 
              <ChromePicker color={color} onChange={handleChangeComplete}  />
            </Box>
            <Stack direction="row" justifyContent="space-between" spacing={0} sx={{p: '8px 16px 8px 16px', borderTop: '1px solid rgba(0, 0, 0, 0.12)'}}>
              {setShowOverride  && (
                <Button color='warning' size="sm" variant='outlined' onClick={resetToOrgColor} sx={{fontSize: '11px'}}>REMOVE OVERRIDE</Button>
              )} 
              <Stack direction="row" spacing={0} sx={{marginLeft: 'auto', gap: '4px'}}>
                <Button color='neutral' size="sm" variant='plain' onClick={cancelPicker} sx={{fontSize: '11px'}}>CANCEL</Button>
                <Button color='primary' size="sm" variant='solid' onClick={saveColor} sx={{fontSize: '11px'}}>SAVE</Button>
              </Stack>
            </Stack>
          </ModalDialog>
        </Modal>

        <Box sx={{ pl: '12px', lineHeight:'32px', color: 'rgba(0, 0, 0, 0.8)', fontSize: '12px', fontWeight: '300'}}> {title} </Box>
      </Stack>
    </ListItem>
  );
}