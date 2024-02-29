import * as React from 'react';
import _, {set} from 'lodash';
import { AccordionGroup, Accordion, AccordionSummary, accordionSummaryClasses, AccordionDetails, accordionDetailsClasses, Box, List, Stack} from '@mui/joy';
import {ColorPickerCard} from './ColorPickerCard';
import {ColorPickerListItem} from './ColorPickerListItem';

export const PageSemanticColors = ({SemanticColors, ActiveSemanticColorProps}) => {

  const semanticColors = SemanticColors;

  interface ColorTree {
    [key: string]: { [subKey: string]: {color: string, colorGenerated: string, colorOverride: string} };
  }

  const semanticColorTree: ColorTree = Object.entries(semanticColors).reduce((acc, [key, value]) => {
    const path = key.split('/');
    set(acc, path, value);
    return acc;
  }, {}); 

  const highlightedKeys = ['Theme', 'Canvas', 'Surface', 'Highlight', 'Transaction'];
  
  return (
    <Stack direction="column" sx={{ p: 2}}>
    <Stack direction="column" justifyContent="center" alignItems="center" spacing={2}>
      <Stack direction="row" sx={{ width: '100%',}} justifyContent="flexStart" alignItems="center" spacing={1}>
        

        {Object.entries(semanticColorTree)
          .filter(([key]) => highlightedKeys.includes(key))
          .map(([key, subTree]) => {
            const firstSubKey = Object.keys(subTree)[0];
            const firstSubObject = subTree[firstSubKey];

            return (
              <ColorPickerCard
                key={`${key}/${firstSubKey}`} 
                initColor={firstSubObject.color}
                orgColor ={firstSubObject.colorGenerated}
                overrideColor ={firstSubObject.colorOverride}
                updateColorProps={ActiveSemanticColorProps}
                title={key}
                id={`${key}/${firstSubKey}`} />
            );
          })}
      </Stack>
      <Box role='accordionWrapper' sx={{ width: '100%', px: '1px'}}> {/* adding 1 px padding due to outline - also border radius of child gets another px*/}
        <AccordionGroup color='neutral' variant="solid"  sx={{ bgcolor: '#FFFFFF', width: '100%', boxShadow: 'md', borderRadius: '5px', overflow:'hidden', outline: 'rgba(0, 0, 0, 0.12) solid 1px'}}> 
          {Object.entries(semanticColorTree).map(([key, subTree]) => {
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
                  {Object.keys(semanticColorTree[key]).map((subKey) => {
                    const value = semanticColorTree[key][subKey];
                    return (
                      <ColorPickerListItem
                        key={`${key}/${subKey}`} 
                        initColor={value.color}
                        orgColor ={value.colorGenerated}
                        overrideColor ={value.colorOverride}
                        updateColorProps={ActiveSemanticColorProps}
                        title={subKey}
                        id={`${key}/${subKey}`} />
                    );
                  })}
                </List>
              </AccordionDetails>
            </Accordion>
            );
          })}
        </AccordionGroup>
      </Box>
    </Stack>
  </Stack>
  );
}