import * as constants from './constants';
import Color from 'tinycolor2';

// Helper functions
const checkAlpha = (color) => {
    if (Color(color).getAlpha() < 1) {
        return Color(color).toRgbString();
    } else {
        return Color(color).toHexString();
    }
};
const getHsl = (color) => {
    return Color(color).toHsl();
};
// Check colour state intensity
const checkColorStateIntensity = (color, state, intensity) => {
    const colorLuma = Color(color).getLuminance();

    const intensities = {
        auto: (luma) => {
            if (luma >= 0.9) return constants.StateIntensityMinimal;
            if (luma >= 0.8) return constants.StateIntensitySubtle;
            if (luma > 0.4) return constants.StateIntensityNormal;
            return constants.StateIntensityIntense;
        },
        minimal: constants.StateIntensityMinimal,
        subtle: constants.StateIntensitySubtle,
        normal: constants.StateIntensityNormal,
        intense: constants.StateIntensityIntense,
    };

    let intensityCheck =
        typeof intensities[intensity] === 'function' ? intensities[intensity](colorLuma) : intensities[intensity];

    // console.log('Selected Intensity: ', intensityCheck);

    const colorHover = intensityCheck;
    const colorActive = colorHover + Math.floor(colorHover / 2);

    return state === 'hover' ? colorHover : colorActive;
};
// Check colour state intensity
// const checkColorStateIntensity = (color, state, intensity) => {
//     const colorLuma = Color(color).getLuminance();
//     let intensityCheck;

//     if (intensity == 'auto' && colorLuma >= 0.8) {
//         console.log('Auto Subtle ', constants.StateIntensitySubtle);
//         intensityCheck = constants.StateIntensitySubtle;
//     }
//     if (intensity == 'auto' && colorLuma > 0.4) {
//         console.log('Auto Normal ', constants.StateIntensityNormal);
//         intensityCheck = constants.StateIntensityNormal;
//     }
//     if (intensity == 'auto' && colorLuma <= 0.4) {
//         console.log('Auto Intense ', constants.StateIntensityIntense);
//         intensityCheck = constants.StateIntensityIntense;
//     }
//     if (intensity == 'minimal') {
//         console.log('minimum ', constants.StateIntensityMinimal);
//         intensityCheck = constants.StateIntensityMinimal;
//     }
//     if (intensity == 'subtle') {
//         console.log('subtle ', constants.StateIntensitySubtle);
//         intensityCheck = constants.StateIntensitySubtle;
//     }
//     if (intensity == 'normal') {
//         console.log('normal ', constants.StateIntensityNormal);
//         intensityCheck = constants.StateIntensityNormal;
//     }
//     if (intensity == 'intense') {
//         console.log('intense ', constants.StateIntensityIntense);
//         intensityCheck = constants.StateIntensityIntense;
//     }

//     const colorHover = intensityCheck;
//     const colorActive = colorHover + Math.floor(colorHover / 2);

//     if (state == 'hover') {
//         // console.log('State hover: ', colorHover);
//         return colorHover;
//     } else {
//         // console.log('State active: ', colorActive);
//         return colorActive;
//     }
// };
// check darken or lighten
const checkDarkenOrLighten = (color, lightenDarken) => {
    let lightnessCheck;
    if (lightenDarken == 'auto') {
        if (Color(color).getLuminance() > constants.contrastColorThreshold) {
            lightnessCheck = 'darken';
        } else {
            lightnessCheck = 'lighten';
        }
    }
    if (lightenDarken == 'darken') {
        lightnessCheck = 'darken';
    }
    if (lightenDarken == 'lighten') {
        lightnessCheck = 'lighten';
    }
    // console.log('Lightness Check: ', lightnessCheck);
    return lightnessCheck;
};

////////
// Check if color is dark or light
// This will return either "dark" or "light"
// If it's "auto" we check color against luma and @contrast-color-threshold
// Otherwise we just set it to the manually defined format
// @color-solid: can be any in any color format
// @lighten-darken: 'auto', 'dark', 'light',
const checkDarkOrLight = (color, lightDark) => {
    let lightnessCheck;
    if (lightDark == 'auto') {
        if (Color(color).getLuminance() > constants.contrastColorThreshold) {
            lightnessCheck = 'light';
        } else {
            lightnessCheck = 'dark';
        }
    }
    if (lightDark == 'dark') {
        lightnessCheck = 'dark';
    }
    if (lightDark == 'light') {
        lightnessCheck = 'light';
    }
    // console.log('BORDER LIGHT DARK CHECK: ', lightnessCheck);
    return lightnessCheck;
};

// Create light color
// Check if the color has a lower or higher saturation than 30%.
// If it's more than 30% we set it to always be 30%.
// Else if it's less than 30%, we keep the saturaion value intact
export function createLightColor(color) {
    const hsl = getHsl(color);
    const saturation = (hsl.s * 100).toFixed(1);
    // console.log('Saturation: ', saturation);

    if (saturation < 30) {
        // console.log('saturation is less than 30%');
        // console.log('NEW LIGHT COLOUR: ', Color({h: hsl.h, s: hsl.s, l: 0.9}).toHslString());
        return Color({h: hsl.h, s: hsl.s, l: 0.9}).toHexString();
    } else {
        // console.log('saturation is greater than 30%');
        return Color({h: hsl.h, s: 0.3, l: 0.9}).toHexString();
    }
}

