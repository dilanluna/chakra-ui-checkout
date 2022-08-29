import {
  extendTheme,
  theme as base,
  withDefaultColorScheme,
  withDefaultVariant,
} from '@chakra-ui/react';

const theme = extendTheme(
  {
    colors: {
      brand: {
        50: '#f5vee5',
        100: '#e1fbb2',
        200: '#cdf781',
        300: '#b8ee56',
        400: '#a2e032',
        500: '#8ac919',
        600: '#71ab09',
        700: '#578602',
        800: '#3c5e00',
        900: '#202200',
      },
    },
    fonts: {
      body: `Inter, ${base.fonts.body}`,
      heading: `Montserrat, ${base.fonts.heading}`,
    },
  },
  withDefaultColorScheme({
    colorScheme: 'brand',
    components: ['Checkbox'],
  }),
  withDefaultVariant({
    variant: 'filled',
    components: ['Input', 'Select'],
  }),
);

export default theme;