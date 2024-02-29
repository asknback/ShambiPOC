import {toSolidPaint} from 'figx';
import Color from 'tinycolor2';

export function CreateLocalStyles(tokens) {

  const transformedObj = Object.fromEntries(
    Object.entries(tokens).map(([key, value]) => [key, value.color])
  );
  
  const styles = figma.getLocalPaintStyles();
  // console.log('UPDATING FIGMA STYLES');

  const paintStyles = styles.reduce((acc, curr) => {
      acc[curr.name] = curr.id;
      return acc;
  }, {}); // {'palette/foo': 'abc123'}

  Object.entries(transformedObj).forEach(([name, value]) => {
      const id = paintStyles[name];
      const paints = toSolidPaint(value);

      if (id) {
          // Set new value to the Figma Style
          const figmaStyle = figma.getStyleById(id);

          if (figmaStyle.paints[0].type == 'SOLID') {
              figmaStyle.paints = [paints];
          }
          if (figmaStyle.paints[0].type == 'GRADIENT_LINEAR') {
              const newStyle = clone(figmaStyle.paints);
              console.log('Setting new styles for gradient paints: ', newStyle);
              const stopOne = Color(value[1]).toRgb();
              const stopTwo = Color(value[2]).toRgb();
              console.log("Finished setting up, trying to 'paint'");

              newStyle[0]['gradientStops'][0].color.r = stopOne.r / 255;
              newStyle[0]['gradientStops'][0].color.g = stopOne.g / 255;
              newStyle[0]['gradientStops'][0].color.b = stopOne.b / 255;
              newStyle[0]['gradientStops'][0].color.a = stopOne.a;
              newStyle[0]['gradientStops'][1].color.r = stopTwo.r / 255;
              newStyle[0]['gradientStops'][1].color.g = stopTwo.g / 255;
              newStyle[0]['gradientStops'][1].color.b = stopTwo.b / 255;
              newStyle[0]['gradientStops'][1].color.a = stopTwo.a;

              figmaStyle.paints = newStyle;
          }
      } else {
          const newStyle = figma.createPaintStyle();
          newStyle.name = name;
          newStyle.paints = [paints];
          console.log('NEW TOKEN: ', name, ': ', value);
      }
  });
}