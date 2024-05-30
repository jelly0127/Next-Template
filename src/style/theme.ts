import { extendTheme } from '@chakra-ui/react';

export const colors = {
  brand: {
    primary: '#DAFF80',
    secondary: '#CDD9E3',
    tertiary: '#1C2730',
  },
  primary: {
    50: '#FDFFEF',
    100: '#F8FFCB',
    200: '#FBD38D',
    300: '#DAFF80',
    400: '#D2EC32',
    500: '#C5DF20',
    600: '#ACC220',
    700: '#8D9E20',
    800: '#738120',
    900: '#5E691A',
  },
  secondary: {
    50: '#F8FCFF',
    100: '#EDF2F7',
    200: '#E2E8F0',
    300: '#CDD9E3',
    400: '#A2B6C5',
    500: '#738999',
    600: '#34414B',
    700: '#2E3E4A',
    800: '#1C2730',
    900: '#1A2127',
    default: '#34414B',
  },
  green: {
    50: '#DDFFF3',
    100: 'B7FFE5',
    200: '#95FFD9',
    300: '#6FFFCB',
    400: '#37F7B2',
    500: '#26E09D',
    600: '#15CE8C',
    700: '#07AC71',
    800: '#066F49',
    900: '#05432D',
  },
  switch: {
    500: '#DCED71',
    200: '#DCED71',
  },
};

const sizes = {
  container: {
    xs: '340px',
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
  },
};

const theme = extendTheme({
  
  fonts: {
    heading: 'Gustavo',
    body: 'TWK Lausanne',
  },
  components: {
    Button: {
      baseStyle: {
        fontFamily: 'Clash Grotesk',
        textTransform: 'uppercase',
        borderRadius: '5px',
      },
      variants: {
        link: {
          color: 'white',
          fontSize: '16px',
          _hover: {
            color: colors.brand.primary,
            textDecoration: 'none',
          },
        },
        outline: {
          color: 'white',
          padding: '17px 23px',
          letterSpacing: '3px',
          fontSize: '12px',
          fontWeight: '600px',
          _hover: {
            color: colors.brand.primary,
            borderColor: colors.brand.primary,
            backgroundColor: 'initial',
          },
        },
        solid: {
          color: 'black',
          padding: '17px 23px',
          letterSpacing: '3px',
          fontSize: '12px',
          fontWeight: '600px',
          _hover: {
            backgroundColor: colors.brand.primary,
            opacity: 0.9,
          },
        },
      },
    },
    MenuButton: {
      variants: {
        outline: {
          color: 'black',
          fontWeight: 'semibold',
          borderRadius: '0px',
          borderColor: 'black',
          borderWidth: '1px',
          padding: '22px',
          _hover: {
            bg: '#5D5FEF',
            color: 'white',
            boxShadow: 'none',
          },
        },
      },
    },
    Modal: {
      baseStyle: {
        dialogContainer: {
          top: '0px',
          right: '0px',
          bottom: '0px',
          left: '0px',
        },
      },
    },
    Tag: {
      baseStyle: {
        borderRadius: '80px',
        fontFamily: 'Clash Grotesk',
        fontSize: '12px',
        fontWeight: '600px',
        textTransform: 'uppercase',
        padding: '13px 20px',
      },
    },
    Heading: {
      baseStyle: {
        color: 'white',
      },
    },
    Text: {
      baseStyle: {
        fontFamily: 'TWK Lausanne',
        color: 'white',
        lineHeight: '25px',
      },
    },
    Checkbox: {
      baseStyle: {
        control: {
          _checked: {
            bg: 'secondary.800',
            borderColor: 'secondary.800',
            _hover: {
              bg: 'secondary.800',
              borderColor: 'secondary.800',
            },
          },
        },
      },
    },
  },
  colors: colors,
  sizes: sizes,
  styles: {
    global: {
      body: {
        backgroundColor: colors.brand.secondary,
        color: colors.brand.tertiary,
      },
    },
  },
});

export { theme };