// Create dark color
// First we check if its a neutral (white, gray or black) color (zero saturation) or not.
// If it's a neutral color we keep the saturation 0, otherwise set it to 100
export function createDarkColor(color) {
    const hsl = getHsl(color);
    const saturation = (hsl.s * 100).toFixed(1);
    // console.log('Create Dark Colour Saturation is: ', saturation);

    if (saturation == 0) {
        // console.log('saturation is 0');
        // console.log('Dark colour is: #', Color({h: hsl.h, s: 0, l: 0.12}).toHexString());
        return Color({h: hsl.h, s: 0, l: 0.12}).toHexString();
    } else {
        // console.log('saturation is not 0');
        // console.log('Dark colour is: #', Color({h: hsl.h, s: 1, l: 0.12}).toHexString());
        return Color({h: hsl.h, s: 1, l: 0.12}).toHexString();
    }
}

// Create disabled states
export function createDisabledColor(color, type) {
    return Color(color).setAlpha(0.12).toRgbString();
    // console.log('Should we desaturate? ', Color(color).toHsl());
    // const saturation = Color(color).toHsl();
    // if (saturation.s > 40) {
    //     return Color(color).desaturate(40).setAlpha(0.8).toRgbString();
    // } else {
    //     return Color(color).setAlpha(0.8).toRgbString();
    // }
}
export function createOnDisabled(onColor) {
    return Color(onColor).setAlpha(0.4).toRgbString();
}

////////
// Create ghost color
// Check if on-color is dark or light.
// If it's dark create a transparent based on white. And vice versa if it's light.
// Make sure we check against a solid color, otherwise it will include alpha in luma check.
// @light-dark: 'light', 'dark', 'auto'
export function createGhostColor(onColor, lightDark) {
    const solidColor = Color(onColor).toHexString();
    const isLightDark = checkDarkOrLight(solidColor, lightDark);

    if (isLightDark == 'dark') {
        return Color('#FFF').setAlpha(0).toRgbString();
    }
    if (isLightDark == 'light') {
        return Color('#000').setAlpha(0).toRgbString();
    }
}

// Create on-color
// Check if color is dark or light. If it's dark create a light on-color.
//And vice versa if it's light.
// Make sure we check against a solid color, otherwise it will include alpha in luma check.
export function createOnColor(color) {
    const solidColor = Color(color).toHexString();

    // console.log(
    //     'COLOUR LUMA ',
    //     Color(solidColor).getLuminance(),
    //     ' and threshold is ',
    //     constants.contrastOnColorThreshold
    // );

    if (Color(solidColor).getLuminance() > constants.contrastOnColorThreshold) {
        // 80 was darkAlpha900
        return Color.mix(color, '#000', 80).toHexString();
    } else {
        // 90 was lightAlpha900
        return Color.mix(color, '#FFF', 90).toHexString();
    }
}

// Create on-color WEAKER
// Check if color is dark or light.
// If it's dark create a darker variant of the on-color as the on-weaker. And vice versa if it's light.
export function createOnWeakerColor(color, onColor) {
    if (Color(onColor).getLuminance() > constants.contrastOnColorThreshold) {
        return checkAlpha(Color.mix(color, onColor, constants.LightAlpha700));
    } else {
        return checkAlpha(Color.mix(color, onColor, constants.DarkAlpha700));
    }
}

////////
// Create color states (hover & active)
// Check if @color is dark or light. Make sure we check against a solid color, otherwise it will include alpha in checks.
// Then if @color is black or white we use a function to create hover state mixed with the on-color
// If @color is colored we use normal darken or lighten to create the hover state.
// @color: can be any in any color format
// @on-color: can be any in any color format
// @state: 'hover' or 'active'
// @intensity: 'auto', 'subtle', 'normal', 'intense'
// @lighten-darken: 'lighten', 'darken', 'auto'
export function createColorState(color, onColor, state, intensity, lightenDarken) {
    const solidColor = Color(color).setAlpha(1).toHexString();
    const stateIntensity = checkColorStateIntensity(color, state, intensity);
    let tokenIntensity = constants.StateIntensitySubtle;
    if (intensity == 'minimal') {
        tokenIntensity = constants.StateIntensityMinimal;
        // console.log('token intensity: ', tokenIntensity);
    }
    // console.log('State intensity: ', stateIntensity);

    let isBlackOrWhite = false;
    if (solidColor == '#000000' || solidColor == '#ffffff') {
        isBlackOrWhite = true;
        // console.log('Is black or white', isBlackOrWhite);
    }

    if (isBlackOrWhite) {
        if (state == 'hover') {
            if (Color(color).getAlpha() < 1) {
                return Color.mix(color, onColor, tokenIntensity).toRgbString();
            } else {
                return Color.mix(color, onColor, tokenIntensity).toHexString();
            }
        }
        if (state == 'active') {
            if (Color(color).getAlpha() < 1) {
                return Color.mix(color, onColor, tokenIntensity + Math.floor(tokenIntensity / 2)).toRgbString();
            } else {
                return Color.mix(color, onColor, tokenIntensity + Math.floor(tokenIntensity / 2)).toHexString();
            }
        }
    } else {
        if (checkDarkenOrLighten(solidColor, lightenDarken) == 'lighten') {
            if (Color(color).getAlpha() < 1) {
                return Color(color).lighten(stateIntensity).toRgbString();
            } else {
                return Color(color).lighten(stateIntensity).toHexString();
            }
        } else {
            if (Color(color).getAlpha() < 1) {
                return Color(color).darken(stateIntensity).toRgbString();
            } else {
                return Color(color).darken(stateIntensity).toHexString();
            }
        }
    }
}

