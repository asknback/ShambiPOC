import Color from 'tinycolor2';
import * as functions from './helpers/functions';

// Set up core semantic colors as constants until we have a better way of initiating this 
// Maybe start off the client by looking at what colors we've set the color pickers to
// Or other way around?

const coreTheme = '#004370';
const coreCanvas = '#E6E6E6';
const coreSurface = '#FFFFFF';
const coreHighlight = '#FFA300';
const coreTransaction = '#008061';

const coreSuccess = '#009D4f';
const coreWarning = '#FFD23B';
const coreDanger = '#EF382B';
const coreInfo = '#666666';

const coreLive = '#ED1c34';
const coreOddsBoost = '#00C1DE';
const corePriceBoost = '#00C1DE';
const coreEachWay = '#C93D79';
const coreTeaserPlus = '#C93D79';
const coreSGP = '#FFA300';


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

// Should we add a aliasKey so that we can link custom styles to semantic vars
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
}

export const updateSemanticColors = ( activeColorProps ) => {

    // Before we update all semantic tokens we update the override (if there is one)

    if (activeColorProps.id && activeColorProps.id != '') {  // check that we have an ID and that it's not empty (you can always reset a color by setting the activeColorProps.color to '' )
        updateColorToken( activeColorProps.id, '', 'Not used for overrides', activeColorProps.color);
    }

    // * * * * * * * * * * * * * * * * * * * * *
    // * * * * * * * * * * * * * * * * * * * * *
    // SEMANTIC COLORS
    // Naming things to match the Figma slash naming convention 
    // makes it easier (for me) to match the ID to the token later
    
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
    // THEME LIGHT
    updateColorToken( 'ThemeLight/themeLight', '', functions.createLightColor(semantic['Theme/theme'].color), semantic['ThemeLight/themeLight']?.colorOverride );
    updateColorToken( 'ThemeLight/onThemeLight', '', functions.createOnColor(semantic['ThemeLight/themeLight'].color), semantic['ThemeLight/onThemeLight']?.colorOverride);
    updateColorToken( 'ThemeLight/onThemeLight--hover', '', functions.createOnColorState(semantic['ThemeLight/themeLight'].color, semantic['ThemeLight/onThemeLight'].color, 'hover', 'auto', 'auto'), semantic['ThemeLight/onThemeLight--hover']?.colorOverride);
    updateColorToken( 'ThemeLight/onThemeLight--active', '', functions.createOnColorState(semantic['ThemeLight/themeLight'].color, semantic['ThemeLight/onThemeLight'].color, 'active', 'auto', 'auto'), semantic['ThemeLight/onThemeLight--active']?.colorOverride);
    updateColorToken( 'ThemeLight/onThemeLight_weaker', '', functions.createOnWeakerColor(semantic['ThemeLight/themeLight'].color, semantic['ThemeLight/onThemeLight'].color), semantic['ThemeLight/onThemeLight_weaker']?.colorOverride);
    updateColorToken( 'ThemeLight/onThemeLight_weaker--hover', '', functions.createOnColorState(semantic['ThemeLight/themeLight'].color, semantic['ThemeLight/onThemeLight_weaker'].color, 'hover', 'auto', 'auto'), semantic['ThemeLight/onThemeLight_weaker--hover']?.colorOverride);
    updateColorToken( 'ThemeLight/onThemeLight_weaker--active', '', functions.createOnColorState(semantic['ThemeLight/themeLight'].color, semantic['ThemeLight/onThemeLight_weaker'].color, 'active', 'auto', 'auto'), semantic['ThemeLight/onThemeLight_weaker--active']?.colorOverride);
    updateColorToken( 'ThemeLight/themeLight--hover', '', functions.createColorState(semantic['ThemeLight/themeLight'].color, semantic['ThemeLight/onThemeLight'].color, 'hover', 'minimal', 'auto'), semantic['ThemeLight/themeLight--hover']?.colorOverride);
    updateColorToken( 'ThemeLight/themeLight--active', '', functions.createColorState(semantic['ThemeLight/themeLight'].color, semantic['ThemeLight/onThemeLight'].color, 'active', 'minimal', 'auto'), semantic['ThemeLight/themeLight--active']?.colorOverride);
    updateColorToken( 'ThemeLight/themeLightBorder', '', functions.createBorder(semantic['ThemeLight/themeLight'].color, 'auto', 'normal'), semantic['ThemeLight/themeLightBorder']?.colorOverride);

    // * * * * * * * * * * * * * * * * * * * * *
    // THEME DARK
    updateColorToken( 'ThemeDark/themeDark', '', functions.createDarkColor(semantic['Theme/theme'].color), semantic['ThemeDark/themeDark']?.colorOverride );
    updateColorToken( 'ThemeDark/onThemeDark', '', functions.createOnColor(semantic['ThemeDark/themeDark'].color), semantic['ThemeDark/onThemeDark']?.colorOverride);
    updateColorToken( 'ThemeDark/onThemeDark--hover', '', functions.createOnColorState(semantic['ThemeDark/themeDark'].color, semantic['ThemeDark/onThemeDark'].color, 'hover', 'auto', 'auto'), semantic['ThemeDark/onThemeDark--hover']?.colorOverride);
    updateColorToken( 'ThemeDark/onThemeDark--active', '', functions.createOnColorState(semantic['ThemeDark/themeDark'].color, semantic['ThemeDark/onThemeDark'].color, 'active', 'auto', 'auto'), semantic['ThemeDark/onThemeDark--active']?.colorOverride);
    updateColorToken( 'ThemeDark/onThemeDark_weaker', '', functions.createOnWeakerColor(semantic['ThemeDark/themeDark'].color, semantic['ThemeDark/onThemeDark'].color), semantic['ThemeDark/onThemeDark_weaker']?.colorOverride);
    updateColorToken( 'ThemeDark/onThemeDark_weaker--hover', '', functions.createOnColorState(semantic['ThemeDark/themeDark'].color, semantic['ThemeDark/onThemeDark_weaker'].color, 'hover', 'auto', 'auto'), semantic['ThemeDark/onThemeDark_weaker--hover']?.colorOverride);
    updateColorToken( 'ThemeDark/onThemeDark_weaker--active', '', functions.createOnColorState(semantic['ThemeDark/themeDark'].color, semantic['ThemeDark/onThemeDark_weaker'].color, 'active', 'auto', 'auto'), semantic['ThemeDark/onThemeDark_weaker--active']?.colorOverride);
    updateColorToken( 'ThemeDark/themeDark--hover', '', functions.createColorState(semantic['ThemeDark/themeDark'].color, semantic['ThemeDark/onThemeDark'].color, 'hover', 'subtle', 'auto'), semantic['ThemeDark/themeDark--hover']?.colorOverride);
    updateColorToken( 'ThemeDark/themeDark--active', '', functions.createColorState(semantic['ThemeDark/themeDark'].color, semantic['ThemeDark/onThemeDark'].color, 'active', 'subtle', 'auto'), semantic['ThemeDark/themeDark--active']?.colorOverride);
    updateColorToken( 'ThemeDark/themeDarkBorder', '', functions.createBorder(semantic['ThemeDark/themeDark'].color, 'auto', 'normal'), semantic['ThemeDark/themeDarkBorder']?.colorOverride);

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
    updateColorToken( 'Surface/surface--hover', '', functions.createColorState(semantic['Surface/surface'].color, semantic['Surface/onSurface'].color, 'hover', 'minimal', 'auto'), semantic['Surface/surface--hover']?.colorOverride);
    updateColorToken( 'Surface/surface--active', '', functions.createColorState(semantic['Surface/surface'].color, semantic['Surface/onSurface'].color, 'active', 'minimal', 'auto'), semantic['Surface/surface--active']?.colorOverride);
    updateColorToken( 'Surface/surfaceBorder', '', functions.createBorder(semantic['Surface/surface'].color, 'auto', 'normal'), semantic['Surface/surfaceBorder']?.colorOverride);

    // * * * * * * * * * * * * * * * * * * * * *
    // HIGHLIGHT
    updateColorToken( 'Highlight/highlight', '', coreHighlight, semantic['Highlight/highlight']?.colorOverride );
    updateColorToken( 'Highlight/onHighlight', '', functions.createOnColor(semantic['Highlight/highlight'].color), semantic['Highlight/onHighlight']?.colorOverride);
    updateColorToken( 'Highlight/onHighlight--hover', '', functions.createOnColorState(semantic['Highlight/highlight'].color, semantic['Highlight/onHighlight'].color, 'hover', 'auto', 'auto'), semantic['Highlight/onHighlight--hover']?.colorOverride);
    updateColorToken( 'Highlight/onHighlight--active', '', functions.createOnColorState(semantic['Highlight/highlight'].color, semantic['Highlight/onHighlight'].color, 'active', 'auto', 'auto'), semantic['Highlight/onHighlight--active']?.colorOverride);
    updateColorToken( 'Highlight/onHighlight_weaker', '', functions.createOnWeakerColor(semantic['Highlight/highlight'].color, semantic['Highlight/onHighlight'].color), semantic['Highlight/onHighlight_weaker']?.colorOverride);
    updateColorToken( 'Highlight/onHighlight_weaker--hover', '', functions.createOnColorState(semantic['Highlight/highlight'].color, semantic['Highlight/onHighlight_weaker'].color, 'hover', 'auto', 'auto'), semantic['Highlight/onHighlight_weaker--hover']?.colorOverride);
    updateColorToken( 'Highlight/onHighlight_weaker--active', '', functions.createOnColorState(semantic['Highlight/highlight'].color, semantic['Highlight/onHighlight_weaker'].color, 'active', 'auto', 'auto'), semantic['Highlight/onHighlight_weaker--active']?.colorOverride);
    updateColorToken( 'Highlight/highlight--hover', '', functions.createColorState(semantic['Highlight/highlight'].color, semantic['Highlight/onHighlight'].color, 'hover', 'subtle', 'auto'), semantic['Highlight/highlight--hover']?.colorOverride);
    updateColorToken( 'Highlight/highlight--active', '', functions.createColorState(semantic['Highlight/highlight'].color, semantic['Highlight/onHighlight'].color, 'active', 'subtle', 'auto'), semantic['Highlight/highlight--active']?.colorOverride);
    updateColorToken( 'Highlight/highlightBorder', '', functions.createBorder(semantic['Highlight/highlight'].color, 'auto', 'normal'), semantic['Highlight/highlightBorder']?.colorOverride);

    // * * * * * * * * * * * * * * * * * * * * *
    // TRANSACTION
    updateColorToken( 'Transaction/transaction', '', coreTransaction, semantic['Transaction/transaction']?.colorOverride );
    updateColorToken( 'Transaction/onTransaction', '', functions.createOnColor(semantic['Transaction/transaction'].color), semantic['Transaction/onTransaction']?.colorOverride);
    updateColorToken( 'Transaction/onTransaction--hover', '', functions.createOnColorState(semantic['Transaction/transaction'].color, semantic['Transaction/onTransaction'].color, 'hover', 'auto', 'auto'), semantic['Transaction/onTransaction--hover']?.colorOverride);
    updateColorToken( 'Transaction/onTransaction--active', '', functions.createOnColorState(semantic['Transaction/transaction'].color, semantic['Transaction/onTransaction'].color, 'active', 'auto', 'auto'), semantic['Transaction/onTransaction--active']?.colorOverride);
    updateColorToken( 'Transaction/onTransaction_weaker', '', functions.createOnWeakerColor(semantic['Transaction/transaction'].color, semantic['Transaction/onTransaction'].color), semantic['Transaction/onTransaction_weaker']?.colorOverride);
    updateColorToken( 'Transaction/onTransaction_weaker--hover', '', functions.createOnColorState(semantic['Transaction/transaction'].color, semantic['Transaction/onTransaction_weaker'].color, 'hover', 'auto', 'auto'), semantic['Transaction/onTransaction_weaker--hover']?.colorOverride);
    updateColorToken( 'Transaction/onTransaction_weaker--active', '', functions.createOnColorState(semantic['Transaction/transaction'].color, semantic['Transaction/onTransaction_weaker'].color, 'active', 'auto', 'auto'), semantic['Transaction/onTransaction_weaker--active']?.colorOverride);
    updateColorToken( 'Transaction/transaction--hover', '', functions.createColorState(semantic['Transaction/transaction'].color, semantic['Transaction/onTransaction'].color, 'hover', 'subtle', 'auto'), semantic['Transaction/transaction--hover']?.colorOverride);
    updateColorToken( 'Transaction/transaction--active', '', functions.createColorState(semantic['Transaction/transaction'].color, semantic['Transaction/onTransaction'].color, 'active', 'subtle', 'auto'), semantic['Transaction/transaction--active']?.colorOverride);
    updateColorToken( 'Transaction/transactionBorder', '', functions.createBorder(semantic['Transaction/transaction'].color, 'auto', 'normal'), semantic['Transaction/transactionBorder']?.colorOverride);

    // * * * * * * * * * * * * * * * * * * * * *
    // HEADER
    updateColorToken( 'Header/header', '', semantic['Theme/theme']?.color, semantic['Header/header']?.colorOverride );
    updateColorToken( 'Header/onHeader', '', functions.createOnColor(semantic['Header/header'].color), semantic['Header/onHeader']?.colorOverride);
    updateColorToken( 'Header/onHeader--hover', '', functions.createOnColorState(semantic['Header/header'].color, semantic['Header/onHeader'].color, 'hover', 'auto', 'auto'), semantic['Header/onHeader--hover']?.colorOverride);
    updateColorToken( 'Header/onHeader--active', '', functions.createOnColorState(semantic['Header/header'].color, semantic['Header/onHeader'].color, 'active', 'auto', 'auto'), semantic['Header/onHeader--active']?.colorOverride);
    updateColorToken( 'Header/onHeader_weaker', '', functions.createOnWeakerColor(semantic['Header/header'].color, semantic['Header/onHeader'].color), semantic['Header/onHeader_weaker']?.colorOverride);
    updateColorToken( 'Header/onHeader_weaker--hover', '', functions.createOnColorState(semantic['Header/header'].color, semantic['Header/onHeader_weaker'].color, 'hover', 'auto', 'auto'), semantic['Header/onHeader_weaker--hover']?.colorOverride);
    updateColorToken( 'Header/onHeader_weaker--active', '', functions.createOnColorState(semantic['Header/header'].color, semantic['Header/onHeader_weaker'].color, 'active', 'auto', 'auto'), semantic['Header/onHeader_weaker--active']?.colorOverride);
    updateColorToken( 'Header/header--hover', '', functions.createColorState(semantic['Header/header'].color, semantic['Header/onHeader'].color, 'hover', 'subtle', 'auto'), semantic['Header/header--hover']?.colorOverride);
    updateColorToken( 'Header/header--active', '', functions.createColorState(semantic['Header/header'].color, semantic['Header/onHeader'].color, 'active', 'subtle', 'auto'), semantic['Header/header--active']?.colorOverride);
    updateColorToken( 'Header/headerBorder', '', functions.createBorder(semantic['Header/header'].color, 'auto', 'normal'), semantic['Header/headerBorder']?.colorOverride);

    // * * * * * * * * * * * * * * * * * * * * *
    // BUTTON A
    updateColorToken( 'ButtonA/buttonA', '', semantic['Surface/surface']?.color, semantic['ButtonA/buttonA']?.colorOverride );
    updateColorToken( 'ButtonA/onButtonA', '', functions.createOnColor(semantic['ButtonA/buttonA'].color), semantic['ButtonA/onButtonA']?.colorOverride);
    updateColorToken( 'ButtonA/onButtonA--hover', '', functions.createOnColorState(semantic['ButtonA/buttonA'].color, semantic['ButtonA/onButtonA'].color, 'hover', 'auto', 'auto'), semantic['ButtonA/onButtonA--hover']?.colorOverride);
    updateColorToken( 'ButtonA/onButtonA--active', '', functions.createOnColorState(semantic['ButtonA/buttonA'].color, semantic['ButtonA/onButtonA'].color, 'active', 'auto', 'auto'), semantic['ButtonA/onButtonA--active']?.colorOverride);
    updateColorToken( 'ButtonA/onButtonA_weaker', '', functions.createOnWeakerColor(semantic['ButtonA/buttonA'].color, semantic['ButtonA/onButtonA'].color), semantic['ButtonA/onButtonA_weaker']?.colorOverride);
    updateColorToken( 'ButtonA/onButtonA_weaker--hover', '', functions.createOnColorState(semantic['ButtonA/buttonA'].color, semantic['ButtonA/onButtonA_weaker'].color, 'hover', 'auto', 'auto'), semantic['ButtonA/onButtonA_weaker--hover']?.colorOverride);
    updateColorToken( 'ButtonA/onButtonA_weaker--active', '', functions.createOnColorState(semantic['ButtonA/buttonA'].color, semantic['ButtonA/onButtonA_weaker'].color, 'active', 'auto', 'auto'), semantic['ButtonA/onButtonA_weaker--active']?.colorOverride);
    updateColorToken( 'ButtonA/buttonA--hover', '', functions.createColorState(semantic['ButtonA/buttonA'].color, semantic['ButtonA/onButtonA'].color, 'hover', 'auto', 'auto'), semantic['ButtonA/buttonA--hover']?.colorOverride);
    updateColorToken( 'ButtonA/buttonA--active', '', functions.createColorState(semantic['ButtonA/buttonA'].color, semantic['ButtonA/onButtonA'].color, 'active', 'auto', 'auto'), semantic['ButtonA/buttonA--active']?.colorOverride);
    updateColorToken( 'ButtonA/buttonABorder', '', functions.createBorder(semantic['ButtonA/buttonA'].color, 'auto', 'normal'), semantic['ButtonA/buttonABorder']?.colorOverride);

    // * * * * * * * * * * * * * * * * * * * * *
    // BUTTON B
    updateColorToken( 'ButtonB/buttonB', '', semantic['Theme/theme']?.color, semantic['ButtonB/buttonB']?.colorOverride );
    updateColorToken( 'ButtonB/onButtonB', '', functions.createOnColor(semantic['ButtonB/buttonB'].color), semantic['ButtonB/onButtonB']?.colorOverride);
    updateColorToken( 'ButtonB/onButtonB--hover', '', functions.createOnColorState(semantic['ButtonB/buttonB'].color, semantic['ButtonB/onButtonB'].color, 'hover', 'auto', 'auto'), semantic['ButtonB/onButtonB--hover']?.colorOverride);
    updateColorToken( 'ButtonB/onButtonB--active', '', functions.createOnColorState(semantic['ButtonB/buttonB'].color, semantic['ButtonB/onButtonB'].color, 'active', 'auto', 'auto'), semantic['ButtonB/onButtonB--active']?.colorOverride);
    updateColorToken( 'ButtonB/onButtonB_weaker', '', functions.createOnWeakerColor(semantic['ButtonB/buttonB'].color, semantic['ButtonB/onButtonB'].color), semantic['ButtonB/onButtonB_weaker']?.colorOverride);
    updateColorToken( 'ButtonB/onButtonB_weaker--hover', '', functions.createOnColorState(semantic['ButtonB/buttonB'].color, semantic['ButtonB/onButtonB_weaker'].color, 'hover', 'auto', 'auto'), semantic['ButtonB/onButtonB_weaker--hover']?.colorOverride);
    updateColorToken( 'ButtonB/onButtonB_weaker--active', '', functions.createOnColorState(semantic['ButtonB/buttonB'].color, semantic['ButtonB/onButtonB_weaker'].color, 'active', 'auto', 'auto'), semantic['ButtonB/onButtonB_weaker--active']?.colorOverride);
    updateColorToken( 'ButtonB/buttonB--hover', '', functions.createColorState(semantic['ButtonB/buttonB'].color, semantic['ButtonB/onButtonB'].color, 'hover', 'auto', 'auto'), semantic['ButtonB/buttonB--hover']?.colorOverride);
    updateColorToken( 'ButtonB/buttonB--active', '', functions.createColorState(semantic['ButtonB/buttonB'].color, semantic['ButtonB/onButtonB'].color, 'active', 'auto', 'auto'), semantic['ButtonB/buttonB--active']?.colorOverride);
    updateColorToken( 'ButtonB/buttonBBorder', '', functions.createBorder(semantic['ButtonB/buttonB'].color, 'auto', 'normal'), semantic['ButtonB/buttonBBorder']?.colorOverride);

    // * * * * * * * * * * * * * * * * * * * * *
    // BUTTON GHOST A
    updateColorToken( 'ButtonGhostA/buttonGhostA', '', functions.createGhostColor(semantic['Surface/surface'].color, 'auto'), semantic['ButtonGhostA/buttonGhostA']?.colorOverride );
    updateColorToken( 'ButtonGhostA/onButtonGhostA', '', functions.createOnColor(semantic['Surface/surface'].color), semantic['ButtonGhostA/onButtonGhostA']?.colorOverride);
    updateColorToken( 'ButtonGhostA/onButtonGhostA--hover', '', functions.createOnColorState(semantic['ButtonGhostA/buttonGhostA'].color, semantic['ButtonGhostA/onButtonGhostA'].color, 'hover', 'auto', 'auto'), semantic['ButtonGhostA/onButtonGhostA--hover']?.colorOverride);
    updateColorToken( 'ButtonGhostA/onButtonGhostA--active', '', functions.createOnColorState(semantic['ButtonGhostA/buttonGhostA'].color, semantic['ButtonGhostA/onButtonGhostA'].color, 'active', 'auto', 'auto'), semantic['ButtonGhostA/onButtonGhostA--active']?.colorOverride);
    updateColorToken( 'ButtonGhostA/onButtonGhostA_weaker', '', functions.createOnWeakerColor(semantic['ButtonGhostA/buttonGhostA'].color, semantic['ButtonGhostA/onButtonGhostA'].color), semantic['ButtonGhostA/onButtonGhostA_weaker']?.colorOverride);
    updateColorToken( 'ButtonGhostA/onButtonGhostA_weaker--hover', '', functions.createOnColorState(semantic['ButtonGhostA/buttonGhostA'].color, semantic['ButtonGhostA/onButtonGhostA_weaker'].color, 'hover', 'auto', 'auto'), semantic['ButtonGhostA/onButtonGhostA_weaker--hover']?.colorOverride);
    updateColorToken( 'ButtonGhostA/onButtonGhostA_weaker--active', '', functions.createOnColorState(semantic['ButtonGhostA/buttonGhostA'].color, semantic['ButtonGhostA/onButtonGhostA_weaker'].color, 'active', 'auto', 'auto'), semantic['ButtonGhostA/onButtonGhostA_weaker--active']?.colorOverride);
    updateColorToken( 'ButtonGhostA/buttonGhostA--hover', '', functions.createColorState(semantic['ButtonGhostA/buttonGhostA'].color, semantic['ButtonGhostA/onButtonGhostA'].color, 'hover', 'auto', 'auto'), semantic['ButtonGhostA/buttonGhostA--hover']?.colorOverride);
    updateColorToken( 'ButtonGhostA/buttonGhostA--active', '', functions.createColorState(semantic['ButtonGhostA/buttonGhostA'].color, semantic['ButtonGhostA/onButtonGhostA'].color, 'active', 'auto', 'auto'), semantic['ButtonGhostA/buttonGhostA--active']?.colorOverride);
    updateColorToken( 'ButtonGhostA/buttonGhostABorder', '', functions.createBorder(semantic['ButtonGhostA/buttonGhostA'].color, 'auto', 'normal'), semantic['ButtonGhostA/buttonGhostABorder']?.colorOverride);

    // * * * * * * * * * * * * * * * * * * * * *
    // BUTTON GHOST B
    updateColorToken( 'ButtonGhostB/buttonGhostB', '', functions.createGhostColor(semantic['Theme/theme'].color, 'auto'), semantic['ButtonGhostB/buttonGhostB']?.colorOverride );
    updateColorToken( 'ButtonGhostB/onButtonGhostB', '', functions.createOnColor(semantic['ButtonGhostB/buttonGhostB'].color), semantic['ButtonGhostB/onButtonGhostB']?.colorOverride);
    updateColorToken( 'ButtonGhostB/onButtonGhostB--hover', '', functions.createOnColorState(semantic['ButtonGhostB/buttonGhostB'].color, semantic['ButtonGhostB/onButtonGhostB'].color, 'hover', 'auto', 'auto'), semantic['ButtonGhostB/onButtonGhostB--hover']?.colorOverride);
    updateColorToken( 'ButtonGhostB/onButtonGhostB--active', '', functions.createOnColorState(semantic['ButtonGhostB/buttonGhostB'].color, semantic['ButtonGhostB/onButtonGhostB'].color, 'active', 'auto', 'auto'), semantic['ButtonGhostB/onButtonGhostB--active']?.colorOverride);
    updateColorToken( 'ButtonGhostB/onButtonGhostB_weaker', '', functions.createOnWeakerColor(semantic['ButtonGhostB/buttonGhostB'].color, semantic['ButtonGhostB/onButtonGhostB'].color), semantic['ButtonGhostB/onButtonGhostB_weaker']?.colorOverride);
    updateColorToken( 'ButtonGhostB/onButtonGhostB_weaker--hover', '', functions.createOnColorState(semantic['ButtonGhostB/buttonGhostB'].color, semantic['ButtonGhostB/onButtonGhostB_weaker'].color, 'hover', 'auto', 'auto'), semantic['ButtonGhostB/onButtonGhostB_weaker--hover']?.colorOverride);
    updateColorToken( 'ButtonGhostB/onButtonGhostB_weaker--active', '', functions.createOnColorState(semantic['ButtonGhostB/buttonGhostB'].color, semantic['ButtonGhostB/onButtonGhostB_weaker'].color, 'active', 'auto', 'auto'), semantic['ButtonGhostB/onButtonGhostB_weaker--active']?.colorOverride);
    updateColorToken( 'ButtonGhostB/buttonGhostB--hover', '', functions.createColorState(semantic['ButtonGhostB/buttonGhostB'].color, semantic['ButtonGhostB/onButtonGhostB'].color, 'hover', 'auto', 'auto'), semantic['ButtonGhostB/buttonGhostB--hover']?.colorOverride);
    updateColorToken( 'ButtonGhostB/buttonGhostB--active', '', functions.createColorState(semantic['ButtonGhostB/buttonGhostB'].color, semantic['ButtonGhostB/onButtonGhostB'].color, 'active', 'auto', 'auto'), semantic['ButtonGhostB/buttonGhostB--active']?.colorOverride);
    updateColorToken( 'ButtonGhostB/buttonGhostBBorder', '', functions.createBorder(semantic['ButtonGhostB/buttonGhostB'].color, 'auto', 'normal'), semantic['ButtonGhostB/buttonGhostBBorder']?.colorOverride);

    // * * * * * * * * * * * * * * * * * * * * *
    // OUTCOME
    updateColorToken( 'Outcome/outcome', '', semantic['ThemeLight/themeLight'].color, semantic['Outcome/outcome']?.colorOverride );
    updateColorToken( 'Outcome/onOutcome', '', functions.createOnColor(semantic['Outcome/outcome'].color), semantic['Outcome/onOutcome']?.colorOverride);
    updateColorToken( 'Outcome/onOutcome--hover', '', functions.createOnColorState(semantic['Outcome/outcome'].color, semantic['Outcome/onOutcome'].color, 'hover', 'auto', 'auto'), semantic['Outcome/onOutcome--hover']?.colorOverride);
    updateColorToken( 'Outcome/onOutcome--active', '', functions.createOnColorState(semantic['Outcome/outcome'].color, semantic['Outcome/onOutcome'].color, 'active', 'auto', 'auto'), semantic['Outcome/onOutcome--active']?.colorOverride);
    updateColorToken( 'Outcome/onOutcome_weaker', '', functions.createOnWeakerColor(semantic['Outcome/outcome'].color, semantic['Outcome/onOutcome'].color), semantic['Outcome/onOutcome_weaker']?.colorOverride);
    updateColorToken( 'Outcome/onOutcome_weaker--hover', '', functions.createOnColorState(semantic['Outcome/outcome'].color, semantic['Outcome/onOutcome_weaker'].color, 'hover', 'auto', 'auto'), semantic['Outcome/onOutcome_weaker--hover']?.colorOverride);
    updateColorToken( 'Outcome/onOutcome_weaker--active', '', functions.createOnColorState(semantic['Outcome/outcome'].color, semantic['Outcome/onOutcome_weaker'].color, 'active', 'auto', 'auto'), semantic['Outcome/onOutcome_weaker--active']?.colorOverride);
    updateColorToken( 'Outcome/outcome--hover', '', functions.createColorState(semantic['Outcome/outcome'].color, semantic['Outcome/onOutcome'].color, 'hover', 'minimal', 'auto'), semantic['Outcome/outcome--hover']?.colorOverride);
    updateColorToken( 'Outcome/outcome--active', '', functions.createColorState(semantic['Outcome/outcome'].color, semantic['Outcome/onOutcome'].color, 'active', 'minimal', 'auto'), semantic['Outcome/outcome--active']?.colorOverride);
    updateColorToken( 'Outcome/outcomeBorder', '', functions.createBorder(semantic['Outcome/outcome'].color, 'auto', 'normal'), semantic['Outcome/outcomeBorder']?.colorOverride);

    // * * * * * * * * * * * * * * * * * * * * *
    // SELECTED
    updateColorToken( 'Selected/selected', '', semantic['Highlight/highlight']?.color, semantic['Selected/selected']?.colorOverride );
    updateColorToken( 'Selected/onSelected', '', functions.createOnColor(semantic['Selected/selected'].color), semantic['Selected/onSelected']?.colorOverride);
    updateColorToken( 'Selected/onSelected--hover', '', functions.createOnColorState(semantic['Selected/selected'].color, semantic['Selected/onSelected'].color, 'hover', 'auto', 'auto'), semantic['Selected/onSelected--hover']?.colorOverride);
    updateColorToken( 'Selected/onSelected--active', '', functions.createOnColorState(semantic['Selected/selected'].color, semantic['Selected/onSelected'].color, 'active', 'auto', 'auto'), semantic['Selected/onSelected--active']?.colorOverride);
    updateColorToken( 'Selected/onSelected_weaker', '', functions.createOnWeakerColor(semantic['Selected/selected'].color, semantic['Selected/onSelected'].color), semantic['Selected/onSelected_weaker']?.colorOverride);
    updateColorToken( 'Selected/onSelected_weaker--hover', '', functions.createOnColorState(semantic['Selected/selected'].color, semantic['Selected/onSelected_weaker'].color, 'hover', 'auto', 'auto'), semantic['Selected/onSelected_weaker--hover']?.colorOverride);
    updateColorToken( 'Selected/onSelected_weaker--active', '', functions.createOnColorState(semantic['Selected/selected'].color, semantic['Selected/onSelected_weaker'].color, 'active', 'auto', 'auto'), semantic['Selected/onSelected_weaker--active']?.colorOverride);
    updateColorToken( 'Selected/selected--hover', '', functions.createColorState(semantic['Selected/selected'].color, semantic['Selected/onSelected'].color, 'hover', 'subtle', 'auto'), semantic['Selected/selected--hover']?.colorOverride);
    updateColorToken( 'Selected/selected--active', '', functions.createColorState(semantic['Selected/selected'].color, semantic['Selected/onSelected'].color, 'active', 'subtle', 'auto'), semantic['Selected/selected--active']?.colorOverride);
    updateColorToken( 'Selected/selectedBorder', '', functions.createBorder(semantic['Selected/selected'].color, 'auto', 'normal'), semantic['Selected/selectedBorder']?.colorOverride);

    // * * * * * * * * * * * * * * * * * * * * *
    // CASHOUT
    updateColorToken( 'CashOut/cashOut', '', semantic['Transaction/transaction'].color, semantic['CashOut/cashOut']?.colorOverride );
    updateColorToken( 'CashOut/onCashOut', '', functions.createOnColor(semantic['CashOut/cashOut'].color), semantic['CashOut/onCashOut']?.colorOverride);
    updateColorToken( 'CashOut/onCashOut--hover', '', functions.createOnColorState(semantic['CashOut/cashOut'].color, semantic['CashOut/onCashOut'].color, 'hover', 'auto', 'auto'), semantic['CashOut/onCashOut--hover']?.colorOverride);
    updateColorToken( 'CashOut/onCashOut--active', '', functions.createOnColorState(semantic['CashOut/cashOut'].color, semantic['CashOut/onCashOut'].color, 'active', 'auto', 'auto'), semantic['CashOut/onCashOut--active']?.colorOverride);
    updateColorToken( 'CashOut/onCashOut_weaker', '', functions.createOnWeakerColor(semantic['CashOut/cashOut'].color, semantic['CashOut/onCashOut'].color), semantic['CashOut/onCashOut_weaker']?.colorOverride);
    updateColorToken( 'CashOut/onCashOut_weaker--hover', '', functions.createOnColorState(semantic['CashOut/cashOut'].color, semantic['CashOut/onCashOut_weaker'].color, 'hover', 'auto', 'auto'), semantic['CashOut/onCashOut_weaker--hover']?.colorOverride);
    updateColorToken( 'CashOut/onCashOut_weaker--active', '', functions.createOnColorState(semantic['CashOut/cashOut'].color, semantic['CashOut/onCashOut_weaker'].color, 'active', 'auto', 'auto'), semantic['CashOut/onCashOut_weaker--active']?.colorOverride);
    updateColorToken( 'CashOut/cashOut--hover', '', functions.createColorState(semantic['CashOut/cashOut'].color, semantic['CashOut/onCashOut'].color, 'hover', 'subtle', 'auto'), semantic['CashOut/cashOut--hover']?.colorOverride);
    updateColorToken( 'CashOut/cashOut--active', '', functions.createColorState(semantic['CashOut/cashOut'].color, semantic['CashOut/onCashOut'].color, 'active', 'subtle', 'auto'), semantic['CashOut/cashOut--active']?.colorOverride);
    updateColorToken( 'CashOut/cashOutBorder', '', functions.createBorder(semantic['CashOut/cashOut'].color, 'auto', 'normal'), semantic['CashOut/cashOutBorder']?.colorOverride);

    // * * * * * * * * * * * * * * * * * * * * *
    // INPUT
    updateColorToken( 'Input/input', '', semantic['Theme/theme'].color, semantic['Input/input']?.colorOverride );
    updateColorToken( 'Input/onInput', '', functions.createOnColor(semantic['Input/input'].color), semantic['Input/onInput']?.colorOverride);
    updateColorToken( 'Input/onInput--hover', '', functions.createOnColorState(semantic['Input/input'].color, semantic['Input/onInput'].color, 'hover', 'auto', 'auto'), semantic['Input/onInput--hover']?.colorOverride);
    updateColorToken( 'Input/onInput--active', '', functions.createOnColorState(semantic['Input/input'].color, semantic['Input/onInput'].color, 'active', 'auto', 'auto'), semantic['Input/onInput--active']?.colorOverride);
    updateColorToken( 'Input/onInput_weaker', '', functions.createOnWeakerColor(semantic['Input/input'].color, semantic['Input/onInput'].color), semantic['Input/onInput_weaker']?.colorOverride);
    updateColorToken( 'Input/onInput_weaker--hover', '', functions.createOnColorState(semantic['Input/input'].color, semantic['Input/onInput_weaker'].color, 'hover', 'auto', 'auto'), semantic['Input/onInput_weaker--hover']?.colorOverride);
    updateColorToken( 'Input/onInput_weaker--active', '', functions.createOnColorState(semantic['Input/input'].color, semantic['Input/onInput_weaker'].color, 'active', 'auto', 'auto'), semantic['Input/onInput_weaker--active']?.colorOverride);
    updateColorToken( 'Input/input--hover', '', functions.createColorState(semantic['Input/input'].color, semantic['Input/onInput'].color, 'hover', 'auto', 'auto'), semantic['Input/input--hover']?.colorOverride);
    updateColorToken( 'Input/input--active', '', functions.createColorState(semantic['Input/input'].color, semantic['Input/onInput'].color, 'active', 'auto', 'auto'), semantic['Input/input--active']?.colorOverride);
    updateColorToken( 'Input/inputBorder', '', functions.createBorder(semantic['Input/input'].color, 'auto', 'normal'), semantic['Input/inputBorder']?.colorOverride);

    // * * * * * * * * * * * * * * * * * * * * *
    // SELECTED
    updateColorToken( 'Selected/selected', '', semantic['Highlight/highlight'].color, semantic['Selected/selected']?.colorOverride );
    updateColorToken( 'Selected/onSelected', '', functions.createOnColor(semantic['Selected/selected'].color), semantic['Selected/onSelected']?.colorOverride);
    updateColorToken( 'Selected/onSelected--hover', '', functions.createOnColorState(semantic['Selected/selected'].color, semantic['Selected/onSelected'].color, 'hover', 'auto', 'auto'), semantic['Selected/onSelected--hover']?.colorOverride);
    updateColorToken( 'Selected/onSelected--active', '', functions.createOnColorState(semantic['Selected/selected'].color, semantic['Selected/onSelected'].color, 'active', 'auto', 'auto'), semantic['Selected/onSelected--active']?.colorOverride);
    updateColorToken( 'Selected/onSelected_weaker', '', functions.createOnWeakerColor(semantic['Selected/selected'].color, semantic['Selected/onSelected'].color), semantic['Selected/onSelected_weaker']?.colorOverride);
    updateColorToken( 'Selected/onSelected_weaker--hover', '', functions.createOnColorState(semantic['Selected/selected'].color, semantic['Selected/onSelected_weaker'].color, 'hover', 'auto', 'auto'), semantic['Selected/onSelected_weaker--hover']?.colorOverride);
    updateColorToken( 'Selected/onSelected_weaker--active', '', functions.createOnColorState(semantic['Selected/selected'].color, semantic['Selected/onSelected_weaker'].color, 'active', 'auto', 'auto'), semantic['Selected/onSelected_weaker--active']?.colorOverride);
    updateColorToken( 'Selected/selected--hover', '', functions.createColorState(semantic['Selected/selected'].color, semantic['Selected/onSelected'].color, 'hover', 'auto', 'auto'), semantic['Selected/selected--hover']?.colorOverride);
    updateColorToken( 'Selected/selected--active', '', functions.createColorState(semantic['Selected/selected'].color, semantic['Selected/onSelected'].color, 'active', 'auto', 'auto'), semantic['Selected/selected--active']?.colorOverride);
    updateColorToken( 'Selected/selectedBorder', '', functions.createBorder(semantic['Selected/selected'].color, 'auto', 'normal'), semantic['Selected/selectedBorder']?.colorOverride);

    // * * * * * * * * * * * * * * * * * * * * *
    // SUCCESS
    updateColorToken( 'Success/success', '', coreSuccess, semantic['Success/success']?.colorOverride );
    updateColorToken( 'Success/onSuccess', '', functions.createOnColor(semantic['Success/success'].color), semantic['Success/onSuccess']?.colorOverride);
    updateColorToken( 'Success/onSuccess--hover', '', functions.createOnColorState(semantic['Success/success'].color, semantic['Success/onSuccess'].color, 'hover', 'auto', 'auto'), semantic['Success/onSuccess--hover']?.colorOverride);
    updateColorToken( 'Success/onSuccess--active', '', functions.createOnColorState(semantic['Success/success'].color, semantic['Success/onSuccess'].color, 'active', 'auto', 'auto'), semantic['Success/onSuccess--active']?.colorOverride);
    updateColorToken( 'Success/onSuccess_weaker', '', functions.createOnWeakerColor(semantic['Success/success'].color, semantic['Success/onSuccess'].color), semantic['Success/onSuccess_weaker']?.colorOverride);
    updateColorToken( 'Success/onSuccess_weaker--hover', '', functions.createOnColorState(semantic['Success/success'].color, semantic['Success/onSuccess_weaker'].color, 'hover', 'auto', 'auto'), semantic['Success/onSuccess_weaker--hover']?.colorOverride);
    updateColorToken( 'Success/onSuccess_weaker--active', '', functions.createOnColorState(semantic['Success/success'].color, semantic['Success/onSuccess_weaker'].color, 'active', 'auto', 'auto'), semantic['Success/onSuccess_weaker--active']?.colorOverride);
    updateColorToken( 'Success/success--hover', '', functions.createColorState(semantic['Success/success'].color, semantic['Success/onSuccess'].color, 'hover', 'subtle', 'auto'), semantic['Success/success--hover']?.colorOverride);
    updateColorToken( 'Success/success--active', '', functions.createColorState(semantic['Success/success'].color, semantic['Success/onSuccess'].color, 'active', 'subtle', 'auto'), semantic['Success/success--active']?.colorOverride);
    updateColorToken( 'Success/successBorder', '', functions.createBorder(semantic['Success/success'].color, 'auto', 'normal'), semantic['Success/successBorder']?.colorOverride);

    // * * * * * * * * * * * * * * * * * * * * *
    // WARNING
    updateColorToken( 'Warning/warning', '', coreWarning, semantic['Warning/warning']?.colorOverride );
    updateColorToken( 'Warning/onWarning', '', functions.createOnColor(semantic['Warning/warning'].color), semantic['Warning/onWarning']?.colorOverride);
    updateColorToken( 'Warning/onWarning--hover', '', functions.createOnColorState(semantic['Warning/warning'].color, semantic['Warning/onWarning'].color, 'hover', 'auto', 'auto'), semantic['Warning/onWarning--hover']?.colorOverride);
    updateColorToken( 'Warning/onWarning--active', '', functions.createOnColorState(semantic['Warning/warning'].color, semantic['Warning/onWarning'].color, 'active', 'auto', 'auto'), semantic['Warning/onWarning--active']?.colorOverride);
    updateColorToken( 'Warning/onWarning_weaker', '', functions.createOnWeakerColor(semantic['Warning/warning'].color, semantic['Warning/onWarning'].color), semantic['Warning/onWarning_weaker']?.colorOverride);
    updateColorToken( 'Warning/onWarning_weaker--hover', '', functions.createOnColorState(semantic['Warning/warning'].color, semantic['Warning/onWarning_weaker'].color, 'hover', 'auto', 'auto'), semantic['Warning/onWarning_weaker--hover']?.colorOverride);
    updateColorToken( 'Warning/onWarning_weaker--active', '', functions.createOnColorState(semantic['Warning/warning'].color, semantic['Warning/onWarning_weaker'].color, 'active', 'auto', 'auto'), semantic['Warning/onWarning_weaker--active']?.colorOverride);
    updateColorToken( 'Warning/warning--hover', '', functions.createColorState(semantic['Warning/warning'].color, semantic['Warning/onWarning'].color, 'hover', 'subtle', 'auto'), semantic['Warning/warning--hover']?.colorOverride);
    updateColorToken( 'Warning/warning--active', '', functions.createColorState(semantic['Warning/warning'].color, semantic['Warning/onWarning'].color, 'active', 'subtle', 'auto'), semantic['Warning/warning--active']?.colorOverride);
    updateColorToken( 'Warning/warningBorder', '', functions.createBorder(semantic['Warning/warning'].color, 'auto', 'normal'), semantic['Warning/warningBorder']?.colorOverride);

    // * * * * * * * * * * * * * * * * * * * * *
    // DANGER
    updateColorToken( 'Danger/danger', '', coreDanger, semantic['Danger/danger']?.colorOverride );
    updateColorToken( 'Danger/onDanger', '', functions.createOnColor(semantic['Danger/danger'].color), semantic['Danger/onDanger']?.colorOverride);
    updateColorToken( 'Danger/onDanger--hover', '', functions.createOnColorState(semantic['Danger/danger'].color, semantic['Danger/onDanger'].color, 'hover', 'auto', 'auto'), semantic['Danger/onDanger--hover']?.colorOverride);
    updateColorToken( 'Danger/onDanger--active', '', functions.createOnColorState(semantic['Danger/danger'].color, semantic['Danger/onDanger'].color, 'active', 'auto', 'auto'), semantic['Danger/onDanger--active']?.colorOverride);
    updateColorToken( 'Danger/onDanger_weaker', '', functions.createOnWeakerColor(semantic['Danger/danger'].color, semantic['Danger/onDanger'].color), semantic['Danger/onDanger_weaker']?.colorOverride);
    updateColorToken( 'Danger/onDanger_weaker--hover', '', functions.createOnColorState(semantic['Danger/danger'].color, semantic['Danger/onDanger_weaker'].color, 'hover', 'auto', 'auto'), semantic['Danger/onDanger_weaker--hover']?.colorOverride);
    updateColorToken( 'Danger/onDanger_weaker--active', '', functions.createOnColorState(semantic['Danger/danger'].color, semantic['Danger/onDanger_weaker'].color, 'active', 'auto', 'auto'), semantic['Danger/onDanger_weaker--active']?.colorOverride);
    updateColorToken( 'Danger/danger--hover', '', functions.createColorState(semantic['Danger/danger'].color, semantic['Danger/onDanger'].color, 'hover', 'subtle', 'auto'), semantic['Danger/danger--hover']?.colorOverride);
    updateColorToken( 'Danger/danger--active', '', functions.createColorState(semantic['Danger/danger'].color, semantic['Danger/onDanger'].color, 'active', 'subtle', 'auto'), semantic['Danger/danger--active']?.colorOverride);
    updateColorToken( 'Danger/dangerBorder', '', functions.createBorder(semantic['Danger/danger'].color, 'auto', 'normal'), semantic['Danger/dangerBorder']?.colorOverride);

    // * * * * * * * * * * * * * * * * * * * * *
    // INFO
    updateColorToken( 'Info/info', '', coreInfo, semantic['Info/info']?.colorOverride );
    updateColorToken( 'Info/onInfo', '', functions.createOnColor(semantic['Info/info'].color), semantic['Info/onInfo']?.colorOverride);
    updateColorToken( 'Info/onInfo--hover', '', functions.createOnColorState(semantic['Info/info'].color, semantic['Info/onInfo'].color, 'hover', 'auto', 'auto'), semantic['Info/onInfo--hover']?.colorOverride);
    updateColorToken( 'Info/onInfo--active', '', functions.createOnColorState(semantic['Info/info'].color, semantic['Info/onInfo'].color, 'active', 'auto', 'auto'), semantic['Info/onInfo--active']?.colorOverride);
    updateColorToken( 'Info/onInfo_weaker', '', functions.createOnWeakerColor(semantic['Info/info'].color, semantic['Info/onInfo'].color), semantic['Info/onInfo_weaker']?.colorOverride);
    updateColorToken( 'Info/onInfo_weaker--hover', '', functions.createOnColorState(semantic['Info/info'].color, semantic['Info/onInfo_weaker'].color, 'hover', 'auto', 'auto'), semantic['Info/onInfo_weaker--hover']?.colorOverride);
    updateColorToken( 'Info/onInfo_weaker--active', '', functions.createOnColorState(semantic['Info/info'].color, semantic['Info/onInfo_weaker'].color, 'active', 'auto', 'auto'), semantic['Info/onInfo_weaker--active']?.colorOverride);
    updateColorToken( 'Info/info--hover', '', functions.createColorState(semantic['Info/info'].color, semantic['Info/onInfo'].color, 'hover', 'subtle', 'auto'), semantic['Info/info--hover']?.colorOverride);
    updateColorToken( 'Info/info--active', '', functions.createColorState(semantic['Info/info'].color, semantic['Info/onInfo'].color, 'active', 'subtle', 'auto'), semantic['Info/info--active']?.colorOverride);
    updateColorToken( 'Info/infoBorder', '', functions.createBorder(semantic['Info/info'].color, 'auto', 'normal'), semantic['Info/infoBorder']?.colorOverride);

    // * * * * * * * * * * * * * * * * * * * * *
    // BET WON
    updateColorToken( 'BetWon/betWon', '', semantic['Success/success'].color, semantic['BetWon/betWon']?.colorOverride );
    updateColorToken( 'BetWon/onBetWon', '', functions.createOnColor(semantic['BetWon/betWon'].color), semantic['BetWon/onBetWon']?.colorOverride);
    updateColorToken( 'BetWon/onBetWon--hover', '', functions.createOnColorState(semantic['BetWon/betWon'].color, semantic['BetWon/onBetWon'].color, 'hover', 'auto', 'auto'), semantic['BetWon/onBetWon--hover']?.colorOverride);
    updateColorToken( 'BetWon/onBetWon--active', '', functions.createOnColorState(semantic['BetWon/betWon'].color, semantic['BetWon/onBetWon'].color, 'active', 'auto', 'auto'), semantic['BetWon/onBetWon--active']?.colorOverride);
    updateColorToken( 'BetWon/onBetWon_weaker', '', functions.createOnWeakerColor(semantic['BetWon/betWon'].color, semantic['BetWon/onBetWon'].color), semantic['BetWon/onBetWon_weaker']?.colorOverride);
    updateColorToken( 'BetWon/onBetWon_weaker--hover', '', functions.createOnColorState(semantic['BetWon/betWon'].color, semantic['BetWon/onBetWon_weaker'].color, 'hover', 'auto', 'auto'), semantic['BetWon/onBetWon_weaker--hover']?.colorOverride);
    updateColorToken( 'BetWon/onBetWon_weaker--active', '', functions.createOnColorState(semantic['BetWon/betWon'].color, semantic['BetWon/onBetWon_weaker'].color, 'active', 'auto', 'auto'), semantic['BetWon/onBetWon_weaker--active']?.colorOverride);
    updateColorToken( 'BetWon/betWon--hover', '', functions.createColorState(semantic['BetWon/betWon'].color, semantic['BetWon/onBetWon'].color, 'hover', 'subtle', 'auto'), semantic['BetWon/betWon--hover']?.colorOverride);
    updateColorToken( 'BetWon/betWon--active', '', functions.createColorState(semantic['BetWon/betWon'].color, semantic['BetWon/onBetWon'].color, 'active', 'subtle', 'auto'), semantic['BetWon/betWon--active']?.colorOverride);
    updateColorToken( 'BetWon/betWonBorder', '', functions.createBorder(semantic['BetWon/betWon'].color, 'auto', 'normal'), semantic['BetWon/betWonBorder']?.colorOverride);

    // * * * * * * * * * * * * * * * * * * * * *
    // BET OPEN
    updateColorToken( 'BetOpen/betOpen', '', semantic['Warning/warning'].color, semantic['BetOpen/betOpen']?.colorOverride );
    updateColorToken( 'BetOpen/onBetOpen', '', functions.createOnColor(semantic['BetOpen/betOpen'].color), semantic['BetOpen/onBetOpen']?.colorOverride);
    updateColorToken( 'BetOpen/onBetOpen--hover', '', functions.createOnColorState(semantic['BetOpen/betOpen'].color, semantic['BetOpen/onBetOpen'].color, 'hover', 'auto', 'auto'), semantic['BetOpen/onBetOpen--hover']?.colorOverride);
    updateColorToken( 'BetOpen/onBetOpen--active', '', functions.createOnColorState(semantic['BetOpen/betOpen'].color, semantic['BetOpen/onBetOpen'].color, 'active', 'auto', 'auto'), semantic['BetOpen/onBetOpen--active']?.colorOverride);
    updateColorToken( 'BetOpen/onBetOpen_weaker', '', functions.createOnWeakerColor(semantic['BetOpen/betOpen'].color, semantic['BetOpen/onBetOpen'].color), semantic['BetOpen/onBetOpen_weaker']?.colorOverride);
    updateColorToken( 'BetOpen/onBetOpen_weaker--hover', '', functions.createOnColorState(semantic['BetOpen/betOpen'].color, semantic['BetOpen/onBetOpen_weaker'].color, 'hover', 'auto', 'auto'), semantic['BetOpen/onBetOpen_weaker--hover']?.colorOverride);
    updateColorToken( 'BetOpen/onBetOpen_weaker--active', '', functions.createOnColorState(semantic['BetOpen/betOpen'].color, semantic['BetOpen/onBetOpen_weaker'].color, 'active', 'auto', 'auto'), semantic['BetOpen/onBetOpen_weaker--active']?.colorOverride);
    updateColorToken( 'BetOpen/betOpen--hover', '', functions.createColorState(semantic['BetOpen/betOpen'].color, semantic['BetOpen/onBetOpen'].color, 'hover', 'subtle', 'auto'), semantic['BetOpen/betOpen--hover']?.colorOverride);
    updateColorToken( 'BetOpen/betOpen--active', '', functions.createColorState(semantic['BetOpen/betOpen'].color, semantic['BetOpen/onBetOpen'].color, 'active', 'subtle', 'auto'), semantic['BetOpen/betOpen--active']?.colorOverride);
    updateColorToken( 'BetOpen/betOpenBorder', '', functions.createBorder(semantic['BetOpen/betOpen'].color, 'auto', 'normal'), semantic['BetOpen/betOpenBorder']?.colorOverride);

    // * * * * * * * * * * * * * * * * * * * * *
    // BET LOST
    updateColorToken( 'BetLost/betLost', '', semantic['Danger/danger'].color, semantic['BetLost/betLost']?.colorOverride );
    updateColorToken( 'BetLost/onBetLost', '', functions.createOnColor(semantic['BetLost/betLost'].color), semantic['BetLost/onBetLost']?.colorOverride);
    updateColorToken( 'BetLost/onBetLost--hover', '', functions.createOnColorState(semantic['BetLost/betLost'].color, semantic['BetLost/onBetLost'].color, 'hover', 'auto', 'auto'), semantic['BetLost/onBetLost--hover']?.colorOverride);
    updateColorToken( 'BetLost/onBetLost--active', '', functions.createOnColorState(semantic['BetLost/betLost'].color, semantic['BetLost/onBetLost'].color, 'active', 'auto', 'auto'), semantic['BetLost/onBetLost--active']?.colorOverride);
    updateColorToken( 'BetLost/onBetLost_weaker', '', functions.createOnWeakerColor(semantic['BetLost/betLost'].color, semantic['BetLost/onBetLost'].color), semantic['BetLost/onBetLost_weaker']?.colorOverride);
    updateColorToken( 'BetLost/onBetLost_weaker--hover', '', functions.createOnColorState(semantic['BetLost/betLost'].color, semantic['BetLost/onBetLost_weaker'].color, 'hover', 'auto', 'auto'), semantic['BetLost/onBetLost_weaker--hover']?.colorOverride);
    updateColorToken( 'BetLost/onBetLost_weaker--active', '', functions.createOnColorState(semantic['BetLost/betLost'].color, semantic['BetLost/onBetLost_weaker'].color, 'active', 'auto', 'auto'), semantic['BetLost/onBetLost_weaker--active']?.colorOverride);
    updateColorToken( 'BetLost/betLost--hover', '', functions.createColorState(semantic['BetLost/betLost'].color, semantic['BetLost/onBetLost'].color, 'hover', 'subtle', 'auto'), semantic['BetLost/betLost--hover']?.colorOverride);
    updateColorToken( 'BetLost/betLost--active', '', functions.createColorState(semantic['BetLost/betLost'].color, semantic['BetLost/onBetLost'].color, 'active', 'subtle', 'auto'), semantic['BetLost/betLost--active']?.colorOverride);
    updateColorToken( 'BetLost/betLostBorder', '', functions.createBorder(semantic['BetLost/betLost'].color, 'auto', 'normal'), semantic['BetLost/betLostBorder']?.colorOverride);

    // * * * * * * * * * * * * * * * * * * * * *
    // BET VOID
    updateColorToken( 'BetVoid/betVoid', '', semantic['Info/info'].color, semantic['BetVoid/betVoid']?.colorOverride );
    updateColorToken( 'BetVoid/onBetVoid', '', functions.createOnColor(semantic['BetVoid/betVoid'].color), semantic['BetVoid/onBetVoid']?.colorOverride);
    updateColorToken( 'BetVoid/onBetVoid--hover', '', functions.createOnColorState(semantic['BetVoid/betVoid'].color, semantic['BetVoid/onBetVoid'].color, 'hover', 'auto', 'auto'), semantic['BetVoid/onBetVoid--hover']?.colorOverride);
    updateColorToken( 'BetVoid/onBetVoid--active', '', functions.createOnColorState(semantic['BetVoid/betVoid'].color, semantic['BetVoid/onBetVoid'].color, 'active', 'auto', 'auto'), semantic['BetVoid/onBetVoid--active']?.colorOverride);
    updateColorToken( 'BetVoid/onBetVoid_weaker', '', functions.createOnWeakerColor(semantic['BetVoid/betVoid'].color, semantic['BetVoid/onBetVoid'].color), semantic['BetVoid/onBetVoid_weaker']?.colorOverride);
    updateColorToken( 'BetVoid/onBetVoid_weaker--hover', '', functions.createOnColorState(semantic['BetVoid/betVoid'].color, semantic['BetVoid/onBetVoid_weaker'].color, 'hover', 'auto', 'auto'), semantic['BetVoid/onBetVoid_weaker--hover']?.colorOverride);
    updateColorToken( 'BetVoid/onBetVoid_weaker--active', '', functions.createOnColorState(semantic['BetVoid/betVoid'].color, semantic['BetVoid/onBetVoid_weaker'].color, 'active', 'auto', 'auto'), semantic['BetVoid/onBetVoid_weaker--active']?.colorOverride);
    updateColorToken( 'BetVoid/betVoid--hover', '', functions.createColorState(semantic['BetVoid/betVoid'].color, semantic['BetVoid/onBetVoid'].color, 'hover', 'subtle', 'auto'), semantic['BetVoid/betVoid--hover']?.colorOverride);
    updateColorToken( 'BetVoid/betVoid--active', '', functions.createColorState(semantic['BetVoid/betVoid'].color, semantic['BetVoid/onBetVoid'].color, 'active', 'subtle', 'auto'), semantic['BetVoid/betVoid--active']?.colorOverride);
    updateColorToken( 'BetVoid/betVoidBorder', '', functions.createBorder(semantic['BetVoid/betVoid'].color, 'auto', 'normal'), semantic['BetVoid/betVoidBorder']?.colorOverride);

    // * * * * * * * * * * * * * * * * * * * * *
    // LIVE
    updateColorToken( 'Live/live', '', coreLive, semantic['Live/live']?.colorOverride );
    updateColorToken( 'Live/onLive', '', functions.createOnColor(semantic['Live/live'].color), semantic['Live/onLive']?.colorOverride);
    updateColorToken( 'Live/onLive--hover', '', functions.createOnColorState(semantic['Live/live'].color, semantic['Live/onLive'].color, 'hover', 'auto', 'auto'), semantic['Live/onLive--hover']?.colorOverride);
    updateColorToken( 'Live/onLive--active', '', functions.createOnColorState(semantic['Live/live'].color, semantic['Live/onLive'].color, 'active', 'auto', 'auto'), semantic['Live/onLive--active']?.colorOverride);
    updateColorToken( 'Live/onLive_weaker', '', functions.createOnWeakerColor(semantic['Live/live'].color, semantic['Live/onLive'].color), semantic['Live/onLive_weaker']?.colorOverride);
    updateColorToken( 'Live/onLive_weaker--hover', '', functions.createOnColorState(semantic['Live/live'].color, semantic['Live/onLive_weaker'].color, 'hover', 'auto', 'auto'), semantic['Live/onLive_weaker--hover']?.colorOverride);
    updateColorToken( 'Live/onLive_weaker--active', '', functions.createOnColorState(semantic['Live/live'].color, semantic['Live/onLive_weaker'].color, 'active', 'auto', 'auto'), semantic['Live/onLive_weaker--active']?.colorOverride);
    updateColorToken( 'Live/live--hover', '', functions.createColorState(semantic['Live/live'].color, semantic['Live/onLive'].color, 'hover', 'auto', 'auto'), semantic['Live/live--hover']?.colorOverride);
    updateColorToken( 'Live/live--active', '', functions.createColorState(semantic['Live/live'].color, semantic['Live/onLive'].color, 'active', 'auto', 'auto'), semantic['Live/live--active']?.colorOverride);
    updateColorToken( 'Live/liveBorder', '', functions.createBorder(semantic['Live/live'].color, 'auto', 'normal'), semantic['Live/liveBorder']?.colorOverride);

    // * * * * * * * * * * * * * * * * * * * * *
    // ODDSBOOST
    updateColorToken( 'OddsBoost/oddsBoost', '', coreOddsBoost, semantic['OddsBoost/oddsBoost']?.colorOverride );
    updateColorToken( 'OddsBoost/onOddsBoost', '', functions.createOnColor(semantic['OddsBoost/oddsBoost'].color), semantic['OddsBoost/onOddsBoost']?.colorOverride);
    updateColorToken( 'OddsBoost/onOddsBoost--hover', '', functions.createOnColorState(semantic['OddsBoost/oddsBoost'].color, semantic['OddsBoost/onOddsBoost'].color, 'hover', 'auto', 'auto'), semantic['OddsBoost/onOddsBoost--hover']?.colorOverride);
    updateColorToken( 'OddsBoost/onOddsBoost--active', '', functions.createOnColorState(semantic['OddsBoost/oddsBoost'].color, semantic['OddsBoost/onOddsBoost'].color, 'active', 'auto', 'auto'), semantic['OddsBoost/onOddsBoost--active']?.colorOverride);
    updateColorToken( 'OddsBoost/onOddsBoost_weaker', '', functions.createOnWeakerColor(semantic['OddsBoost/oddsBoost'].color, semantic['OddsBoost/onOddsBoost'].color), semantic['OddsBoost/onOddsBoost_weaker']?.colorOverride);
    updateColorToken( 'OddsBoost/onOddsBoost_weaker--hover', '', functions.createOnColorState(semantic['OddsBoost/oddsBoost'].color, semantic['OddsBoost/onOddsBoost_weaker'].color, 'hover', 'auto', 'auto'), semantic['OddsBoost/onOddsBoost_weaker--hover']?.colorOverride);
    updateColorToken( 'OddsBoost/onOddsBoost_weaker--active', '', functions.createOnColorState(semantic['OddsBoost/oddsBoost'].color, semantic['OddsBoost/onOddsBoost_weaker'].color, 'active', 'auto', 'auto'), semantic['OddsBoost/onOddsBoost_weaker--active']?.colorOverride);
    updateColorToken( 'OddsBoost/oddsBoost--hover', '', functions.createColorState(semantic['OddsBoost/oddsBoost'].color, semantic['OddsBoost/onOddsBoost'].color, 'hover', 'auto', 'auto'), semantic['OddsBoost/oddsBoost--hover']?.colorOverride);
    updateColorToken( 'OddsBoost/oddsBoost--active', '', functions.createColorState(semantic['OddsBoost/oddsBoost'].color, semantic['OddsBoost/onOddsBoost'].color, 'active', 'auto', 'auto'), semantic['OddsBoost/oddsBoost--active']?.colorOverride);
    updateColorToken( 'OddsBoost/oddsBoostBorder', '', functions.createBorder(semantic['OddsBoost/oddsBoost'].color, 'auto', 'normal'), semantic['OddsBoost/oddsBoostBorder']?.colorOverride);

    // * * * * * * * * * * * * * * * * * * * * *
    // PRICEBOOST
    updateColorToken( 'PriceBoost/priceBoost', '', corePriceBoost, semantic['PriceBoost/priceBoost']?.colorOverride );
    updateColorToken( 'PriceBoost/onPriceBoost', '', functions.createOnColor(semantic['PriceBoost/priceBoost'].color), semantic['PriceBoost/onPriceBoost']?.colorOverride);
    updateColorToken( 'PriceBoost/onPriceBoost--hover', '', functions.createOnColorState(semantic['PriceBoost/priceBoost'].color, semantic['PriceBoost/onPriceBoost'].color, 'hover', 'auto', 'auto'), semantic['PriceBoost/onPriceBoost--hover']?.colorOverride);
    updateColorToken( 'PriceBoost/onPriceBoost--active', '', functions.createOnColorState(semantic['PriceBoost/priceBoost'].color, semantic['PriceBoost/onPriceBoost'].color, 'active', 'auto', 'auto'), semantic['PriceBoost/onPriceBoost--active']?.colorOverride);
    updateColorToken( 'PriceBoost/onPriceBoost_weaker', '', functions.createOnWeakerColor(semantic['PriceBoost/priceBoost'].color, semantic['PriceBoost/onPriceBoost'].color), semantic['PriceBoost/onPriceBoost_weaker']?.colorOverride);
    updateColorToken( 'PriceBoost/onPriceBoost_weaker--hover', '', functions.createOnColorState(semantic['PriceBoost/priceBoost'].color, semantic['PriceBoost/onPriceBoost_weaker'].color, 'hover', 'auto', 'auto'), semantic['PriceBoost/onPriceBoost_weaker--hover']?.colorOverride);
    updateColorToken( 'PriceBoost/onPriceBoost_weaker--active', '', functions.createOnColorState(semantic['PriceBoost/priceBoost'].color, semantic['PriceBoost/onPriceBoost_weaker'].color, 'active', 'auto', 'auto'), semantic['PriceBoost/onPriceBoost_weaker--active']?.colorOverride);
    updateColorToken( 'PriceBoost/priceBoost--hover', '', functions.createColorState(semantic['PriceBoost/priceBoost'].color, semantic['PriceBoost/onPriceBoost'].color, 'hover', 'auto', 'auto'), semantic['PriceBoost/priceBoost--hover']?.colorOverride);
    updateColorToken( 'PriceBoost/priceBoost--active', '', functions.createColorState(semantic['PriceBoost/priceBoost'].color, semantic['PriceBoost/onPriceBoost'].color, 'active', 'auto', 'auto'), semantic['PriceBoost/priceBoost--active']?.colorOverride);
    updateColorToken( 'PriceBoost/priceBoostBorder', '', functions.createBorder(semantic['PriceBoost/priceBoost'].color, 'auto', 'normal'), semantic['PriceBoost/priceBoostBorder']?.colorOverride);

    // * * * * * * * * * * * * * * * * * * * * *
    // EACHWAY
    updateColorToken( 'EachWay/eachWay', '', coreEachWay, semantic['EachWay/eachWay']?.colorOverride );
    updateColorToken( 'EachWay/onEachWay', '', functions.createOnColor(semantic['EachWay/eachWay'].color), semantic['EachWay/onEachWay']?.colorOverride);
    updateColorToken( 'EachWay/onEachWay--hover', '', functions.createOnColorState(semantic['EachWay/eachWay'].color, semantic['EachWay/onEachWay'].color, 'hover', 'auto', 'auto'), semantic['EachWay/onEachWay--hover']?.colorOverride);
    updateColorToken( 'EachWay/onEachWay--active', '', functions.createOnColorState(semantic['EachWay/eachWay'].color, semantic['EachWay/onEachWay'].color, 'active', 'auto', 'auto'), semantic['EachWay/onEachWay--active']?.colorOverride);
    updateColorToken( 'EachWay/onEachWay_weaker', '', functions.createOnWeakerColor(semantic['EachWay/eachWay'].color, semantic['EachWay/onEachWay'].color), semantic['EachWay/onEachWay_weaker']?.colorOverride);
    updateColorToken( 'EachWay/onEachWay_weaker--hover', '', functions.createOnColorState(semantic['EachWay/eachWay'].color, semantic['EachWay/onEachWay_weaker'].color, 'hover', 'auto', 'auto'), semantic['EachWay/onEachWay_weaker--hover']?.colorOverride);
    updateColorToken( 'EachWay/onEachWay_weaker--active', '', functions.createOnColorState(semantic['EachWay/eachWay'].color, semantic['EachWay/onEachWay_weaker'].color, 'active', 'auto', 'auto'), semantic['EachWay/onEachWay_weaker--active']?.colorOverride);
    updateColorToken( 'EachWay/eachWay--hover', '', functions.createColorState(semantic['EachWay/eachWay'].color, semantic['EachWay/onEachWay'].color, 'hover', 'auto', 'auto'), semantic['EachWay/eachWay--hover']?.colorOverride);
    updateColorToken( 'EachWay/eachWay--active', '', functions.createColorState(semantic['EachWay/eachWay'].color, semantic['EachWay/onEachWay'].color, 'active', 'auto', 'auto'), semantic['EachWay/eachWay--active']?.colorOverride);
    updateColorToken( 'EachWay/eachWayBorder', '', functions.createBorder(semantic['EachWay/eachWay'].color, 'auto', 'normal'), semantic['EachWay/eachWayBorder']?.colorOverride);

    // * * * * * * * * * * * * * * * * * * * * *
    // TEASERPLUS
    updateColorToken( 'TeaserPlus/teaserPlus', '', coreTeaserPlus, semantic['TeaserPlus/teaserPlus']?.colorOverride );
    updateColorToken( 'TeaserPlus/onTeaserPlus', '', functions.createOnColor(semantic['TeaserPlus/teaserPlus'].color), semantic['TeaserPlus/onTeaserPlus']?.colorOverride);
    updateColorToken( 'TeaserPlus/onTeaserPlus--hover', '', functions.createOnColorState(semantic['TeaserPlus/teaserPlus'].color, semantic['TeaserPlus/onTeaserPlus'].color, 'hover', 'auto', 'auto'), semantic['TeaserPlus/onTeaserPlus--hover']?.colorOverride);
    updateColorToken( 'TeaserPlus/onTeaserPlus--active', '', functions.createOnColorState(semantic['TeaserPlus/teaserPlus'].color, semantic['TeaserPlus/onTeaserPlus'].color, 'active', 'auto', 'auto'), semantic['TeaserPlus/onTeaserPlus--active']?.colorOverride);
    updateColorToken( 'TeaserPlus/onTeaserPlus_weaker', '', functions.createOnWeakerColor(semantic['TeaserPlus/teaserPlus'].color, semantic['TeaserPlus/onTeaserPlus'].color), semantic['TeaserPlus/onTeaserPlus_weaker']?.colorOverride);
    updateColorToken( 'TeaserPlus/onTeaserPlus_weaker--hover', '', functions.createOnColorState(semantic['TeaserPlus/teaserPlus'].color, semantic['TeaserPlus/onTeaserPlus_weaker'].color, 'hover', 'auto', 'auto'), semantic['TeaserPlus/onTeaserPlus_weaker--hover']?.colorOverride);
    updateColorToken( 'TeaserPlus/onTeaserPlus_weaker--active', '', functions.createOnColorState(semantic['TeaserPlus/teaserPlus'].color, semantic['TeaserPlus/onTeaserPlus_weaker'].color, 'active', 'auto', 'auto'), semantic['TeaserPlus/onTeaserPlus_weaker--active']?.colorOverride);
    updateColorToken( 'TeaserPlus/teaserPlus--hover', '', functions.createColorState(semantic['TeaserPlus/teaserPlus'].color, semantic['TeaserPlus/onTeaserPlus'].color, 'hover', 'auto', 'auto'), semantic['TeaserPlus/teaserPlus--hover']?.colorOverride);
    updateColorToken( 'TeaserPlus/teaserPlus--active', '', functions.createColorState(semantic['TeaserPlus/teaserPlus'].color, semantic['TeaserPlus/onTeaserPlus'].color, 'active', 'auto', 'auto'), semantic['TeaserPlus/teaserPlus--active']?.colorOverride);
    updateColorToken( 'TeaserPlus/teaserPlusBorder', '', functions.createBorder(semantic['TeaserPlus/teaserPlus'].color, 'auto', 'normal'), semantic['TeaserPlus/teaserPlusBorder']?.colorOverride);

    // * * * * * * * * * * * * * * * * * * * * *
    // SGP
    updateColorToken( 'SGP/sGP', '', coreSGP, semantic['SGP/sGP']?.colorOverride );
    updateColorToken( 'SGP/onSGP', '', functions.createOnColor(semantic['SGP/sGP'].color), semantic['SGP/onSGP']?.colorOverride);
    updateColorToken( 'SGP/onSGP--hover', '', functions.createOnColorState(semantic['SGP/sGP'].color, semantic['SGP/onSGP'].color, 'hover', 'auto', 'auto'), semantic['SGP/onSGP--hover']?.colorOverride);
    updateColorToken( 'SGP/onSGP--active', '', functions.createOnColorState(semantic['SGP/sGP'].color, semantic['SGP/onSGP'].color, 'active', 'auto', 'auto'), semantic['SGP/onSGP--active']?.colorOverride);
    updateColorToken( 'SGP/onSGP_weaker', '', functions.createOnWeakerColor(semantic['SGP/sGP'].color, semantic['SGP/onSGP'].color), semantic['SGP/onSGP_weaker']?.colorOverride);
    updateColorToken( 'SGP/onSGP_weaker--hover', '', functions.createOnColorState(semantic['SGP/sGP'].color, semantic['SGP/onSGP_weaker'].color, 'hover', 'auto', 'auto'), semantic['SGP/onSGP_weaker--hover']?.colorOverride);
    updateColorToken( 'SGP/onSGP_weaker--active', '', functions.createOnColorState(semantic['SGP/sGP'].color, semantic['SGP/onSGP_weaker'].color, 'active', 'auto', 'auto'), semantic['SGP/onSGP_weaker--active']?.colorOverride);
    updateColorToken( 'SGP/sGP--hover', '', functions.createColorState(semantic['SGP/sGP'].color, semantic['SGP/onSGP'].color, 'hover', 'auto', 'auto'), semantic['SGP/sGP--hover']?.colorOverride);
    updateColorToken( 'SGP/sGP--active', '', functions.createColorState(semantic['SGP/sGP'].color, semantic['SGP/onSGP'].color, 'active', 'auto', 'auto'), semantic['SGP/sGP--active']?.colorOverride);
    updateColorToken( 'SGP/sGPBorder', '', functions.createBorder(semantic['SGP/sGP'].color, 'auto', 'normal'), semantic['SGP/sGPBorder']?.colorOverride);


    // * * * * * * * * * * * * * * * * * * * * *
    // DISABLED & DISABLED ALT
    // Check against surface, decide if Disabled is based on black or white and vice versa for DisabledAlt
    if (Color(semantic['Surface/surface']).isLight()) {
        updateColorToken( 'Disabled/disabled', '', 'rgba(0, 0, 0, 0.12)', semantic['Disabled/disabled']?.colorOverride );
        updateColorToken( 'Disabled/onDisabled', '', 'rgba(0, 0, 0, 0.16)', semantic['Disabled/onDisabled']?.colorOverride );
        updateColorToken( 'DisabledAlt/disabledAlt', '', 'rgba(255, 255, 255, 0.12)', semantic['DisabledAlt/disabledAlt']?.colorOverride );
        updateColorToken( 'DisabledAlt/onDisabledAlt', '', 'rgba(255, 255, 255, 0.30)', semantic['DisabledAlt/onDisabledAlt']?.colorOverride );
    } else {
        updateColorToken( 'Disabled/disabled', '', 'rgba(255, 255, 255, 0.12)', semantic['Disabled/disabled']?.colorOverride );
        updateColorToken( 'Disabled/onDisabled', '', 'rgba(255, 255, 255, 0.30)', semantic['Disabled/onDisabled']?.colorOverride );
        updateColorToken( 'DisabledAlt/disabledAlt', '', 'rgba(0, 0, 0, 0.12)', semantic['DisabledAlt/disabledAlt']?.colorOverride );
        updateColorToken( 'DisabledAlt/onDisabledAlt', '', 'rgba(0, 0, 0, 0.16)', semantic['DisabledAlt/onDisabledAlt']?.colorOverride );
    }

    return {
        ...semantic,
    };
};
