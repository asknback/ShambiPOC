//     type Theme = string;
    
//     type AdditionalValue = string | undefined;
// type OnThemeFunction = () => any; // Adjust the return type as needed

// interface Semantic {
//     [key: string]: {
//         theme: Theme;
//         onTheme: [OnThemeFunction, AdditionalValue];
//     };
// }

// function updateSemantic(key: string, theme: Theme, onThemeFunction: OnThemeFunction, additionalValue?: string): void {
//     if (!semantic[key]) {
//         semantic[key] = { theme: theme, onTheme: [onThemeFunction, additionalValue] };
//     } else {
//         const current = semantic[key];
//         current.onTheme[0] = onThemeFunction;
//         if (additionalValue !== undefined) {
//             current.onTheme[1] = additionalValue;
//         }
//     }
// }

// const semantic: Semantic = {};

// // Define themes as simple strings
// const baseTheme: Theme = "LightTheme";

// // Update with different functions and themes
// updateSemantic(
//     'Theme/themeOnWeaker', 
//     baseTheme, 
//     () => functions.createOnWeakerColor(semantic['Theme/theme'], semantic['Theme/onTheme']), 
//     '#fff'
// );

// updateSemantic(
//     'Theme/themeOn', 
//     baseTheme, 
//     () => functions.createOnColor(semantic['Theme/theme']), 
//     '#fff'
// );