////////
// Create on-color states (hover & active)
// Check if @color is dark or light.
// If it's dark create a lighter on-color. And vice versa if it's light.
// Make sure we check against a solid color, otherwise it will include alpha in luma check.
export function createOnColorState(color, onColor, state, intensity, lightenDarken) {
    const solidColor = Color(color).toHex();
    const stateIntensity = checkColorStateIntensity(solidColor, state, intensity);
    if (Color(onColor).isDark()) {
        return Color.mix(onColor, '#000000', stateIntensity).toHexString();
    } else {
        return Color.mix(onColor, '#ffffff', stateIntensity).toHexString();
    }
}

// Create sandwich Row
export function createSandwichNewRow(color, lightenDarken) {
    if (checkDarkenOrLighten(color, lightenDarken) == 'darken') {
        return Color(color).darken(4).desaturate(10).toHexString();
    } else {
        return Color(color).lighten(4).desaturate(10).toHexString();
    }
}

// Create sandwich state
export function createSandwichState(color, state) {
    if (state == 'hover') {
        // 8
        return Color(color).setAlpha(0.12).toRgbString();
    }
    if (state == 'active') {
        // 16
        return Color(color).setAlpha(0.36).toRgbString();
    }
    if (state == 'selected') {
        // 12
        return Color(color).desaturate(30).lighten(16).toHexString();
    }
}

// Create scroll button
export function createScrollButton(color, state) {
    if (state == 'default') {
        return [
            `linear-gradient(0deg, ${Color(color).setAlpha(0.1).toRgbString()}), ${Color(color)
                .setAlpha(0.9)
                .toRgbString()}))`,
            Color(color).setAlpha(0.1).toRgbString(),
            Color(color).setAlpha(0.9).toRgbString(),
        ];
    }
    if (state == 'hover') {
        return [
            `linear-gradient(0deg, ${Color(color).darken(4).setAlpha(0.9).toRgbString()}), ${Color(color)
                .darken(4)
                .setAlpha(0.9)
                .toRgbString()}))`,
            Color(color).darken(4).setAlpha(0.9).toRgbString(),
            Color(color).darken(4).setAlpha(0.9).toRgbString(),
        ];
    }
    if (state == 'active') {
        return [
            `linear-gradient(0deg, ${Color(color).darken(4).setAlpha(1).toRgbString()}), ${Color(color)
                .darken(4)
                .setAlpha(1)
                .toRgbString()}))`,
            Color(color).darken(4).setAlpha(1).toRgbString(),
            Color(color).darken(4).setAlpha(1).toRgbString(),
        ];
    }
}

////////
// Create border color
// we will start to create an on-color, then check if this is light or dark and then apply a dark border if the on-color is dark and vice versa
// @color = the color you have as "background"
// @light-dark: 'light', 'dark', 'auto'
// @intensity: 'subtle', 'normal', 'intense'
export function createBorder(color, lightDark, intensity) {
    const bOnColor = createOnColor(Color(color).setAlpha(1).toHexString());
    const bLightDark = checkDarkOrLight(bOnColor, lightDark);

    // console.log('Border color', bLightDark);

    // Dark
    if (bLightDark == 'dark' && intensity == 'subtle') {
        return Color('#000')
            .setAlpha(constants.LightAlpha50 / 100)
            .toRgbString();
    }
    if (bLightDark == 'dark' && intensity == 'normal') {
        return Color('#000')
            .setAlpha(constants.LightAlpha100 / 100)
            .toRgbString();
    }
    if (bLightDark == 'dark' && intensity == 'intense') {
        return Color('#000')
            .setAlpha(constants.LightAlpha300 / 100)
            .toRgbString();
    }
    // Light
    if (bLightDark == 'light' && intensity == 'subtle') {
        return Color('#fff')
            .setAlpha(constants.DarkAlpha100 / 100)
            .toRgbString();
    }
    if (bLightDark == 'light' && intensity == 'normal') {
        return Color('#fff')
            .setAlpha(16 / 100)
            .toRgbString();
        //.setAlpha(constants.DarkAlpha300 / 100)
    }
    if (bLightDark == 'light' && intensity == 'intense') {
        return Color('#fff')
            .setAlpha(constants.DarkAlpha500 / 100)
            .toRgbString();
    }
}
