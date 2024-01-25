// import Color from 'tinycolor2';
import * as functions from './helpers/functions';

// Semantic
const semantic: ColorToken = {};

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

function updateColorToken(key: string, color: Color, colorGenerated: ColorGenerated, colorOverride: ColorOverride): void {
    // let keyx = key.toString();
    // let colorx = color.toString();
    // let colorGeneratedx = colorGenerated.toString();
    // let colorOverridex = colorOverride.toString();

    // console.log(keyx, colorx, colorGeneratedx, colorOverridex)


    if (colorOverride != '') {
        // console.log("colorOverride", colorOverride)
        color = colorOverride;
        // console.log("colorOverride.color", color)
    } else {
        color = colorGenerated;
        // console.log("colorGenerated", colorGenerated)
        // console.log("colorGenerated.color", color)
    }
    // console.log("updateColorToken", key, color, colorGenerated, colorOverride)

    if (!semantic[key]) {
        // console.log("!semantic[key]", color)
        semantic[key] = { color: color, colorGenerated: colorGenerated, colorOverride: colorOverride };
    } else {
        // console.log("Has semantic[key]", color)
         semantic[key].color = color;
         semantic[key].colorGenerated = colorGenerated;
         semantic[key].colorOverride = colorOverride;
    }
    console.log("semantic[key]", key, semantic[key])

}

export const updateSemanticColors = (
    themeColor,
    transactionColor,
    highlightColor,
    canvasColor,
    surfaceColor) => {

    // Base colour comes from the colour picker in the App UI
    const baseColors = {
        Theme: themeColor,
        Transaction: transactionColor,
        Highlight: highlightColor,
        Canvas: canvasColor,
        Surface: surfaceColor 
    };

    

    console.log("baseColors['Theme']", baseColors['Theme'])

    // Naming things to match the Figma slash naming convention makes it easier for me to match the ID to the token later
    
    // * * * * * * * * * * * * * * * * * * * * *
    // THEME 
    updateColorToken( 'Theme/theme', '', 'This is a base color', baseColors['Theme']);
    updateColorToken( 'Theme/onTheme', '', functions.createOnColor(semantic['Theme/theme'].color), '');
    updateColorToken( 'Theme/onTheme--hover', '', functions.createOnColorState(semantic['Theme/theme'].color, semantic['Theme/onTheme'].color, 'hover', 'auto', 'auto'), '');
    updateColorToken( 'Theme/onTheme--active', '', functions.createOnColorState(semantic['Theme/theme'].color, semantic['Theme/onTheme'].color, 'active', 'auto', 'auto'), '');
    updateColorToken( 'Theme/onTheme_weaker', '', functions.createOnWeakerColor(semantic['Theme/theme'].color, semantic['Theme/onTheme'].color), '');
    updateColorToken( 'Theme/onTheme_weaker--hover', '', functions.createOnColorState(semantic['Theme/theme'].color, semantic['Theme/onTheme_weaker'].color, 'hover', 'auto', 'auto'), '');
    updateColorToken( 'Theme/onTheme_weaker--active', '', functions.createOnColorState(semantic['Theme/theme'].color, semantic['Theme/onTheme_weaker'].color, 'active', 'auto', 'auto'), '');
    updateColorToken( 'Theme/theme--hover', '', functions.createColorState(semantic['Theme/theme'].color, semantic['Theme/onTheme'].color, 'hover', 'subtle', 'auto'), '');
    updateColorToken( 'Theme/theme--active', '', functions.createColorState(semantic['Theme/theme'].color, semantic['Theme/onTheme'].color, 'active', 'subtle', 'auto'), '');
    updateColorToken( 'Theme/themeBorder', '', functions.createBorder(semantic['Theme/theme'].color, 'auto', 'normal'), '');


    return {
        ...semantic,
    };
};
