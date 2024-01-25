export function updateTheme() {
    console.log('THEME COLOUR: ', themeTokens?.theme?.value);

    // Create Theme Pallet
    setThemeValue(['colors', 'pallet', 'theme', 'theme', 'value'], newColor);
    setThemeValue(['colors', 'pallet', 'theme', 'themeLight', 'value'], functions.createLightColor(newColor));
    setThemeValue(['colors', 'pallet', 'theme', 'themeDark', 'value'], functions.createDarkColor(newColor));
}
