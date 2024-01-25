const contrastColorThreshold = '0.16'; // used when checking contrast for (background) color to go darker or lighter
const contrastOnColorThreshold = '0.43'; // used when checking contrast for on-color to go darker or lighter

const StateIntensityMinimal = 2;
const StateIntensitySubtle = 4; // normally used for really light tones
const StateIntensityNormal = 10; // normally used for mid tones
const StateIntensityIntense = 16; // normally used for dark tones

// Alpha scales - to use with both dark and light colors
const DarkAlpha900 = 87;
const DarkAlpha700 = 56;
const DarkAlpha500 = 36;
const DarkAlpha300 = 24;
const DarkAlpha200 = 12;
const DarkAlpha100 = 8;
const DarkAlpha50 = 4;

const LightAlpha900 = 100;
const LightAlpha700 = 70;
const LightAlpha500 = 40;
const LightAlpha300 = 24;
const LightAlpha100 = 12;
const LightAlpha50 = 4;

module.exports = {
    contrastColorThreshold: contrastColorThreshold,
    StateIntensityMinimal: StateIntensityMinimal,
    contrastOnColorThreshold: contrastOnColorThreshold,
    StateIntensitySubtle: StateIntensitySubtle,
    StateIntensityNormal: StateIntensityNormal,
    StateIntensityIntense: StateIntensityIntense,
    DarkAlpha900: DarkAlpha900,
    DarkAlpha700: DarkAlpha700,
    DarkAlpha500: DarkAlpha500,
    DarkAlpha300: DarkAlpha300,
    DarkAlpha200: DarkAlpha200,
    DarkAlpha100: DarkAlpha100,
    DarkAlpha50: DarkAlpha50,
    LightAlpha900: LightAlpha900,
    LightAlpha700: LightAlpha700,
    LightAlpha500: LightAlpha500,
    LightAlpha300: LightAlpha300,
    LightAlpha100: LightAlpha100,
    LightAlpha50: LightAlpha50,
};
