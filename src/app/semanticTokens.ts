// import Color from 'tinycolor2';
import * as functions from './helpers/functions';

// Set up core semantic colors as constants until we have a better way of initiating this 
// Maybe start off the client by looking at what colors we've set the color pickers to
// Or other way around?

const coreTheme = '#004370';
const coreCanvas = '#E6E6E6';
const coreSurface = '#FFFFFF';
const coreHighlight = '#FFA300';
const coreTransaction = '#008061';

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

const semantic: ColorToken = {};

function updateColorToken(key: string, color: Color, colorGenerated: ColorGenerated, colorOverride: ColorOverride): void {
    // console.log("updateColorToken", key, color, colorGenerated, key)
    if (colorOverride == '' || colorOverride == undefined) {
        color = colorGenerated;
    } else {
        color = colorOverride;
    }

    if (!semantic[key]) {
        semantic[key] = { color: color, colorGenerated: colorGenerated, colorOverride: colorOverride };
    } else {
         semantic[key].color = color;
         semantic[key].colorGenerated = colorGenerated;
         semantic[key].colorOverride = colorOverride;
    }
    // console.log("semantic[key]", key, semantic[key])
}

export const updateSemanticColors = ( activeColorProps ) => {

    // Before we update all semantic tokens we update the override (if there is one)

    if (activeColorProps.id && activeColorProps.id != '') {  // check that we have an ID and that it's not empty (you can always reset a color by setting the activeColorProps.color to '' )
        updateColorToken( activeColorProps.id, '', 'Not used for overrides', activeColorProps.color);
    }

    // SEMANTIC COLORS
    // Naming things to match the Figma slash naming convention 
    // makes it easier for me to match the ID to the token later
    
    // * * * * * * * * * * * * * * * * * * * * *
    // THEME 
    updateColorToken( 'Theme/theme', '', coreTheme, semantic['Theme/theme']?.colorOverride );
    updateColorToken( 'Theme/onTheme', '', functions.createOnColor(semantic['Theme/theme'].color), semantic['Theme/onTheme']?.colorOverride);
    updateColorToken( 'Theme/onTheme--hover', '', functions.createOnColorState(semantic['Theme/theme'].color, semantic['Theme/onTheme'].color, 'hover', 'auto', 'auto'), semantic['Theme/onTheme--hover']?.colorOverride);
    updateColorToken( 'Theme/onTheme--active', '', functions.createOnColorState(semantic['Theme/theme'].color, semantic['Theme/onTheme'].color, 'active', 'auto', 'auto'), semantic['Theme/onTheme--active']?.colorOverride);
    updateColorToken( 'Theme/onTheme_weaker', '', functions.createOnWeakerColor(semantic['Theme/theme'].color, semantic['Theme/onTheme'].color), semantic['Theme/onTheme_weaker']?.colorOverride);
    updateColorToken( 'Theme/onTheme_weaker--hover', '', functions.createOnColorState(semantic['Theme/theme'].color, semantic['Theme/onTheme_weaker'].color, 'hover', 'auto', 'auto'), semantic['Theme/onTheme_weaker--hover']?.colorOverride);
    updateColorToken( 'Theme/onTheme_weaker--active', '', functions.createOnColorState(semantic['Theme/theme'].color, semantic['Theme/onTheme_weaker'].color, 'active', 'auto', 'auto'), semantic['Theme/onTheme_weaker--active']?.colorOverride);
    updateColorToken( 'Theme/theme--hover', '', functions.createColorState(semantic['Theme/theme'].color, semantic['Theme/onTheme'].color, 'hover', 'subtle', 'auto'), semantic['Theme/theme--hover']?.colorOverride);
    updateColorToken( 'Theme/theme--active', '', functions.createColorState(semantic['Theme/theme'].color, semantic['Theme/onTheme'].color, 'active', 'subtle', 'auto'), semantic['Theme/theme--active']?.colorOverride);
    updateColorToken( 'Theme/themeBorder', '', functions.createBorder(semantic['Theme/theme'].color, 'auto', 'normal'), semantic['Theme/themeBorder']?.colorOverride);

    // * * * * * * * * * * * * * * * * * * * * *
    // CANVAS
    updateColorToken( 'Canvas/canvas', '', coreCanvas, semantic['Canvas/canvas']?.colorOverride );
    updateColorToken( 'Canvas/onCanvas', '', functions.createOnColor(semantic['Canvas/canvas'].color), semantic['Canvas/onCanvas']?.colorOverride);
    updateColorToken( 'Canvas/onCanvas--hover', '', functions.createOnColorState(semantic['Canvas/canvas'].color, semantic['Canvas/onCanvas'].color, 'hover', 'auto', 'auto'), semantic['Canvas/onCanvas--hover']?.colorOverride);
    updateColorToken( 'Canvas/onCanvas--active', '', functions.createOnColorState(semantic['Canvas/canvas'].color, semantic['Canvas/onCanvas'].color, 'active', 'auto', 'auto'), semantic['Canvas/onCanvas--active']?.colorOverride);
    updateColorToken( 'Canvas/onTheme_weaker', '', functions.createOnWeakerColor(semantic['Canvas/canvas'].color, semantic['Canvas/onCanvas'].color), semantic['Canvas/onTheme_weaker']?.colorOverride);
    updateColorToken( 'Canvas/onTheme_weaker--hover', '', functions.createOnColorState(semantic['Canvas/canvas'].color, semantic['Canvas/onTheme_weaker'].color, 'hover', 'auto', 'auto'), semantic['Canvas/onTheme_weaker--hover']?.colorOverride);
    updateColorToken( 'Canvas/onTheme_weaker--active', '', functions.createOnColorState(semantic['Canvas/canvas'].color, semantic['Canvas/onTheme_weaker'].color, 'active', 'auto', 'auto'), semantic['Canvas/onTheme_weaker--active']?.colorOverride);
    updateColorToken( 'Canvas/canvas--hover', '', functions.createColorState(semantic['Canvas/canvas'].color, semantic['Canvas/onCanvas'].color, 'hover', 'subtle', 'auto'), semantic['Canvas/canvas--hover']?.colorOverride);
    updateColorToken( 'Canvas/canvas--active', '', functions.createColorState(semantic['Canvas/canvas'].color, semantic['Canvas/onCanvas'].color, 'active', 'subtle', 'auto'), semantic['Canvas/canvas--active']?.colorOverride);
    updateColorToken( 'Canvas/canvasBorder', '', functions.createBorder(semantic['Canvas/canvas'].color, 'auto', 'normal'), semantic['Canvas/canvasBorder']?.colorOverride);

    // * * * * * * * * * * * * * * * * * * * * *
    // SURFACE
    updateColorToken( 'Surface/surface', '', coreSurface, semantic['Surface/surface']?.colorOverride );
    updateColorToken( 'Surface/onSurface', '', functions.createOnColor(semantic['Surface/surface'].color), semantic['Surface/onSurface']?.colorOverride);
    updateColorToken( 'Surface/onSurface--hover', '', functions.createOnColorState(semantic['Surface/surface'].color, semantic['Surface/onSurface'].color, 'hover', 'auto', 'auto'), semantic['Surface/onSurface--hover']?.colorOverride);
    updateColorToken( 'Surface/onSurface--active', '', functions.createOnColorState(semantic['Surface/surface'].color, semantic['Surface/onSurface'].color, 'active', 'auto', 'auto'), semantic['Surface/onSurface--active']?.colorOverride);
    updateColorToken( 'Surface/onTheme_weaker', '', functions.createOnWeakerColor(semantic['Surface/surface'].color, semantic['Surface/onSurface'].color), semantic['Surface/onTheme_weaker']?.colorOverride);
    updateColorToken( 'Surface/onTheme_weaker--hover', '', functions.createOnColorState(semantic['Surface/surface'].color, semantic['Surface/onTheme_weaker'].color, 'hover', 'auto', 'auto'), semantic['Surface/onTheme_weaker--hover']?.colorOverride);
    updateColorToken( 'Surface/onTheme_weaker--active', '', functions.createOnColorState(semantic['Surface/surface'].color, semantic['Surface/onTheme_weaker'].color, 'active', 'auto', 'auto'), semantic['Surface/onTheme_weaker--active']?.colorOverride);
    updateColorToken( 'Surface/surface--hover', '', functions.createColorState(semantic['Surface/surface'].color, semantic['Surface/onSurface'].color, 'hover', 'subtle', 'auto'), semantic['Surface/surface--hover']?.colorOverride);
    updateColorToken( 'Surface/surface--active', '', functions.createColorState(semantic['Surface/surface'].color, semantic['Surface/onSurface'].color, 'active', 'subtle', 'auto'), semantic['Surface/surface--active']?.colorOverride);
    updateColorToken( 'Surface/surfaceBorder', '', functions.createBorder(semantic['Surface/surface'].color, 'auto', 'normal'), semantic['Surface/surfaceBorder']?.colorOverride);

    // * * * * * * * * * * * * * * * * * * * * *
    // HIGHLIGHT
    updateColorToken( 'Highlight/highlight', '', coreHighlight, semantic['Highlight/highlight']?.colorOverride );
    updateColorToken( 'Highlight/onHighlight', '', functions.createOnColor(semantic['Highlight/highlight'].color), semantic['Highlight/onHighlight']?.colorOverride);
    updateColorToken( 'Highlight/onHighlight--hover', '', functions.createOnColorState(semantic['Highlight/highlight'].color, semantic['Highlight/onHighlight'].color, 'hover', 'auto', 'auto'), semantic['Highlight/onHighlight--hover']?.colorOverride);
    updateColorToken( 'Highlight/onHighlight--active', '', functions.createOnColorState(semantic['Highlight/highlight'].color, semantic['Highlight/onHighlight'].color, 'active', 'auto', 'auto'), semantic['Highlight/onHighlight--active']?.colorOverride);
    updateColorToken( 'Highlight/onTheme_weaker', '', functions.createOnWeakerColor(semantic['Highlight/highlight'].color, semantic['Highlight/onHighlight'].color), semantic['Highlight/onTheme_weaker']?.colorOverride);
    updateColorToken( 'Highlight/onTheme_weaker--hover', '', functions.createOnColorState(semantic['Highlight/highlight'].color, semantic['Highlight/onTheme_weaker'].color, 'hover', 'auto', 'auto'), semantic['Highlight/onTheme_weaker--hover']?.colorOverride);
    updateColorToken( 'Highlight/onTheme_weaker--active', '', functions.createOnColorState(semantic['Highlight/highlight'].color, semantic['Highlight/onTheme_weaker'].color, 'active', 'auto', 'auto'), semantic['Highlight/onTheme_weaker--active']?.colorOverride);
    updateColorToken( 'Highlight/highlight--hover', '', functions.createColorState(semantic['Highlight/highlight'].color, semantic['Highlight/onHighlight'].color, 'hover', 'subtle', 'auto'), semantic['Highlight/highlight--hover']?.colorOverride);
    updateColorToken( 'Highlight/highlight--active', '', functions.createColorState(semantic['Highlight/highlight'].color, semantic['Highlight/onHighlight'].color, 'active', 'subtle', 'auto'), semantic['Highlight/highlight--active']?.colorOverride);
    updateColorToken( 'Highlight/highlightBorder', '', functions.createBorder(semantic['Highlight/highlight'].color, 'auto', 'normal'), semantic['Highlight/highlightBorder']?.colorOverride);

    // * * * * * * * * * * * * * * * * * * * * *
    // TRANSACTION
    updateColorToken( 'Transaction/transaction', '', coreTransaction, semantic['Transaction/transaction']?.colorOverride );
    updateColorToken( 'Transaction/onTransaction', '', functions.createOnColor(semantic['Transaction/transaction'].color), semantic['Transaction/onTransaction']?.colorOverride);
    updateColorToken( 'Transaction/onTransaction--hover', '', functions.createOnColorState(semantic['Transaction/transaction'].color, semantic['Transaction/onTransaction'].color, 'hover', 'auto', 'auto'), semantic['Transaction/onTransaction--hover']?.colorOverride);
    updateColorToken( 'Transaction/onTransaction--active', '', functions.createOnColorState(semantic['Transaction/transaction'].color, semantic['Transaction/onTransaction'].color, 'active', 'auto', 'auto'), semantic['Transaction/onTransaction--active']?.colorOverride);
    updateColorToken( 'Transaction/onTheme_weaker', '', functions.createOnWeakerColor(semantic['Transaction/transaction'].color, semantic['Transaction/onTransaction'].color), semantic['Transaction/onTheme_weaker']?.colorOverride);
    updateColorToken( 'Transaction/onTheme_weaker--hover', '', functions.createOnColorState(semantic['Transaction/transaction'].color, semantic['Transaction/onTheme_weaker'].color, 'hover', 'auto', 'auto'), semantic['Transaction/onTheme_weaker--hover']?.colorOverride);
    updateColorToken( 'Transaction/onTheme_weaker--active', '', functions.createOnColorState(semantic['Transaction/transaction'].color, semantic['Transaction/onTheme_weaker'].color, 'active', 'auto', 'auto'), semantic['Transaction/onTheme_weaker--active']?.colorOverride);
    updateColorToken( 'Transaction/transaction--hover', '', functions.createColorState(semantic['Transaction/transaction'].color, semantic['Transaction/onTransaction'].color, 'hover', 'subtle', 'auto'), semantic['Transaction/transaction--hover']?.colorOverride);
    updateColorToken( 'Transaction/transaction--active', '', functions.createColorState(semantic['Transaction/transaction'].color, semantic['Transaction/onTransaction'].color, 'active', 'subtle', 'auto'), semantic['Transaction/transaction--active']?.colorOverride);
    updateColorToken( 'Transaction/transactionBorder', '', functions.createBorder(semantic['Transaction/transaction'].color, 'auto', 'normal'), semantic['Transaction/transactionBorder']?.colorOverride);

    // * * * * * * * * * * * * * * * * * * * * *
    // SELECTED
    updateColorToken( 'Selected/selected', '', semantic['Highlight/highlight']?.color, semantic['Selected/selected']?.colorOverride );
    updateColorToken( 'Selected/onSelected', '', functions.createOnColor(semantic['Selected/selected'].color), semantic['Selected/onSelected']?.colorOverride);
    updateColorToken( 'Selected/onSelected--hover', '', functions.createOnColorState(semantic['Selected/selected'].color, semantic['Selected/onSelected'].color, 'hover', 'auto', 'auto'), semantic['Selected/onSelected--hover']?.colorOverride);
    updateColorToken( 'Selected/onSelected--active', '', functions.createOnColorState(semantic['Selected/selected'].color, semantic['Selected/onSelected'].color, 'active', 'auto', 'auto'), semantic['Selected/onSelected--active']?.colorOverride);
    updateColorToken( 'Selected/onTheme_weaker', '', functions.createOnWeakerColor(semantic['Selected/selected'].color, semantic['Selected/onSelected'].color), semantic['Selected/onTheme_weaker']?.colorOverride);
    updateColorToken( 'Selected/onTheme_weaker--hover', '', functions.createOnColorState(semantic['Selected/selected'].color, semantic['Selected/onTheme_weaker'].color, 'hover', 'auto', 'auto'), semantic['Selected/onTheme_weaker--hover']?.colorOverride);
    updateColorToken( 'Selected/onTheme_weaker--active', '', functions.createOnColorState(semantic['Selected/selected'].color, semantic['Selected/onTheme_weaker'].color, 'active', 'auto', 'auto'), semantic['Selected/onTheme_weaker--active']?.colorOverride);
    updateColorToken( 'Selected/selected--hover', '', functions.createColorState(semantic['Selected/selected'].color, semantic['Selected/onSelected'].color, 'hover', 'subtle', 'auto'), semantic['Selected/selected--hover']?.colorOverride);
    updateColorToken( 'Selected/selected--active', '', functions.createColorState(semantic['Selected/selected'].color, semantic['Selected/onSelected'].color, 'active', 'subtle', 'auto'), semantic['Selected/selected--active']?.colorOverride);
    updateColorToken( 'Selected/selectedBorder', '', functions.createBorder(semantic['Selected/selected'].color, 'auto', 'normal'), semantic['Selected/selectedBorder']?.colorOverride);

    // * * * * * * * * * * * * * * * * * * * * *
    // HEADER
    updateColorToken( 'Header/header', '', semantic['Theme/theme']?.color, semantic['Header/header']?.colorOverride );
    updateColorToken( 'Header/onHeader', '', functions.createOnColor(semantic['Header/header'].color), semantic['Header/onHeader']?.colorOverride);
    updateColorToken( 'Header/onHeader--hover', '', functions.createOnColorState(semantic['Header/header'].color, semantic['Header/onHeader'].color, 'hover', 'auto', 'auto'), semantic['Header/onHeader--hover']?.colorOverride);
    updateColorToken( 'Header/onHeader--active', '', functions.createOnColorState(semantic['Header/header'].color, semantic['Header/onHeader'].color, 'active', 'auto', 'auto'), semantic['Header/onHeader--active']?.colorOverride);
    updateColorToken( 'Header/onTheme_weaker', '', functions.createOnWeakerColor(semantic['Header/header'].color, semantic['Header/onHeader'].color), semantic['Header/onTheme_weaker']?.colorOverride);
    updateColorToken( 'Header/onTheme_weaker--hover', '', functions.createOnColorState(semantic['Header/header'].color, semantic['Header/onTheme_weaker'].color, 'hover', 'auto', 'auto'), semantic['Header/onTheme_weaker--hover']?.colorOverride);
    updateColorToken( 'Header/onTheme_weaker--active', '', functions.createOnColorState(semantic['Header/header'].color, semantic['Header/onTheme_weaker'].color, 'active', 'auto', 'auto'), semantic['Header/onTheme_weaker--active']?.colorOverride);
    updateColorToken( 'Header/header--hover', '', functions.createColorState(semantic['Header/header'].color, semantic['Header/onHeader'].color, 'hover', 'subtle', 'auto'), semantic['Header/header--hover']?.colorOverride);
    updateColorToken( 'Header/header--active', '', functions.createColorState(semantic['Header/header'].color, semantic['Header/onHeader'].color, 'active', 'subtle', 'auto'), semantic['Header/header--active']?.colorOverride);
    updateColorToken( 'Header/headerdBorder', '', functions.createBorder(semantic['Header/header'].color, 'auto', 'normal'), semantic['Header/headerdBorder']?.colorOverride);

    return {
        ...semantic,
    };
};
