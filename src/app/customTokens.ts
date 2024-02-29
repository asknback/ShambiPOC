import Color from 'tinycolor2';
import * as functions from './helpers/functions';

type Color = string;
type ColorGenerated = string;
type ColorOverride = string;

interface ColorToken {
    [key: string]: {
        color: Color;
        colorGenerated: ColorGenerated;
        colorOverride: ColorOverride;
    };
}

const custom: ColorToken = {};

// Should we add a aliasKey so that we can link custom styles to custom vars
function updateColorToken(key: string, color: Color, colorGenerated: ColorGenerated, colorOverride: ColorOverride): void {
    // console.log("updateColorToken", key, color, colorGenerated, key)
    if (colorOverride == '' || colorOverride == undefined) {
        color = colorGenerated;
    } else {
        color = colorOverride;
    }

    if (!custom[key]) {
        custom[key] = { color: color, colorGenerated: colorGenerated, colorOverride: colorOverride };
    } else {
         custom[key].color = color;
         custom[key].colorGenerated = colorGenerated;
         custom[key].colorOverride = colorOverride;
    }
}

export const updateCustomColors = ( activeColorProps, semantic ) => {

    // console.log('updateCustomColors: ', semantic);

    // Before we update all custom tokens we update the override (if there is one)

    if (activeColorProps.id && activeColorProps.id != '') {  // check that we have an ID and that it's not empty (you can always reset a color by setting the activeColorProps.color to '' )
        updateColorToken( activeColorProps.id, '', 'Not used for overrides', activeColorProps.color);
    }

    // * * * * * * * * * * * * * * * * * * * * *
    // * * * * * * * * * * * * * * * * * * * * *
    // CUSTOM COLORS
    // Naming things to match the Figma slash naming convention 
    // makes it easier (for me) to match the ID to the token later
    
    // * * * * * * * * * * * * * * * * * * * * *
    // SANDWICH - ROW 0
    updateColorToken( 'Sandwich/row0', '', semantic['Theme/theme']?.color, custom['Sandwich/row0']?.colorOverride );
    updateColorToken( 'Sandwich/onRow0', '', functions.createOnColor(custom['Sandwich/row0'].color), custom['Sandwich/onRow0']?.colorOverride);
    updateColorToken( 'Sandwich/onRow0--hover', '', functions.createOnColorState(custom['Sandwich/row0'].color, custom['Sandwich/onRow0'].color, 'hover', 'auto', 'auto'), custom['Sandwich/onRow0--hover']?.colorOverride);
    updateColorToken( 'Sandwich/onRow0--active', '', functions.createOnColorState(custom['Sandwich/row0'].color, custom['Sandwich/onRow0'].color, 'active', 'auto', 'auto'), custom['Sandwich/onRow0--active']?.colorOverride);
    updateColorToken( 'Sandwich/onRow0_weaker', '', functions.createOnWeakerColor(custom['Sandwich/row0'].color, custom['Sandwich/onRow0'].color), custom['Sandwich/onRow0_weaker']?.colorOverride);
    updateColorToken( 'Sandwich/onRow0_weaker--hover', '', functions.createOnColorState(custom['Sandwich/row0'].color, custom['Sandwich/onRow0_weaker'].color, 'hover', 'auto', 'auto'), custom['Sandwich/onRow0_weaker--hover']?.colorOverride);
    updateColorToken( 'Sandwich/onRow0_weaker--active', '', functions.createOnColorState(custom['Sandwich/row0'].color, custom['Sandwich/onRow0_weaker'].color, 'active', 'auto', 'auto'), custom['Sandwich/onRow0_weaker--active']?.colorOverride);
    updateColorToken( 'Sandwich/row0--hover', '', functions.createColorState(custom['Sandwich/row0'].color, custom['Sandwich/onRow0'].color, 'hover', 'subtle', 'auto'), custom['Sandwich/row0--hover']?.colorOverride);
    updateColorToken( 'Sandwich/row0--active', '', functions.createColorState(custom['Sandwich/row0'].color, custom['Sandwich/onRow0'].color, 'active', 'subtle', 'auto'), custom['Sandwich/row0--active']?.colorOverride);
    updateColorToken( 'Sandwich/row0Border', '', functions.createBorder(custom['Sandwich/row0'].color, 'auto', 'normal'), custom['Sandwich/row0Border']?.colorOverride);

    // * * * * * * * * * * * * * * * * * * * * *
    // SANDWICH - ROW 0 - SELECTED
    updateColorToken( 'Sandwich/row0Selected', '', custom['Sandwich/onRow0']?.color, custom['Sandwich/row0Selected']?.colorOverride );
    updateColorToken( 'Sandwich/onRow0Selected', '', functions.createOnColor(custom['Sandwich/row0Selected'].color), custom['Sandwich/onRow0Selected']?.colorOverride);
    updateColorToken( 'Sandwich/onRow0Selected--hover', '', functions.createOnColorState(custom['Sandwich/row0Selected'].color, custom['Sandwich/onRow0Selected'].color, 'hover', 'auto', 'auto'), custom['Sandwich/onRow0Selected--hover']?.colorOverride);
    updateColorToken( 'Sandwich/onRow0Selected--active', '', functions.createOnColorState(custom['Sandwich/row0Selected'].color, custom['Sandwich/onRow0Selected'].color, 'active', 'auto', 'auto'), custom['Sandwich/onRow0Selected--active']?.colorOverride);
    updateColorToken( 'Sandwich/onRow0Selected_weaker', '', functions.createOnWeakerColor(custom['Sandwich/row0Selected'].color, custom['Sandwich/onRow0Selected'].color), custom['Sandwich/onRow0Selected_weaker']?.colorOverride);
    updateColorToken( 'Sandwich/onRow0Selected_weaker--hover', '', functions.createOnColorState(custom['Sandwich/row0Selected'].color, custom['Sandwich/onRow0Selected_weaker'].color, 'hover', 'auto', 'auto'), custom['Sandwich/onRow0Selected_weaker--hover']?.colorOverride);
    updateColorToken( 'Sandwich/onRow0Selected_weaker--active', '', functions.createOnColorState(custom['Sandwich/row0Selected'].color, custom['Sandwich/onRow0Selected_weaker'].color, 'active', 'auto', 'auto'), custom['Sandwich/onRow0Selected_weaker--active']?.colorOverride);
    updateColorToken( 'Sandwich/row0Selected--hover', '', functions.createColorState(custom['Sandwich/row0Selected'].color, custom['Sandwich/onRow0Selected'].color, 'hover', 'subtle', 'auto'), custom['Sandwich/row0Selected--hover']?.colorOverride);
    updateColorToken( 'Sandwich/row0Selected--active', '', functions.createColorState(custom['Sandwich/row0Selected'].color, custom['Sandwich/onRow0Selected'].color, 'active', 'subtle', 'auto'), custom['Sandwich/row0Selected--active']?.colorOverride);
    updateColorToken( 'Sandwich/row0SelectedBorder', '', functions.createBorder(custom['Sandwich/row0Selected'].color, 'auto', 'normal'), custom['Sandwich/row0SelectedBorder']?.colorOverride);

    // * * * * * * * * * * * * * * * * * * * * *
    // SANDWICH - ROW 1
    updateColorToken( 'Sandwich/row1', '', functions.createSandwichNewRow(custom['Sandwich/row0'].color), custom['Sandwich/row1']?.colorOverride );
    updateColorToken( 'Sandwich/onRow1', '', functions.createOnColor(custom['Sandwich/row1'].color), custom['Sandwich/onRow1']?.colorOverride);
    updateColorToken( 'Sandwich/onRow1--hover', '', functions.createOnColorState(custom['Sandwich/row1'].color, custom['Sandwich/onRow1'].color, 'hover', 'auto', 'auto'), custom['Sandwich/onRow1--hover']?.colorOverride);
    updateColorToken( 'Sandwich/onRow1--active', '', functions.createOnColorState(custom['Sandwich/row1'].color, custom['Sandwich/onRow1'].color, 'active', 'auto', 'auto'), custom['Sandwich/onRow1--active']?.colorOverride);
    updateColorToken( 'Sandwich/onRow1_weaker', '', functions.createOnWeakerColor(custom['Sandwich/row1'].color, custom['Sandwich/onRow1'].color), custom['Sandwich/onRow1_weaker']?.colorOverride);
    updateColorToken( 'Sandwich/onRow1_weaker--hover', '', functions.createOnColorState(custom['Sandwich/row1'].color, custom['Sandwich/onRow1_weaker'].color, 'hover', 'auto', 'auto'), custom['Sandwich/onRow1_weaker--hover']?.colorOverride);
    updateColorToken( 'Sandwich/onRow1_weaker--active', '', functions.createOnColorState(custom['Sandwich/row1'].color, custom['Sandwich/onRow1_weaker'].color, 'active', 'auto', 'auto'), custom['Sandwich/onRow1_weaker--active']?.colorOverride);
    updateColorToken( 'Sandwich/row1--hover', '', functions.createColorState(custom['Sandwich/row1'].color, custom['Sandwich/onRow1'].color, 'hover', 'subtle', 'auto'), custom['Sandwich/row1--hover']?.colorOverride);
    updateColorToken( 'Sandwich/row1--active', '', functions.createColorState(custom['Sandwich/row1'].color, custom['Sandwich/onRow1'].color, 'active', 'subtle', 'auto'), custom['Sandwich/row1--active']?.colorOverride);
    updateColorToken( 'Sandwich/row1Border', '', functions.createBorder(custom['Sandwich/row1'].color, 'auto', 'normal'), custom['Sandwich/row1Border']?.colorOverride);

    // SANDWICH - ROW 1 - SELECTED
    updateColorToken( 'Sandwich/row1Selected', '', custom['Sandwich/onRow1']?.color, custom['Sandwich/row1Selected']?.colorOverride );
    updateColorToken( 'Sandwich/onRow1Selected', '', functions.createOnColor(custom['Sandwich/row1Selected'].color), custom['Sandwich/onRow1Selected']?.colorOverride);
    updateColorToken( 'Sandwich/onRow1Selected--hover', '', functions.createOnColorState(custom['Sandwich/row1Selected'].color, custom['Sandwich/onRow1Selected'].color, 'hover', 'auto', 'auto'), custom['Sandwich/onRow1Selected--hover']?.colorOverride);
    updateColorToken( 'Sandwich/onRow1Selected--active', '', functions.createOnColorState(custom['Sandwich/row1Selected'].color, custom['Sandwich/onRow1Selected'].color, 'active', 'auto', 'auto'), custom['Sandwich/onRow1Selected--active']?.colorOverride);
    updateColorToken( 'Sandwich/onRow1Selected_weaker', '', functions.createOnWeakerColor(custom['Sandwich/row1Selected'].color, custom['Sandwich/onRow1Selected'].color), custom['Sandwich/onRow1Selected_weaker']?.colorOverride);
    updateColorToken( 'Sandwich/onRow1Selected_weaker--hover', '', functions.createOnColorState(custom['Sandwich/row1Selected'].color, custom['Sandwich/onRow1Selected_weaker'].color, 'hover', 'auto', 'auto'), custom['Sandwich/onRow1Selected_weaker--hover']?.colorOverride);
    updateColorToken( 'Sandwich/onRow1Selected_weaker--active', '', functions.createOnColorState(custom['Sandwich/row1Selected'].color, custom['Sandwich/onRow1Selected_weaker'].color, 'active', 'auto', 'auto'), custom['Sandwich/onRow1Selected_weaker--active']?.colorOverride);
    updateColorToken( 'Sandwich/row1Selected--hover', '', functions.createColorState(custom['Sandwich/row1Selected'].color, custom['Sandwich/onRow1Selected'].color, 'hover', 'subtle', 'auto'), custom['Sandwich/row1Selected--hover']?.colorOverride);
    updateColorToken( 'Sandwich/row1Selected--active', '', functions.createColorState(custom['Sandwich/row1Selected'].color, custom['Sandwich/onRow1Selected'].color, 'active', 'subtle', 'auto'), custom['Sandwich/row1Selected--active']?.colorOverride);
    updateColorToken( 'Sandwich/row1SelectedBorder', '', functions.createBorder(custom['Sandwich/row1Selected'].color, 'auto', 'normal'), custom['Sandwich/row1SelectedBorder']?.colorOverride);

    // * * * * * * * * * * * * * * * * * * * * *
    // SANDWICH - ROW 2
    updateColorToken( 'Sandwich/row2', '', functions.createSandwichNewRow(custom['Sandwich/row1'].color), custom['Sandwich/row2']?.colorOverride );
    updateColorToken( 'Sandwich/onRow2', '', functions.createOnColor(custom['Sandwich/row2'].color), custom['Sandwich/onRow2']?.colorOverride);
    updateColorToken( 'Sandwich/onRow2--hover', '', functions.createOnColorState(custom['Sandwich/row2'].color, custom['Sandwich/onRow2'].color, 'hover', 'auto', 'auto'), custom['Sandwich/onRow2--hover']?.colorOverride);
    updateColorToken( 'Sandwich/onRow2--active', '', functions.createOnColorState(custom['Sandwich/row2'].color, custom['Sandwich/onRow2'].color, 'active', 'auto', 'auto'), custom['Sandwich/onRow2--active']?.colorOverride);
    updateColorToken( 'Sandwich/onRow2_weaker', '', functions.createOnWeakerColor(custom['Sandwich/row2'].color, custom['Sandwich/onRow2'].color), custom['Sandwich/onRow2_weaker']?.colorOverride);
    updateColorToken( 'Sandwich/onRow2_weaker--hover', '', functions.createOnColorState(custom['Sandwich/row2'].color, custom['Sandwich/onRow2_weaker'].color, 'hover', 'auto', 'auto'), custom['Sandwich/onRow2_weaker--hover']?.colorOverride);
    updateColorToken( 'Sandwich/onRow2_weaker--active', '', functions.createOnColorState(custom['Sandwich/row2'].color, custom['Sandwich/onRow2_weaker'].color, 'active', 'auto', 'auto'), custom['Sandwich/onRow2_weaker--active']?.colorOverride);
    updateColorToken( 'Sandwich/row2--hover', '', functions.createColorState(custom['Sandwich/row2'].color, custom['Sandwich/onRow2'].color, 'hover', 'subtle', 'auto'), custom['Sandwich/row2--hover']?.colorOverride);
    updateColorToken( 'Sandwich/row2--active', '', functions.createColorState(custom['Sandwich/row2'].color, custom['Sandwich/onRow2'].color, 'active', 'subtle', 'auto'), custom['Sandwich/row2--active']?.colorOverride);
    updateColorToken( 'Sandwich/row2Border', '', functions.createBorder(custom['Sandwich/row2'].color, 'auto', 'normal'), custom['Sandwich/row2Border']?.colorOverride);

    // * * * * * * * * * * * * * * * * * * * * *
    // SANDWICH - ROW 2 - SELECTED
    updateColorToken( 'Sandwich/row2Selected', '', custom['Sandwich/onRow2']?.color, custom['Sandwich/row2Selected']?.colorOverride );
    updateColorToken( 'Sandwich/onRow2Selected', '', functions.createOnColor(custom['Sandwich/row2Selected'].color), custom['Sandwich/onRow2Selected']?.colorOverride);
    updateColorToken( 'Sandwich/onRow2Selected--hover', '', functions.createOnColorState(custom['Sandwich/row2Selected'].color, custom['Sandwich/onRow2Selected'].color, 'hover', 'auto', 'auto'), custom['Sandwich/onRow2Selected--hover']?.colorOverride);
    updateColorToken( 'Sandwich/onRow2Selected--active', '', functions.createOnColorState(custom['Sandwich/row2Selected'].color, custom['Sandwich/onRow2Selected'].color, 'active', 'auto', 'auto'), custom['Sandwich/onRow2Selected--active']?.colorOverride);
    updateColorToken( 'Sandwich/onRow2Selected_weaker', '', functions.createOnWeakerColor(custom['Sandwich/row2Selected'].color, custom['Sandwich/onRow2Selected'].color), custom['Sandwich/onRow2Selected_weaker']?.colorOverride);
    updateColorToken( 'Sandwich/onRow2Selected_weaker--hover', '', functions.createOnColorState(custom['Sandwich/row2Selected'].color, custom['Sandwich/onRow2Selected_weaker'].color, 'hover', 'auto', 'auto'), custom['Sandwich/onRow2Selected_weaker--hover']?.colorOverride);
    updateColorToken( 'Sandwich/onRow2Selected_weaker--active', '', functions.createOnColorState(custom['Sandwich/row2Selected'].color, custom['Sandwich/onRow2Selected_weaker'].color, 'active', 'auto', 'auto'), custom['Sandwich/onRow2Selected_weaker--active']?.colorOverride);
    updateColorToken( 'Sandwich/row2Selected--hover', '', functions.createColorState(custom['Sandwich/row2Selected'].color, custom['Sandwich/onRow2Selected'].color, 'hover', 'subtle', 'auto'), custom['Sandwich/row2Selected--hover']?.colorOverride);
    updateColorToken( 'Sandwich/row2Selected--active', '', functions.createColorState(custom['Sandwich/row2Selected'].color, custom['Sandwich/onRow2Selected'].color, 'active', 'subtle', 'auto'), custom['Sandwich/row2Selected--active']?.colorOverride);
    updateColorToken( 'Sandwich/row2SelectedBorder', '', functions.createBorder(custom['Sandwich/row2Selected'].color, 'auto', 'normal'), custom['Sandwich/row2SelectedBorder']?.colorOverride);

    // * * * * * * * * * * * * * * * * * * * * *
    // SANDWICH - ROW 3
    updateColorToken( 'Sandwich/row3', '', functions.createSandwichNewRow(custom['Sandwich/row2'].color), custom['Sandwich/row3']?.colorOverride );
    updateColorToken( 'Sandwich/onRow3', '', functions.createOnColor(custom['Sandwich/row3'].color), custom['Sandwich/onRow3']?.colorOverride);
    updateColorToken( 'Sandwich/onRow3--hover', '', functions.createOnColorState(custom['Sandwich/row3'].color, custom['Sandwich/onRow3'].color, 'hover', 'auto', 'auto'), custom['Sandwich/onRow3--hover']?.colorOverride);
    updateColorToken( 'Sandwich/onRow3--active', '', functions.createOnColorState(custom['Sandwich/row3'].color, custom['Sandwich/onRow3'].color, 'active', 'auto', 'auto'), custom['Sandwich/onRow3--active']?.colorOverride);
    updateColorToken( 'Sandwich/onRow3_weaker', '', functions.createOnWeakerColor(custom['Sandwich/row3'].color, custom['Sandwich/onRow3'].color), custom['Sandwich/onRow3_weaker']?.colorOverride);
    updateColorToken( 'Sandwich/onRow3_weaker--hover', '', functions.createOnColorState(custom['Sandwich/row3'].color, custom['Sandwich/onRow3_weaker'].color, 'hover', 'auto', 'auto'), custom['Sandwich/onRow3_weaker--hover']?.colorOverride);
    updateColorToken( 'Sandwich/onRow3_weaker--active', '', functions.createOnColorState(custom['Sandwich/row3'].color, custom['Sandwich/onRow3_weaker'].color, 'active', 'auto', 'auto'), custom['Sandwich/onRow3_weaker--active']?.colorOverride);
    updateColorToken( 'Sandwich/row3--hover', '', functions.createColorState(custom['Sandwich/row3'].color, custom['Sandwich/onRow3'].color, 'hover', 'subtle', 'auto'), custom['Sandwich/row3--hover']?.colorOverride);
    updateColorToken( 'Sandwich/row3--active', '', functions.createColorState(custom['Sandwich/row3'].color, custom['Sandwich/onRow3'].color, 'active', 'subtle', 'auto'), custom['Sandwich/row3--active']?.colorOverride);
    updateColorToken( 'Sandwich/row3Border', '', functions.createBorder(custom['Sandwich/row3'].color, 'auto', 'normal'), custom['Sandwich/row3Border']?.colorOverride);

    // * * * * * * * * * * * * * * * * * * * * *
    // SANDWICH - ROW 3 - SELECTED
    updateColorToken( 'Sandwich/row3Selected', '', custom['Sandwich/onRow3']?.color, custom['Sandwich/row3Selected']?.colorOverride );
    updateColorToken( 'Sandwich/onRow3Selected', '', functions.createOnColor(custom['Sandwich/row3Selected'].color), custom['Sandwich/onRow3Selected']?.colorOverride);
    updateColorToken( 'Sandwich/onRow3Selected--hover', '', functions.createOnColorState(custom['Sandwich/row3Selected'].color, custom['Sandwich/onRow3Selected'].color, 'hover', 'auto', 'auto'), custom['Sandwich/onRow3Selected--hover']?.colorOverride);
    updateColorToken( 'Sandwich/onRow3Selected--active', '', functions.createOnColorState(custom['Sandwich/row3Selected'].color, custom['Sandwich/onRow3Selected'].color, 'active', 'auto', 'auto'), custom['Sandwich/onRow3Selected--active']?.colorOverride);
    updateColorToken( 'Sandwich/onRow3Selected_weaker', '', functions.createOnWeakerColor(custom['Sandwich/row3Selected'].color, custom['Sandwich/onRow3Selected'].color), custom['Sandwich/onRow3Selected_weaker']?.colorOverride);
    updateColorToken( 'Sandwich/onRow3Selected_weaker--hover', '', functions.createOnColorState(custom['Sandwich/row3Selected'].color, custom['Sandwich/onRow3Selected_weaker'].color, 'hover', 'auto', 'auto'), custom['Sandwich/onRow3Selected_weaker--hover']?.colorOverride);
    updateColorToken( 'Sandwich/onRow3Selected_weaker--active', '', functions.createOnColorState(custom['Sandwich/row3Selected'].color, custom['Sandwich/onRow3Selected_weaker'].color, 'active', 'auto', 'auto'), custom['Sandwich/onRow3Selected_weaker--active']?.colorOverride);
    updateColorToken( 'Sandwich/row3Selected--hover', '', functions.createColorState(custom['Sandwich/row3Selected'].color, custom['Sandwich/onRow3Selected'].color, 'hover', 'subtle', 'auto'), custom['Sandwich/row3Selected--hover']?.colorOverride);
    updateColorToken( 'Sandwich/row3Selected--active', '', functions.createColorState(custom['Sandwich/row3Selected'].color, custom['Sandwich/onRow3Selected'].color, 'active', 'subtle', 'auto'), custom['Sandwich/row3Selected--active']?.colorOverride);
    updateColorToken( 'Sandwich/row3SelectedBorder', '', functions.createBorder(custom['Sandwich/row3Selected'].color, 'auto', 'normal'), custom['Sandwich/row3SelectedBorder']?.colorOverride);

    return {
        ...custom,
    };
};
