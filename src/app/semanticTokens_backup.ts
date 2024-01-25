import Color from 'tinycolor2';
import * as functions from './helpers/functions';
// import * as constants from './helpers/constants';
// import {DarkAlpha200, DarkAlpha700, DarkAlpha900} from './helpers/constants';

// These aren't generated,
// and are used in the functions.js file
// to generate colors for the theme
export const Neutral100 = '#ffffff';
export const Neutral200 = '#e6e6e6';
export const Neutral300 = '#dbdbdb';
export const Neutral600 = '#666666';
export const Neutral700 = '#31322E';
export const Neutral900 = '#000000';
// export const Transparent = 'rgba(255, 255, 255, 0)';

export const createTheme = (
    themeColor,
    transactionColor,
    highlightColor,
    canvasColor,
    surfaceColor) => {

    // Base theme -- these colours are used to generate the entire theme
    // Base colour comes from the colour picker in the App UI
    // If no Kambi theme is provided, assume false
    const baseTheme = {
        Theme: themeColor,
        Transaction: transactionColor,
        Highlight: highlightColor,
        Canvas: canvasColor,
        Surface: surfaceColor };

    // I name things to match the Figma slash naming convention
    // It just makes it easier for me to match the ID to the token later

    // Palette
    const core = {};
    core['Core/Theme'] = baseTheme['Theme'];
    core['Core/ThemeLight'] = functions.createLightColor(core['Core/Theme']);
    core['Core/ThemeDark'] = functions.createDarkColor(core['Core/Theme']);
    core['Core/Neutral--100'] = Neutral100;
    core['Core/Neutral--200'] = Neutral200;
    core['Core/Neutral--300'] = Neutral300;
    core['Core/Neutral--600'] = Neutral600;
    core['Core/Neutral--700'] = Neutral700;
    core['Core/Neutral--900'] = Neutral900;


    // Semantic
    const semantic = {};

    /*
        THEME
    */
    semantic['Theme/theme'] = baseTheme['Theme'];
    // OnTheme
    semantic['Theme/onTheme'] = functions.createOnColor(semantic['Theme/theme']);
    semantic['Theme/onTheme--hover'] = functions.createOnColorState(
        semantic['Theme/theme'],
        semantic['Theme/onTheme'],
        'hover',
        'auto',
        'auto'
    );
    semantic['Theme/onTheme--active'] = functions.createOnColorState(
        semantic['Theme/theme'],
        semantic['Theme/onTheme'],
        'active',
        'auto',
        'auto'
    );
    semantic['Theme/onTheme_weaker'] = functions.createOnWeakerColor(
        semantic['Theme/theme'],
        semantic['Theme/onTheme']
    );
    semantic['Theme/onTheme_weaker--hover'] = functions.createOnColorState(
        semantic['Theme/theme'],
        semantic['Theme/onTheme_weaker'],
        'hover',
        'auto',
        'auto'
    );
    semantic['Theme/onTheme_weaker--active'] = functions.createOnColorState(
        semantic['Theme/theme'],
        semantic['Theme/onTheme_weaker'],
        'active',
        'auto',
        'auto'
    );

    // Background states
    semantic['Theme/theme--hover'] = functions.createColorState(
        semantic['Theme/theme'],
        semantic['Theme/onTheme'],
        'hover',
        'subtle',
        'auto'
    );
    semantic['Theme/theme--active'] = functions.createColorState(
        semantic['Theme/theme'],
        semantic['Theme/onTheme'],
        'active',
        'subtle',
        'auto'
    );
    // Border
    semantic['Theme/themeBorder'] = functions.createBorder(semantic['Theme/theme'], 'auto', 'normal');

    /*
        THEME LIGHT
    */
    semantic['ThemeLight/themeLight'] = core['Core/ThemeLight'];
    // OnThemeLight
    semantic['ThemeLight/onThemeLight'] = functions.createOnColor(semantic['ThemeLight/themeLight']);
    semantic['ThemeLight/onThemeLight--hover'] = functions.createOnColorState(
        semantic['ThemeLight/themeLight'],
        semantic['ThemeLight/onThemeLight'],
        'hover',
        'auto',
        'auto'
    );
    semantic['ThemeLight/onThemeLight--active'] = functions.createOnColorState(
        semantic['ThemeLight/themeLight'],
        semantic['ThemeLight/onThemeLight'],
        'active',
        'auto',
        'auto'
    );
    semantic['ThemeLight/onThemeLight_weaker'] = functions.createOnWeakerColor(
        semantic['ThemeLight/themeLight'],
        semantic['ThemeLight/onThemeLight']
    );
    semantic['ThemeLight/onThemeLight_weaker--hover'] = functions.createOnColorState(
        semantic['ThemeLight/themeLight'],
        semantic['ThemeLight/onThemeLight_weaker'],
        'hover',
        'auto',
        'auto'
    );
    semantic['ThemeLight/onThemeLight_weaker--active'] = functions.createOnColorState(
        semantic['ThemeLight/themeLight'],
        semantic['ThemeLight/onThemeLight_weaker'],
        'active',
        'auto',
        'auto'
    );
    // Background states
    semantic['ThemeLight/themeLight--hover'] = functions.createColorState(
        semantic['ThemeLight/themeLight'],
        semantic['ThemeLight/onThemeLight'],
        'hover',
        'subtle',
        'auto'
    );
    semantic['ThemeLight/themeLight--active'] = functions.createColorState(
        semantic['ThemeLight/themeLight'],
        semantic['ThemeLight/onThemeLight'],
        'active',
        'subtle',
        'auto'
    );
    // Border
    semantic['ThemeLight/themeLightBorder'] = functions.createBorder(
        semantic['ThemeLight/themeLight'],
        'auto',
        'normal'
    );

    /*
        THEME DARK
    */
    semantic['ThemeDark/themeDark'] = core['Core/ThemeDark'];
    // OnThemeDark
    semantic['ThemeDark/onThemeDark'] = functions.createOnColor(semantic['ThemeDark/themeDark']);
    semantic['ThemeDark/onThemeDark--hover'] = functions.createOnColorState(
        semantic['ThemeDark/themeDark'],
        semantic['ThemeDark/onThemeDark'],
        'hover',
        'auto',
        'auto'
    );
    semantic['ThemeDark/onThemeDark--active'] = functions.createOnColorState(
        semantic['ThemeDark/themeDark'],
        semantic['ThemeDark/onThemeDark'],
        'active',
        'auto',
        'auto'
    );
    semantic['ThemeDark/onThemeDark_weaker'] = functions.createOnWeakerColor(
        semantic['ThemeDark/themeDark'],
        semantic['ThemeDark/onThemeDark']
    );
    semantic['ThemeDark/onThemeDark_weaker--hover'] = functions.createOnColorState(
        semantic['ThemeDark/themeDark'],
        semantic['ThemeDark/onThemeDark_weaker'],
        'hover',
        'auto',
        'auto'
    );
    semantic['ThemeDark/onThemeDark_weaker--active'] = functions.createOnColorState(
        semantic['ThemeDark/themeDark'],
        semantic['ThemeDark/onThemeDark_weaker'],
        'active',
        'auto',
        'auto'
    );
    // Background states
    semantic['ThemeDark/themeDark--hover'] = functions.createColorState(
        semantic['ThemeDark/themeDark'],
        semantic['ThemeDark/onThemeDark'],
        'hover',
        'subtle',
        'auto'
    );
    semantic['ThemeDark/themeDark--active'] = functions.createColorState(
        semantic['ThemeDark/themeDark'],
        semantic['ThemeDark/onThemeDark'],
        'active',
        'subtle',
        'auto'
    );
    // Border
    semantic['ThemeDark/themeDarkBorder'] = functions.createBorder(semantic['ThemeDark/themeDark'], 'auto', 'normal');

    /*
        CANVAS
    */
    semantic['Canvas/canvas'] = baseTheme['Canvas'];
    // OnCanvas
    semantic['Canvas/onCanvas'] = functions.createOnColor(semantic['Canvas/canvas']);
    semantic['Canvas/onCanvas--hover'] = functions.createOnColorState(
        semantic['Canvas/canvas'],
        semantic['Canvas/onCanvas'],
        'hover',
        'auto',
        'auto'
    );
    semantic['Canvas/onCanvas--active'] = functions.createOnColorState(
        semantic['Canvas/canvas'],
        semantic['Canvas/onCanvas'],
        'active',
        'auto',
        'auto'
    );
    semantic['Canvas/onCanvas_weaker'] = functions.createOnWeakerColor(
        semantic['Canvas/canvas'],
        semantic['Canvas/onCanvas']
    );
    semantic['Canvas/onCanvas_weaker--hover'] = functions.createOnColorState(
        semantic['Canvas/canvas'],
        semantic['Canvas/onCanvas_weaker'],
        'hover',
        'auto',
        'auto'
    );
    semantic['Canvas/onCanvas_weaker--active'] = functions.createOnColorState(
        semantic['Canvas/canvas'],
        semantic['Canvas/onCanvas_weaker'],
        'active',
        'auto',
        'auto'
    );
    // Background states
    semantic['Canvas/canvas--hover'] = functions.createColorState(
        semantic['Canvas/canvas'],
        semantic['Canvas/onCanvas'],
        'hover',
        'subtle',
        'auto'
    );
    semantic['Canvas/canvas--active'] = functions.createColorState(
        semantic['Canvas/canvas'],
        semantic['Canvas/onCanvas'],
        'active',
        'subtle',
        'auto'
    );
    // Border
    semantic['Canvas/canvasBorder'] = functions.createBorder(semantic['Canvas/canvas'], 'auto', 'normal');


    /*
        SURFACE
    */
    semantic['Surface/surface'] = baseTheme['Surface'];

    // We can use this to check if the theme is dark or light from now on
    const isDarkTheme = Color(semantic['Surface/surface']).isDark();

    // OnSurface
    semantic['Surface/onSurface'] = functions.createOnColor(semantic['Surface/surface']);
    semantic['Surface/onSurface--hover'] = functions.createOnColorState(
        semantic['Surface/surface'],
        semantic['Surface/onSurface'],
        'hover',
        'auto',
        'auto'
    );
    semantic['Surface/onSurface--active'] = functions.createOnColorState(
        semantic['Surface/surface'],
        semantic['Surface/onSurface'],
        'active',
        'auto',
        'auto'
    );
    semantic['Surface/onSurface_weaker'] = functions.createOnWeakerColor(
        semantic['Surface/surface'],
        semantic['Surface/onSurface']
    );
    semantic['Surface/onSurface_weaker--hover'] = functions.createOnColorState(
        semantic['Surface/surface'],
        semantic['Surface/onSurface_weaker'],
        'hover',
        'auto',
        'auto'
    );
    semantic['Surface/onSurface_weaker--active'] = functions.createOnColorState(
        semantic['Surface/surface'],
        semantic['Surface/onSurface_weaker'],
        'active',
        'auto',
        'auto'
    );
    // Background states
    semantic['Surface/surface--hover'] = functions.createColorState(
        semantic['Surface/surface'],
        semantic['Surface/onSurface'],
        'hover',
        'minimal',
        'auto'
    );
    semantic['Surface/surface--active'] = functions.createColorState(
        semantic['Surface/surface'],
        semantic['Surface/onSurface'],
        'active',
        'minimal',
        'auto'
    );

    // Border
    semantic['Surface/surfaceBorder'] = functions.createBorder(semantic['Surface/surface'], 'auto', 'normal');

    // Transparent
    core['Core/Transparent'] = Color(semantic['Surface']).setAlpha(0).toRgbString();

    /*
        HEADER
    */
    semantic['Header/header'] = core['Core/Theme'];
    // if (isKambiTheme) {
    //     semantic['Header/header'] = core['Core/ThemeDark'];
    // }
    // OnHeader
    semantic['Header/onHeader'] = functions.createOnColor(semantic['Header/header']);
    semantic['Header/onHeader--hover'] = functions.createOnColorState(
        semantic['Header/header'],
        semantic['Header/onHeader'],
        'hover',
        'auto',
        'auto'
    );
    semantic['Header/onHeader--active'] = functions.createOnColorState(
        semantic['Header/header'],
        semantic['Header/onHeader'],
        'active',
        'auto',
        'auto'
    );
    semantic['Header/onHeader_weaker'] = functions.createOnWeakerColor(
        semantic['Header/header'],
        semantic['Header/onHeader']
    );
    semantic['Header/onHeader_weaker--hover'] = functions.createOnColorState(
        semantic['Header/header'],
        semantic['Header/onHeader_weaker'],
        'hover',
        'auto',
        'auto'
    );
    semantic['Header/onHeader_weaker--active'] = functions.createOnColorState(
        semantic['Header/header'],
        semantic['Header/onHeader_weaker'],
        'active',
        'auto',
        'auto'
    );
    // HEADER Background states
    semantic['Header/header--hover'] = functions.createColorState(
        semantic['Header/header'],
        semantic['Header/onHeader'],
        'hover',
        'subtle',
        'auto'
    );
    semantic['Header/header--active'] = functions.createColorState(
        semantic['Header/header'],
        semantic['Header/onHeader'],
        'active',
        'subtle',
        'auto'
    );
    // HEADER Border
    semantic['Header/headerBorder'] = functions.createBorder(semantic['Header/header'], 'auto', 'subtle');

    /*
        BUTTON A
    */
    //    This is my idea for how to fix button A on canvas in some sort of pseudo code

    // Canvas_color = HSL Value of Canvas
    // Canvas_L = Lightnes value of Canvas_color
    // Surface_color = HSL Value of Surface
    // Surface_L = Lightness value of Surface_color
    // Dark_theme_test = IF dark theme THEN True else False //I'm not exactly sure how we decide this but maybe the lightness of surface?
    // Color_diff = Math.abs(Canvas_L-Surface_L) // This will always output a positive number.
    // IF Dark_theme_test == False && Color_diff < 6 THEN Set Token set for button A to themeLight
    // ELSE IF Dark_theme_test == True && Color_diff < 10 Set Token set for button A to themeLight // the threshold for light and dark theme needs to be different.
    // ELSE Button A = Surface token set

    const canvasLValue = Math.round(Color(semantic['Canvas/canvas']).toHsl().l * 100);
    const surfaceLValue = Math.round(Color(semantic['Surface/surface']).toHsl().l * 100);
    const colorDiff = Math.abs(canvasLValue - surfaceLValue);

    // Check the theme and color difference to determine the button color
    if ((!isDarkTheme && colorDiff < 5) || (isDarkTheme && colorDiff < 10)) {
        // Use light theme when:
        // - the theme is not dark and color difference is below 0.06, or
        // - the theme is dark and color difference is below 0.10
        semantic['ButtonA/buttonA'] = core['Core/ThemeLight'];
    } else {
        // Default to using surface color
        semantic['ButtonA/buttonA'] = semantic['Surface/surface'];
    }

    // OnButtonA
    semantic['ButtonA/onButtonA'] = functions.createOnColor(semantic['ButtonA/buttonA']); // in theory the same as onSurface

    semantic['ButtonA/onButtonA--hover'] = functions.createOnColorState(
        semantic['ButtonA/buttonA'],
        semantic['ButtonA/onButtonA'],
        'hover',
        'auto',
        'auto'
    );
    semantic['ButtonA/onButtonA--active'] = functions.createOnColorState(
        semantic['ButtonA/buttonA'],
        semantic['ButtonA/onButtonA'],
        'active',
        'auto',
        'auto'
    );
    semantic['ButtonA/onButtonA_weaker'] = functions.createOnWeakerColor(
        semantic['ButtonA/buttonA'],
        semantic['ButtonA/onButtonA']
    );
    semantic['ButtonA/onButtonA_weaker--hover'] = functions.createOnColorState(
        semantic['ButtonA/buttonA'],
        semantic['ButtonA/onButtonA_weaker'],
        'hover',
        'auto',
        'auto'
    );
    semantic['ButtonA/onButtonA_weaker--active'] = functions.createOnColorState(
        semantic['ButtonA/buttonA'],
        semantic['ButtonA/onButtonA_weaker'],
        'active',
        'auto',
        'auto'
    );
    // BUTTON A Background states
    semantic['ButtonA/buttonA--hover'] = functions.createColorState(
        semantic['ButtonA/buttonA'],
        semantic['ButtonA/onButtonA'],
        'hover',
        'auto',
        'auto'
    );
    semantic['ButtonA/buttonA--active'] = functions.createColorState(
        semantic['ButtonA/buttonA'],
        semantic['ButtonA/onButtonA'],
        'active',
        'auto',
        'auto'
    );
    // BUTTON A Border
    semantic['ButtonA/buttonABorder'] = functions.createBorder(semantic['ButtonA/buttonA'], 'auto', 'normal');
    // Button A Disabled
    if (Color(semantic['Canvas/canvas']).isLight()) {
        semantic['ButtonA/buttonADisabled'] = 'rgba(0, 0, 0, 0.12)';
        semantic['ButtonA/onButtonADisabled'] = 'rgba(0, 0, 0, 0.16)';
    } else {
        semantic['ButtonA/buttonADisabled'] = 'rgba(255, 255, 255, 0.12)';
        semantic['ButtonA/onButtonADisabled'] = 'rgba(255, 255, 255, 0.30)';
    }

    /*
        BUTTON Ghost - A
    */
    semantic['ButtonGhostA/buttonGhostA'] = functions.createGhostColor(semantic['Surface/surface'], 'auto');
    // OnButton Ghost - A
    semantic['ButtonGhostA/onButtonGhostA'] = semantic['Surface/onSurface'];
    semantic['ButtonGhostA/onButtonGhostA--hover'] = semantic['Surface/onSurface--hover'];
    semantic['ButtonGhostA/onButtonGhostA--active'] = semantic['Surface/onSurface--active'];
    semantic['ButtonGhostA/onButtonGhostA_weaker'] = Color(semantic['ButtonGhostA/onButtonGhostA'])
        .setAlpha(0.48)
        .toRgbString();
    semantic['ButtonGhostA/onButtonGhostA_weaker--hover'] = Color(semantic['ButtonGhostA/onButtonGhostA'])
        .setAlpha(0.64)
        .toRgbString();
    semantic['ButtonGhostA/onButtonGhostA_weaker--active'] = Color(semantic['ButtonGhostA/onButtonGhostA'])
        .setAlpha(0.72)
        .toRgbString();
    // BUTTON Ghost A Background states
    semantic['ButtonGhostA/buttonGhostA--hover'] = functions.createColorState(
        semantic['ButtonGhostA/buttonGhostA'],
        semantic['ButtonGhostA/onButtonGhostA'],
        'hover',
        'auto',
        'auto'
    );
    semantic['ButtonGhostA/buttonGhostA--active'] = functions.createColorState(
        semantic['ButtonGhostA/buttonGhostA'],
        semantic['ButtonGhostA/onButtonGhostA'],
        'active',
        'auto',
        'auto'
    );
    // BUTTON Ghost A Border
    semantic['ButtonGhostA/buttonGhostABorder'] = semantic['ButtonGhostA/onButtonGhostA_weaker'];
    // Button Ghost A Disabled
    if (Color(semantic['Surface/surface']).isLight()) {
        semantic['ButtonGhostA/buttonGhostADisabled'] = 'rgba(0, 0, 0, 0.12)';
        semantic['ButtonGhostA/onButtonGhostADisabled'] = 'rgba(0, 0, 0, 0.16)';
    } else {
        semantic['ButtonGhostA/buttonGhostADisabled'] = 'rgba(255, 255, 255, 0.12)';
        semantic['ButtonGhostA/onButtonGhostADisabled'] = 'rgba(255, 255, 255, 0.30)';
    }

    /*
        BUTTON B
    */
    semantic['ButtonB/buttonB'] = core['Core/Theme'];
    // if (isKambiTheme) {
    //     semantic['ButtonB/buttonB'] = core['Core/ThemeDark'];
    // }

    // OnButtonB
    semantic['ButtonB/onButtonB'] = functions.createOnColor(semantic['ButtonB/buttonB']);
    semantic['ButtonB/onButtonB--hover'] = functions.createOnColorState(
        semantic['ButtonB/buttonB'],
        semantic['ButtonB/onButtonB'],
        'hover',
        'auto',
        'auto'
    );
    semantic['ButtonB/onButtonB--active'] = functions.createOnColorState(
        semantic['ButtonB/buttonB'],
        semantic['ButtonB/onButtonB'],
        'active',
        'auto',
        'auto'
    );
    semantic['ButtonB/onButtonB_weaker'] = functions.createOnWeakerColor(
        semantic['ButtonB/buttonB'],
        semantic['ButtonB/onButtonB']
    );
    semantic['ButtonB/onButtonB_weaker--hover'] = functions.createOnColorState(
        semantic['ButtonB/buttonB'],
        semantic['ButtonB/onButtonB_weaker'],
        'hover',
        'auto',
        'auto'
    );
    semantic['ButtonB/onButtonB_weaker--active'] = functions.createOnColorState(
        semantic['ButtonB/buttonB'],
        semantic['ButtonB/onButtonB_weaker'],
        'active',
        'auto',
        'auto'
    );
    // BUTTON B Background states
    semantic['ButtonB/buttonB--hover'] = functions.createColorState(
        semantic['ButtonB/buttonB'],
        semantic['ButtonB/onButtonB'],
        'hover',
        'auto',
        'auto'
    );
    semantic['ButtonB/buttonB--active'] = functions.createColorState(
        semantic['ButtonB/buttonB'],
        semantic['ButtonB/onButtonB'],
        'active',
        'auto',
        'auto'
    );
    // BUTTON B Border
    semantic['ButtonB/buttonBBorder'] = functions.createBorder(semantic['ButtonB/buttonB'], 'auto', 'normal');
    // Button B Disabled
    if (Color(semantic['Canvas/canvas']).isLight()) {
        semantic['ButtonB/buttonBDisabled'] = 'rgba(0, 0, 0, 0.12)';
        semantic['ButtonB/onButtonBDisabled'] = 'rgba(0, 0, 0, 0.16)';
    } else {
        semantic['ButtonB/buttonBDisabled'] = 'rgba(255, 255, 255, 0.12)';
        semantic['ButtonB/onButtonBDisabled'] = 'rgba(255, 255, 255, 0.30)';
    }

    /*
        BUTTON Ghost - B
    */
    semantic['ButtonGhostB/buttonGhostB'] = functions.createGhostColor(semantic['ButtonB/buttonB'], 'auto');
    // OnButton Ghost - B
    semantic['ButtonGhostB/onButtonGhostB'] = core['Core/Neutral--100'];
    semantic['ButtonGhostB/onButtonGhostB--hover'] = core['Core/Neutral--100'];
    semantic['ButtonGhostB/onButtonGhostB--active'] = core['Core/Neutral--100'];
    semantic['ButtonGhostB/onButtonGhostB_weaker'] = Color(semantic['ButtonGhostB/onButtonGhostB'])
        .setAlpha(0.7)
        .toRgbString();
    semantic['ButtonGhostB/onButtonGhostB_weaker--hover'] = Color(semantic['ButtonGhostB/onButtonGhostB'])
        .setAlpha(0.75)
        .toRgbString();
    semantic['ButtonGhostB/onButtonGhostB_weaker--active'] = Color(semantic['ButtonGhostB/onButtonGhostB'])
        .setAlpha(0.77)
        .toRgbString();
    // BUTTON Ghost B Background states
    semantic['ButtonGhostB/buttonGhostB--hover'] = functions.createColorState(
        semantic['ButtonGhostB/buttonGhostB'],
        semantic['ButtonGhostB/onButtonGhostB'],
        'hover',
        'intense',
        'auto'
    );
    semantic['ButtonGhostB/buttonGhostB--active'] = functions.createColorState(
        semantic['ButtonGhostB/buttonGhostB'],
        semantic['ButtonGhostB/onButtonGhostB'],
        'active',
        'intense',
        'auto'
    );
    // BUTTON Ghost B Border
    semantic['ButtonGhostB/buttonGhostBBorder'] = semantic['ButtonGhostB/onButtonGhostB_weaker'];
    // Button Ghost B Disabled
    if (Color(semantic['Header/header']).isLight()) {
        semantic['ButtonGhostB/buttonGhostBDisabled'] = 'rgba(0, 0, 0, 0.12)';
        semantic['ButtonGhostB/onButtonGhostBDisabled'] = 'rgba(0, 0, 0, 0.16)';
    } else {
        semantic['ButtonGhostB/buttonGhostBDisabled'] = 'rgba(255, 255, 255, 0.12)';
        semantic['ButtonGhostB/onButtonGhostBDisabled'] = 'rgba(255, 255, 255, 0.30)';
    }

    /*
        OUTCOME
    */
    // If it's a dark surface, use Theme instead of themeLight
    if (Color(semantic['Surface/surface']).isLight()) {
        semantic['Outcome/outcome'] = semantic['ThemeLight/themeLight'];
    } else {
        semantic['Outcome/outcome'] = semantic['Theme/theme'];
    }
    // OnOutcome
    semantic['Outcome/onOutcome'] = functions.createOnColor(semantic['Outcome/outcome']);
    semantic['Outcome/onOutcome--hover'] = functions.createOnColorState(
        semantic['Outcome/outcome'],
        semantic['Outcome/onOutcome'],
        'hover',
        'auto',
        'auto'
    );
    semantic['Outcome/onOutcome--active'] = functions.createOnColorState(
        semantic['Outcome/outcome'],
        semantic['Outcome/onOutcome'],
        'active',
        'auto',
        'auto'
    );
    semantic['Outcome/onOutcome_weaker'] = functions.createOnWeakerColor(
        semantic['Outcome/outcome'],
        semantic['Outcome/onOutcome']
    );
    semantic['Outcome/onOutcome_weaker--hover'] = functions.createOnColorState(
        semantic['Outcome/outcome'],
        semantic['Outcome/onOutcome_weaker'],
        'hover',
        'auto',
        'auto'
    );
    semantic['Outcome/onOutcome_weaker--active'] = functions.createOnColorState(
        semantic['Outcome/outcome'],
        semantic['Outcome/onOutcome_weaker'],
        'active',
        'auto',
        'auto'
    );
    // OUTCOME Background states
    semantic['Outcome/outcome--hover'] = functions.createColorState(
        semantic['Outcome/outcome'],
        semantic['Outcome/onOutcome'],
        'hover',
        'minimal',
        'auto'
    );
    semantic['Outcome/outcome--active'] = functions.createColorState(
        semantic['Outcome/outcome'],
        semantic['Outcome/onOutcome'],
        'active',
        'minimal',
        'auto'
    );

    // OUTCOME border
    semantic['Outcome/outcomeBorder'] = functions.createBorder(semantic['Outcome/outcome'], 'auto', 'normal');

    /*
        TRANSACTION
    */
    semantic['Transaction/transaction'] = baseTheme['Transaction'];
    // OnTransaction
    semantic['Transaction/onTransaction'] = functions.createOnColor(semantic['Transaction/transaction']);
    semantic['Transaction/onTransaction--hover'] = functions.createOnColorState(
        semantic['Transaction/transaction'],
        semantic['Transaction/onTransaction'],
        'hover',
        'intense',
        'auto'
    );
    semantic['Transaction/onTransaction--active'] = functions.createOnColorState(
        semantic['Transaction/transaction'],
        semantic['Transaction/onTransaction'],
        'active',
        'intense',
        'auto'
    );
    semantic['Transaction/onTransaction_weaker'] = functions.createOnWeakerColor(
        semantic['Transaction/transaction'],
        semantic['Transaction/onTransaction']
    );
    semantic['Transaction/onTransaction_weaker--hover'] = functions.createOnColorState(
        semantic['Transaction/transaction'],
        semantic['Transaction/onTransaction_weaker'],
        'hover',
        'auto',
        'auto'
    );
    semantic['Transaction/onTransaction_weaker--active'] = functions.createOnColorState(
        semantic['Transaction/transaction'],
        semantic['Transaction/onTransaction_weaker'],
        'active',
        'auto',
        'auto'
    );
    // TRANSACTION Background states
    semantic['Transaction/transaction--hover'] = functions.createColorState(
        semantic['Transaction/transaction'],
        semantic['Transaction/onTransaction'],
        'hover',
        'subtle',
        'auto'
    );
    semantic['Transaction/transaction--active'] = functions.createColorState(
        semantic['Transaction/transaction'],
        semantic['Transaction/onTransaction'],
        'active',
        'subtle',
        'auto'
    );
    // TRANSACTION Border
    semantic['Transaction/transactionBorder'] = functions.createBorder(
        semantic['Transaction/transaction'],
        'auto',
        'normal'
    );
    // Transaction Disabled
    if (Color(semantic['Surface/surface']).isLight()) {
        semantic['Transaction/transactionDisabled'] = 'rgba(0, 0, 0, 0.12)';
        semantic['Transaction/onTransactionDisabled'] = 'rgba(0, 0, 0, 0.16)';
    } else {
        semantic['Transaction/transactionDisabled'] = 'rgba(255, 255, 255, 0.12)';
        semantic['Transaction/onTransactionDisabled'] = 'rgba(255, 255, 255, 0.30)';
    }

    /*
        HIGHLIGHT
    */
    semantic['Highlight/highlight'] = baseTheme['Highlight'];
    // OnHighlight
    semantic['Highlight/onHighlight'] = functions.createOnColor(semantic['Highlight/highlight']);
    semantic['Highlight/onHighlight--hover'] = functions.createOnColorState(
        semantic['Highlight/highlight'],
        semantic['Highlight/onHighlight'],
        'hover',
        'auto',
        'auto'
    );
    semantic['Highlight/onHighlight--active'] = functions.createOnColorState(
        semantic['Highlight/highlight'],
        semantic['Highlight/onHighlight'],
        'active',
        'auto',
        'auto'
    );
    semantic['Highlight/onHighlight_weaker'] = functions.createOnWeakerColor(
        semantic['Highlight/highlight'],
        semantic['Highlight/onHighlight']
    );
    semantic['Highlight/onHighlight_weaker--hover'] = functions.createOnColorState(
        semantic['Highlight/highlight'],
        semantic['Highlight/onHighlight_weaker'],
        'hover',
        'auto',
        'auto'
    );
    semantic['Highlight/onHighlight_weaker--active'] = functions.createOnColorState(
        semantic['Highlight/highlight'],
        semantic['Highlight/onHighlight_weaker'],
        'active',
        'auto',
        'auto'
    );
    // HIGHLIGHT Background states
    semantic['Highlight/highlight--hover'] = functions.createColorState(
        semantic['Highlight/highlight'],
        semantic['Highlight/onHighlight'],
        'hover',
        'auto',
        'auto'
    );
    semantic['Highlight/highlight--active'] = functions.createColorState(
        semantic['Highlight/highlight'],
        semantic['Highlight/onHighlight'],
        'active',
        'auto',
        'auto'
    );

    // HIGHLIGHT Border
    semantic['Highlight/highlightBorder'] = functions.createBorder(semantic['Highlight/highlight'], 'auto', 'normal');

    /*
        INPUT
    */
    semantic['Input/input'] = core['Core/Theme'];
    // OnInput
    semantic['Input/onInput'] = functions.createOnColor(semantic['Input/input']);
    semantic['Input/onInput--hover'] = functions.createOnColorState(
        semantic['Input/input'],
        semantic['Input/onInput'],
        'hover',
        'auto',
        'auto'
    );
    semantic['Input/onInput--active'] = functions.createOnColorState(
        semantic['Input/input'],
        semantic['Input/onInput'],
        'active',
        'auto',
        'auto'
    );
    semantic['Input/onInput_weaker'] = functions.createOnWeakerColor(
        semantic['Input/input'],
        semantic['Input/onInput']
    );
    semantic['Input/onInput_weaker--hover'] = functions.createOnColorState(
        semantic['Input/input'],
        semantic['Input/onInput_weaker'],
        'hover',
        'auto',
        'auto'
    );
    semantic['Input/onInput_weaker--active'] = functions.createOnColorState(
        semantic['Input/input'],
        semantic['Input/onInput_weaker'],
        'active',
        'auto',
        'auto'
    );
    // INPUT Background states
    semantic['Input/input--hover'] = functions.createColorState(
        semantic['Input/input'],
        semantic['Input/onInput'],
        'hover',
        'subtle',
        'auto'
    );
    semantic['Input/input--active'] = functions.createColorState(
        semantic['Input/input'],
        semantic['Input/onInput'],
        'active',
        'subtle',
        'auto'
    );
    // INPUT Border
    semantic['Input/inputBorder'] = functions.createBorder(semantic['Input/input'], 'auto', 'normal');

    /*
        SELECTED
    */
    semantic['Selected/selected'] = baseTheme['Highlight'];
    // OnSelected
    semantic['Selected/onSelected'] = functions.createOnColor(semantic['Selected/selected']);
    semantic['Selected/onSelected--hover'] = functions.createOnColorState(
        semantic['Selected/selected'],
        semantic['Selected/onSelected'],
        'hover',
        'auto',
        'auto'
    );
    semantic['Selected/onSelected--active'] = functions.createOnColorState(
        semantic['Selected/selected'],
        semantic['Selected/onSelected'],
        'active',
        'auto',
        'auto'
    );
    semantic['Selected/onSelected_weaker'] = functions.createOnWeakerColor(
        semantic['Selected/selected'],
        semantic['Selected/onSelected']
    );
    semantic['Selected/onSelected_weaker--hover'] = functions.createOnColorState(
        semantic['Selected/selected'],
        semantic['Selected/onSelected_weaker'],
        'hover',
        'auto',
        'auto'
    );
    semantic['Selected/onSelected_weaker--active'] = functions.createOnColorState(
        semantic['Selected/selected'],
        semantic['Selected/onSelected_weaker'],
        'active',
        'auto',
        'auto'
    );
    semantic['Selected/onSelected--disabled'] = functions.createOnDisabled(semantic['Selected/onSelected']);
    // Selected Background states
    semantic['Selected/selected--hover'] = functions.createColorState(
        semantic['Selected/selected'],
        semantic['Selected/onSelected'],
        'hover',
        'auto',
        'auto'
    );
    semantic['Selected/selected--active'] = functions.createColorState(
        semantic['Selected/selected'],
        semantic['Selected/onSelected'],
        'active',
        'auto',
        'auto'
    );
    semantic['Selected/selected--disabled'] = functions.createDisabledColor(semantic['Selected/onSelected']);
    // Selected Border
    semantic['Selected/selectedBorder'] = functions.createBorder(semantic['Selected/selected'], 'auto', 'normal');

    // Signal colors
    /*
        SUCCESS
    */
    semantic['Success/success'] = '#009D4f';
    // OnSuccess
    semantic['Success/onSuccess'] = functions.createOnColor(semantic['Success/success']);
    semantic['Success/onSuccess--hover'] = functions.createOnColorState(
        semantic['Success/success'],
        semantic['Success/onSuccess'],
        'hover',
        'auto',
        'auto'
    );
    semantic['Success/onSuccess--active'] = functions.createOnColorState(
        semantic['Success/success'],
        semantic['Success/onSuccess'],
        'active',
        'auto',
        'auto'
    );
    semantic['Success/onSuccess_weaker'] = functions.createOnWeakerColor(
        semantic['Success/success'],
        semantic['Success/onSuccess']
    );
    semantic['Success/onSuccess_weaker--hover'] = functions.createOnColorState(
        semantic['Success/success'],
        semantic['Success/onSuccess_weaker'],
        'hover',
        'auto',
        'auto'
    );
    semantic['Success/onSuccess_weaker--active'] = functions.createOnColorState(
        semantic['Success/success'],
        semantic['Success/onSuccess_weaker'],
        'active',
        'auto',
        'auto'
    );
    // Success Background states
    semantic['Success/success--hover'] = functions.createColorState(
        semantic['Success/success'],
        semantic['Success/onSuccess'],
        'hover',
        'auto',
        'auto'
    );
    semantic['Success/success--active'] = functions.createColorState(
        semantic['Success/success'],
        semantic['Success/onSuccess'],
        'active',
        'auto',
        'auto'
    );

    // Success Border
    semantic['Success/successBorder'] = functions.createBorder(semantic['Success/success'], 'auto', 'normal');

    /*
        WARNING
    */
    semantic['Warning/warning'] = '#FFD23B';
    // OnWarning
    semantic['Warning/onWarning'] = functions.createOnColor(semantic['Warning/warning']);
    semantic['Warning/onWarning--hover'] = functions.createOnColorState(
        semantic['Warning/warning'],
        semantic['Warning/onWarning'],
        'hover',
        'auto',
        'auto'
    );
    semantic['Warning/onWarning--active'] = functions.createOnColorState(
        semantic['Warning/warning'],
        semantic['Warning/onWarning'],
        'active',
        'auto',
        'auto'
    );
    semantic['Warning/onWarning_weaker'] = functions.createOnWeakerColor(
        semantic['Warning/warning'],
        semantic['Warning/onWarning']
    );
    semantic['Warning/onWarning_weaker--hover'] = functions.createOnColorState(
        semantic['Warning/warning'],
        semantic['Warning/onWarning_weaker'],
        'hover',
        'auto',
        'auto'
    );
    semantic['Warning/onWarning_weaker--active'] = functions.createOnColorState(
        semantic['Warning/warning'],
        semantic['Warning/onWarning_weaker'],
        'active',
        'auto',
        'auto'
    );
    // WARNING Background states
    semantic['Warning/warning--hover'] = functions.createColorState(
        semantic['Warning/warning'],
        semantic['Warning/onWarning'],
        'hover',
        'auto',
        'auto'
    );
    semantic['Warning/warning--active'] = functions.createColorState(
        semantic['Warning/warning'],
        semantic['Warning/onWarning'],
        'active',
        'auto',
        'auto'
    );

    // WARNING Border
    semantic['Warning/warningBorder'] = functions.createBorder(semantic['Warning/warning'], 'auto', 'normal');

    /*
        DANGER
    */
    semantic['Danger/danger'] = '#EF382B';
    // OnDanger
    semantic['Danger/onDanger'] = functions.createOnColor(semantic['Danger/danger']);
    semantic['Danger/onDanger--hover'] = functions.createOnColorState(
        semantic['Danger/danger'],
        semantic['Danger/onDanger'],
        'hover',
        'auto',
        'auto'
    );
    semantic['Danger/onDanger--active'] = functions.createOnColorState(
        semantic['Danger/danger'],
        semantic['Danger/onDanger'],
        'active',
        'auto',
        'auto'
    );
    semantic['Danger/onDanger_weaker'] = functions.createOnWeakerColor(
        semantic['Danger/danger'],
        semantic['Danger/onDanger']
    );
    semantic['Danger/onDanger_weaker--hover'] = functions.createOnColorState(
        semantic['Danger/danger'],
        semantic['Danger/onDanger_weaker'],
        'hover',
        'auto',
        'auto'
    );
    semantic['Danger/onDanger_weaker--active'] = functions.createOnColorState(
        semantic['Danger/danger'],
        semantic['Danger/onDanger_weaker'],
        'active',
        'auto',
        'auto'
    );
    // DANGER Background states
    semantic['Danger/danger--hover'] = functions.createColorState(
        semantic['Danger/danger'],
        semantic['Danger/onDanger'],
        'hover',
        'auto',
        'auto'
    );
    semantic['Danger/danger--active'] = functions.createColorState(
        semantic['Danger/danger'],
        semantic['Danger/onDanger'],
        'active',
        'auto',
        'auto'
    );

    // DANGER Border
    semantic['Danger/dangerBorder'] = functions.createBorder(semantic['Danger/danger'], 'auto', 'normal');

    /*
        INFO
    */
    semantic['Info/info'] = core['Core/Neutral--600'];
    // OnInfo
    semantic['Info/onInfo'] = functions.createOnColor(semantic['Info/info']);
    semantic['Info/onInfo--hover'] = functions.createOnColorState(
        semantic['Info/info'],
        semantic['Info/onInfo'],
        'hover',
        'auto',
        'auto'
    );
    semantic['Info/onInfo--active'] = functions.createOnColorState(
        semantic['Info/info'],
        semantic['Info/onInfo'],
        'active',
        'auto',
        'auto'
    );
    semantic['Info/onInfo_weaker'] = functions.createOnWeakerColor(semantic['Info/info'], semantic['Info/onInfo']);
    semantic['Info/onInfo_weaker--hover'] = functions.createOnColorState(
        semantic['Info/info'],
        semantic['Info/onInfo_weaker'],
        'hover',
        'auto',
        'auto'
    );
    semantic['Info/onInfo_weaker--active'] = functions.createOnColorState(
        semantic['Info/info'],
        semantic['Info/onInfo_weaker'],
        'active',
        'auto',
        'auto'
    );
    // INFO Background states
    semantic['Info/info--hover'] = functions.createColorState(
        semantic['Info/info'],
        semantic['Info/onInfo'],
        'hover',
        'auto',
        'auto'
    );
    semantic['Info/info--active'] = functions.createColorState(
        semantic['Info/info'],
        semantic['Info/onInfo'],
        'active',
        'auto',
        'auto'
    );
    // INFO Border
    semantic['Info/infoBorder'] = functions.createBorder(semantic['Info/info'], 'auto', 'normal');

    // Bet indicators
    /*
        BETWON
    */
    semantic['BetWon/betWon'] = semantic['Success/success'];
    // OnBetWon
    semantic['BetWon/onBetWon'] = functions.createOnColor(semantic['BetWon/betWon']);
    semantic['BetWon/onBetWon--hover'] = functions.createOnColorState(
        semantic['BetWon/betWon'],
        semantic['BetWon/onBetWon'],
        'hover',
        'auto',
        'auto'
    );
    semantic['BetWon/onBetWon--active'] = functions.createOnColorState(
        semantic['BetWon/betWon'],
        semantic['BetWon/onBetWon'],
        'active',
        'auto',
        'auto'
    );
    semantic['BetWon/onBetWon_weaker'] = functions.createOnWeakerColor(
        semantic['BetWon/betWon'],
        semantic['BetWon/onBetWon']
    );
    semantic['BetWon/onBetWon_weaker--hover'] = functions.createOnColorState(
        semantic['BetWon/betWon'],
        semantic['BetWon/onBetWon_weaker'],
        'hover',
        'auto',
        'auto'
    );
    semantic['BetWon/onBetWon_weaker--active'] = functions.createOnColorState(
        semantic['BetWon/betWon'],
        semantic['BetWon/onBetWon_weaker'],
        'active',
        'auto',
        'auto'
    );
    // Bet Won Background states
    semantic['BetWon/betWon--hover'] = functions.createColorState(
        semantic['BetWon/betWon'],
        semantic['BetWon/onBetWon'],
        'hover',
        'auto',
        'auto'
    );
    semantic['BetWon/betWon--active'] = functions.createColorState(
        semantic['BetWon/betWon'],
        semantic['BetWon/onBetWon'],
        'active',
        'auto',
        'auto'
    );
    // Bet Won Border
    semantic['BetWon/betWonBorder'] = functions.createBorder(semantic['BetWon/betWon'], 'auto', 'normal');

    /*
        BETOPEN
    */
    semantic['BetOpen/betOpen'] = semantic['Warning/warning'];
    // OnBetOpen
    semantic['BetOpen/onBetOpen'] = functions.createOnColor(semantic['BetOpen/betOpen']);
    semantic['BetOpen/onBetOpen--hover'] = functions.createOnColorState(
        semantic['BetOpen/betOpen'],
        semantic['BetOpen/onBetOpen'],
        'hover',
        'auto',
        'auto'
    );
    semantic['BetOpen/onBetOpen--active'] = functions.createOnColorState(
        semantic['BetOpen/betOpen'],
        semantic['BetOpen/onBetOpen'],
        'active',
        'auto',
        'auto'
    );
    semantic['BetOpen/onBetOpen_weaker'] = functions.createOnWeakerColor(
        semantic['BetOpen/betOpen'],
        semantic['BetOpen/onBetOpen']
    );
    semantic['BetOpen/onBetOpen_weaker--hover'] = functions.createOnColorState(
        semantic['BetOpen/betOpen'],
        semantic['BetOpen/onBetOpen_weaker'],
        'hover',
        'auto',
        'auto'
    );
    semantic['BetOpen/onBetOpen_weaker--active'] = functions.createOnColorState(
        semantic['BetOpen/betOpen'],
        semantic['BetOpen/onBetOpen_weaker'],
        'active',
        'auto',
        'auto'
    );
    // Bet Open Background states
    semantic['BetOpen/betOpen--hover'] = functions.createColorState(
        semantic['BetOpen/betOpen'],
        semantic['BetOpen/onBetOpen'],
        'hover',
        'auto',
        'auto'
    );
    semantic['BetOpen/betOpen--active'] = functions.createColorState(
        semantic['BetOpen/betOpen'],
        semantic['BetOpen/onBetOpen'],
        'active',
        'auto',
        'auto'
    );
    // Bet Open Border
    semantic['BetOpen/betOpenBorder'] = functions.createBorder(semantic['BetOpen/betOpen'], 'auto', 'normal');

    /*
        BETLOST
    */
    semantic['BetLost/betLost'] = semantic['Danger/danger'];
    // OnBetLost
    semantic['BetLost/onBetLost'] = functions.createOnColor(semantic['BetLost/betLost']);
    semantic['BetLost/onBetLost--hover'] = functions.createOnColorState(
        semantic['BetLost/betLost'],
        semantic['BetLost/onBetLost'],
        'hover',
        'auto',
        'auto'
    );
    semantic['BetLost/onBetLost--active'] = functions.createOnColorState(
        semantic['BetLost/betLost'],
        semantic['BetLost/onBetLost'],
        'active',
        'auto',
        'auto'
    );
    semantic['BetLost/onBetLost_weaker'] = functions.createOnWeakerColor(
        semantic['BetLost/betLost'],
        semantic['BetLost/onBetLost']
    );
    semantic['BetLost/onBetLost_weaker--hover'] = functions.createOnColorState(
        semantic['BetLost/betLost'],
        semantic['BetLost/onBetLost_weaker'],
        'hover',
        'auto',
        'auto'
    );
    semantic['BetLost/onBetLost_weaker--active'] = functions.createOnColorState(
        semantic['BetLost/betLost'],
        semantic['BetLost/onBetLost_weaker'],
        'active',
        'auto',
        'auto'
    );
    // Bet Lost Background states
    semantic['BetLost/betLost--hover'] = functions.createColorState(
        semantic['BetLost/betLost'],
        semantic['BetLost/onBetLost'],
        'hover',
        'auto',
        'auto'
    );
    semantic['BetLost/betLost--active'] = functions.createColorState(
        semantic['BetLost/betLost'],
        semantic['BetLost/onBetLost'],
        'active',
        'auto',
        'auto'
    );
    // Bet Lost Border
    semantic['BetLost/betLostBorder'] = functions.createBorder(semantic['BetLost/betLost'], 'auto', 'normal');

    /*
        BETVOID
    */
    semantic['BetVoid/betVoid'] = semantic['Info/info'];
    // OnBetVoid
    semantic['BetVoid/onBetVoid'] = functions.createOnColor(semantic['BetVoid/betVoid']);
    semantic['BetVoid/onBetVoid--hover'] = functions.createOnColorState(
        semantic['BetVoid/betVoid'],
        semantic['BetVoid/onBetVoid'],
        'hover',
        'auto',
        'auto'
    );
    semantic['BetVoid/onBetVoid--active'] = functions.createOnColorState(
        semantic['BetVoid/betVoid'],
        semantic['BetVoid/onBetVoid'],
        'active',
        'auto',
        'auto'
    );
    semantic['BetVoid/onBetVoid_weaker'] = functions.createOnWeakerColor(
        semantic['BetVoid/betVoid'],
        semantic['BetVoid/onBetVoid']
    );
    semantic['BetVoid/onBetVoid_weaker--hover'] = functions.createOnColorState(
        semantic['BetVoid/betVoid'],
        semantic['BetVoid/onBetVoid_weaker'],
        'hover',
        'auto',
        'auto'
    );
    semantic['BetVoid/onBetVoid_weaker--active'] = functions.createOnColorState(
        semantic['BetVoid/betVoid'],
        semantic['BetVoid/onBetVoid_weaker'],
        'active',
        'auto',
        'auto'
    );
    // BetVoid Background states
    semantic['BetVoid/betVoid--hover'] = functions.createColorState(
        semantic['BetVoid/betVoid'],
        semantic['BetVoid/onBetVoid'],
        'hover',
        'auto',
        'auto'
    );
    semantic['BetVoid/betVoid--active'] = functions.createColorState(
        semantic['BetVoid/betVoid'],
        semantic['BetVoid/onBetVoid'],
        'active',
        'auto',
        'auto'
    );
    // BetVoid Border
    semantic['BetVoid/betVoidBorder'] = functions.createBorder(semantic['BetVoid/betVoid'], 'auto', 'normal');

    /*
        CASHOUT
    */
    semantic['CashOut/cashOut'] = semantic['Transaction/transaction'];
    // OnCashOut
    semantic['CashOut/onCashOut'] = functions.createOnColor(semantic['CashOut/cashOut']);
    semantic['CashOut/onCashOut--hover'] = functions.createOnColorState(
        semantic['CashOut/cashOut'],
        semantic['CashOut/onCashOut'],
        'hover',
        'auto',
        'auto'
    );
    semantic['CashOut/onCashOut--active'] = functions.createOnColorState(
        semantic['CashOut/cashOut'],
        semantic['CashOut/onCashOut'],
        'active',
        'auto',
        'auto'
    );
    semantic['CashOut/onCashOut_weaker'] = functions.createOnWeakerColor(
        semantic['CashOut/cashOut'],
        semantic['CashOut/onCashOut']
    );
    semantic['CashOut/onCashOut_weaker--hover'] = functions.createOnColorState(
        semantic['CashOut/cashOut'],
        semantic['CashOut/onCashOut_weaker'],
        'hover',
        'auto',
        'auto'
    );
    semantic['CashOut/onCashOut_weaker--active'] = functions.createOnColorState(
        semantic['CashOut/cashOut'],
        semantic['CashOut/onCashOut_weaker'],
        'active',
        'auto',
        'auto'
    );
    // CashOut Background states
    semantic['CashOut/cashOut--hover'] = functions.createColorState(
        semantic['CashOut/cashOut'],
        semantic['CashOut/onCashOut'],
        'hover',
        'auto',
        'auto'
    );
    semantic['CashOut/cashOut--active'] = functions.createColorState(
        semantic['CashOut/cashOut'],
        semantic['CashOut/onCashOut'],
        'active',
        'auto',
        'auto'
    );

    // CashOut Border
    semantic['CashOut/cashOutBorder'] = functions.createBorder(semantic['CashOut/cashOut'], 'auto', 'normal');

    /*
        ODDSBOOST
    */
    semantic['OddsBoost/oddsBoost'] = '#00C1DE';
    // OnOddsBoost
    semantic['OddsBoost/onOddsBoost'] = functions.createOnColor(semantic['OddsBoost/oddsBoost']);
    semantic['OddsBoost/onOddsBoost--hover'] = functions.createOnColorState(
        semantic['OddsBoost/oddsBoost'],
        semantic['OddsBoost/onOddsBoost'],
        'hover',
        'auto',
        'auto'
    );
    semantic['OddsBoost/onOddsBoost--active'] = functions.createOnColorState(
        semantic['OddsBoost/oddsBoost'],
        semantic['OddsBoost/onOddsBoost'],
        'active',
        'auto',
        'auto'
    );
    semantic['OddsBoost/onOddsBoost_weaker'] = functions.createOnWeakerColor(
        semantic['OddsBoost/oddsBoost'],
        semantic['OddsBoost/onOddsBoost']
    );
    semantic['OddsBoost/onOddsBoost_weaker--hover'] = functions.createOnColorState(
        semantic['OddsBoost/oddsBoost'],
        semantic['OddsBoost/onOddsBoost_weaker'],
        'hover',
        'auto',
        'auto'
    );
    semantic['OddsBoost/onOddsBoost_weaker--active'] = functions.createOnColorState(
        semantic['OddsBoost/oddsBoost'],
        semantic['OddsBoost/onOddsBoost_weaker'],
        'active',
        'auto',
        'auto'
    );
    // OddsBoost Background states
    semantic['OddsBoost/oddsBoost--hover'] = functions.createColorState(
        semantic['OddsBoost/oddsBoost'],
        semantic['OddsBoost/onOddsBoost'],
        'hover',
        'auto',
        'auto'
    );
    semantic['OddsBoost/oddsBoost--active'] = functions.createColorState(
        semantic['OddsBoost/oddsBoost'],
        semantic['OddsBoost/onOddsBoost'],
        'active',
        'auto',
        'auto'
    );

    // OddsBoost Border
    semantic['OddsBoost/oddsBoostBorder'] = functions.createBorder(semantic['OddsBoost/oddsBoost'], 'auto', 'normal');

    /*
        PRICEBOOST
    */
    semantic['PriceBoost/priceBoost'] = '#00C1DE';
    // OnPriceBoost
    semantic['PriceBoost/onPriceBoost'] = functions.createOnColor(semantic['PriceBoost/priceBoost']);
    semantic['PriceBoost/onPriceBoost--hover'] = functions.createOnColorState(
        semantic['PriceBoost/priceBoost'],
        semantic['PriceBoost/onPriceBoost'],
        'hover',
        'auto',
        'auto'
    );
    semantic['PriceBoost/onPriceBoost--active'] = functions.createOnColorState(
        semantic['PriceBoost/priceBoost'],
        semantic['PriceBoost/onPriceBoost'],
        'active',
        'auto',
        'auto'
    );
    semantic['PriceBoost/onPriceBoost_weaker'] = functions.createOnWeakerColor(
        semantic['PriceBoost/priceBoost'],
        semantic['PriceBoost/onPriceBoost']
    );
    semantic['PriceBoost/onPriceBoost_weaker--hover'] = functions.createOnColorState(
        semantic['PriceBoost/priceBoost'],
        semantic['PriceBoost/onPriceBoost_weaker'],
        'hover',
        'auto',
        'auto'
    );
    semantic['PriceBoost/onPriceBoost_weaker--active'] = functions.createOnColorState(
        semantic['PriceBoost/priceBoost'],
        semantic['PriceBoost/onPriceBoost_weaker'],
        'active',
        'auto',
        'auto'
    );
    // PriceBoost Background states
    semantic['PriceBoost/priceBoost--hover'] = functions.createColorState(
        semantic['PriceBoost/priceBoost'],
        semantic['PriceBoost/onPriceBoost'],
        'hover',
        'auto',
        'auto'
    );
    semantic['PriceBoost/priceBoost--active'] = functions.createColorState(
        semantic['PriceBoost/priceBoost'],
        semantic['PriceBoost/onPriceBoost'],
        'active',
        'auto',
        'auto'
    );

    // PriceBoost Border
    semantic['PriceBoost/priceBoostBorder'] = functions.createBorder(
        semantic['PriceBoost/priceBoost'],
        'auto',
        'normal'
    );

    /*
        EACHWAY
    */
    semantic['EachWay/eachWay'] = '#C93D79';
    // OnEachWay
    semantic['EachWay/onEachWay'] = functions.createOnColor(semantic['EachWay/eachWay']);
    semantic['EachWay/onEachWay--hover'] = functions.createOnColorState(
        semantic['EachWay/eachWay'],
        semantic['EachWay/onEachWay'],
        'hover',
        'auto',
        'auto'
    );
    semantic['EachWay/onEachWay--active'] = functions.createOnColorState(
        semantic['EachWay/eachWay'],
        semantic['EachWay/onEachWay'],
        'active',
        'auto',
        'auto'
    );
    semantic['EachWay/onEachWay_weaker'] = functions.createOnWeakerColor(
        semantic['EachWay/eachWay'],
        semantic['EachWay/onEachWay']
    );
    semantic['EachWay/onEachWay_weaker--hover'] = functions.createOnColorState(
        semantic['EachWay/eachWay'],
        semantic['EachWay/onEachWay_weaker'],
        'hover',
        'auto',
        'auto'
    );
    semantic['EachWay/onEachWay_weaker--active'] = functions.createOnColorState(
        semantic['EachWay/eachWay'],
        semantic['EachWay/onEachWay_weaker'],
        'active',
        'auto',
        'auto'
    );
    // EachWay Background states
    semantic['EachWay/eachWay--hover'] = functions.createColorState(
        semantic['EachWay/eachWay'],
        semantic['EachWay/onEachWay'],
        'hover',
        'auto',
        'auto'
    );
    semantic['EachWay/eachWay--active'] = functions.createColorState(
        semantic['EachWay/eachWay'],
        semantic['EachWay/onEachWay'],
        'active',
        'auto',
        'auto'
    );
    // EachWay Border
    semantic['EachWay/eachWayBorder'] = functions.createBorder(semantic['EachWay/eachWay'], 'auto', 'normal');

    /*
        TEASERPLUS
    */
    semantic['TeaserPlus/teaserPlus'] = '#C93D79';
    // OnTeaserPlus
    semantic['TeaserPlus/onTeaserPlus'] = functions.createOnColor(semantic['TeaserPlus/teaserPlus']);
    semantic['TeaserPlus/onTeaserPlus--hover'] = functions.createOnColorState(
        semantic['TeaserPlus/teaserPlus'],
        semantic['TeaserPlus/onTeaserPlus'],
        'hover',
        'auto',
        'auto'
    );
    semantic['TeaserPlus/onTeaserPlus--active'] = functions.createOnColorState(
        semantic['TeaserPlus/teaserPlus'],
        semantic['TeaserPlus/onTeaserPlus'],
        'active',
        'auto',
        'auto'
    );
    semantic['TeaserPlus/onTeaserPlus_weaker'] = functions.createOnWeakerColor(
        semantic['TeaserPlus/teaserPlus'],
        semantic['TeaserPlus/onTeaserPlus']
    );
    semantic['TeaserPlus/onTeaserPlus_weaker--hover'] = functions.createOnColorState(
        semantic['TeaserPlus/teaserPlus'],
        semantic['TeaserPlus/onTeaserPlus_weaker'],
        'hover',
        'auto',
        'auto'
    );
    semantic['TeaserPlus/onTeaserPlus_weaker--active'] = functions.createOnColorState(
        semantic['TeaserPlus/teaserPlus'],
        semantic['TeaserPlus/onTeaserPlus_weaker'],
        'active',
        'auto',
        'auto'
    );
    // Background states
    semantic['TeaserPlus/teaserPlus--hover'] = functions.createColorState(
        semantic['TeaserPlus/teaserPlus'],
        semantic['TeaserPlus/onTeaserPlus'],
        'hover',
        'auto',
        'auto'
    );
    semantic['TeaserPlus/teaserPlus--active'] = functions.createColorState(
        semantic['TeaserPlus/teaserPlus'],
        semantic['TeaserPlus/onTeaserPlus'],
        'active',
        'auto',
        'auto'
    );
    // Border
    semantic['TeaserPlus/teaserPlusBorder'] = functions.createBorder(
        semantic['TeaserPlus/teaserPlus'],
        'auto',
        'normal'
    );

    /*
        LIVE
    */
    semantic['Live/live'] = '#ED1c34';
    // OnLive
    semantic['Live/onLive'] = functions.createOnColor(semantic['Live/live']);
    semantic['Live/onLive--hover'] = functions.createOnColorState(
        semantic['Live/live'],
        semantic['Live/onLive'],
        'hover',
        'auto',
        'auto'
    );
    semantic['Live/onLive--active'] = functions.createOnColorState(
        semantic['Live/live'],
        semantic['Live/onLive'],
        'active',
        'auto',
        'auto'
    );
    semantic['Live/onLive_weaker'] = functions.createOnWeakerColor(semantic['Live/live'], semantic['Live/onLive']);
    semantic['Live/onLive_weaker--hover'] = functions.createOnColorState(
        semantic['Live/live'],
        semantic['Live/onLive_weaker'],
        'hover',
        'auto',
        'auto'
    );
    semantic['Live/onLive_weaker--active'] = functions.createOnColorState(
        semantic['Live/live'],
        semantic['Live/onLive_weaker'],
        'active',
        'auto',
        'auto'
    );
    // Background states
    semantic['Live/live--hover'] = functions.createColorState(
        semantic['Live/live'],
        semantic['Live/onLive'],
        'hover',
        'auto',
        'auto'
    );
    semantic['Live/live--active'] = functions.createColorState(
        semantic['Live/live'],
        semantic['Live/onLive'],
        'active',
        'auto',
        'auto'
    );
    // Border
    semantic['Live/liveBorder'] = functions.createBorder(semantic['Live/live'], 'auto', 'normal');

    /*
        SGP
    */
    semantic['SGP/SGP'] = '#FFA300';
    // OnSGP
    semantic['SGP/onSGP'] = '#000';
    semantic['SGP/onSGP--hover'] = functions.createOnColorState(
        semantic['SGP/SGP'],
        semantic['SGP/onSGP'],
        'hover',
        'auto',
        'auto'
    );
    semantic['SGP/onSGP--active'] = functions.createOnColorState(
        semantic['SGP/SGP'],
        semantic['SGP/onSGP'],
        'active',
        'auto',
        'auto'
    );
    semantic['SGP/onSGP_weaker'] = functions.createOnWeakerColor(semantic['SGP/SGP'], semantic['SGP/onSGP']);
    semantic['SGP/onSGP_weaker--hover'] = functions.createOnColorState(
        semantic['SGP/SGP'],
        semantic['SGP/onSGP_weaker'],
        'hover',
        'auto',
        'auto'
    );
    semantic['SGP/onSGP_weaker--active'] = functions.createOnColorState(
        semantic['SGP/SGP'],
        semantic['SGP/onSGP_weaker'],
        'active',
        'auto',
        'auto'
    );
    // SGP Background states
    semantic['SGP/SGP--hover'] = functions.createColorState(
        semantic['SGP/SGP'],
        semantic['SGP/onSGP'],
        'hover',
        'auto',
        'auto'
    );
    semantic['SGP/SGP--active'] = functions.createColorState(
        semantic['SGP/SGP'],
        semantic['SGP/onSGP'],
        'active',
        'auto',
        'auto'
    );
    // SGP Border
    semantic['SGP/SGPBorder'] = functions.createBorder(semantic['SGP/SGP'], 'auto', 'normal');

    // Disabled
    // Check against surface, decide if main disabled is black or white
    if (Color(semantic['Surface/surface']).isLight()) {
        semantic['Disabled/disabled'] = 'rgba(0, 0, 0, 0.12)';
        semantic['Disabled/onDisabled'] = 'rgba(0, 0, 0, 0.16)';
        semantic['DisabledAlt/disabledAlt'] = 'rgba(255, 255, 255, 0.12)';
        semantic['DisabledAlt/onDisabledAlt'] = 'rgba(255, 255, 255, 0.30)';
    } else {
        semantic['Disabled/disabled'] = 'rgba(255, 255, 255, 0.12)';
        semantic['Disabled/onDisabled'] = 'rgba(255, 255, 255, 0.30)';
        semantic['DisabledAlt/disabledAlt'] = 'rgba(0, 0, 0, 0.12)';
        semantic['DisabledAlt/onDisabledAlt'] = 'rgba(0, 0, 0, 0.16)';
    }

    return {
        ...semantic,
        // ...custom,
        // ...core,
        // ...dividingLine,
    };
};
