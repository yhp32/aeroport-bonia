const theme = {
  breakpoints: ['576px', '768px', '992px', '1200px', '1400px', '1600px'],
  space: [0, 2, 4, 8, 12, 16, 32, 64, 128, 256, 512],
  fonts: {
    body: '"Acumin", sans-serif',
    heading: '"Acumin", sans-serif'
  },
  fontWeights: {
    body: 400,
    heading: 500,
    bold: 700
  },
  fontSizes: [10, 12, 14, 16, 18, 20, 24, 28, 32],
  lineHeights: {
    body: 1.5,
    heading: 1.2,
    button: 1.25
  },
  letterSpacings: {
    body: 1,
    heading: 2
  },
  colors: {
    greetingsBackground: '#f7946d',
    takeABiteBackground: '#adb7a5',
    departForWanderlandBackground: '#ff89af',
    armeriaBackground: '#53643c',
    ixoraBackground: '#f7946d',
    giannaBackground: '#6d617d',
    congratulationsBackground: '#f16152',
    departForWanderlandButton: '#f16152',
    armeriaButton: 'rgb(255,255,255,0.3)',
    armeriaMobileButton: '#53643c',
    ixoraButton: '#f16152',
    giannaButton: '#4b2865',
    yellowText: '#fff797',
    greeting: '#E6BAD9',
    primary: '#54527D',
    text: '#1F1F1F',
    button: '#54527D',
    social: '#A46E8E',
    socialButton: 'rgb(0,0,0,0.3)'
  },
  text: {
    default: {
      fontFamily: 'body',
      fontWeight: 'body',
      lineHeight: 'body',
      letterSpacing: 'body',
      fontSize: [12, 16]
    },
    body: {
      fontFamily: 'heading',
      fontWeight: 'heading',
      fontSize: [12, 14]
    },
    h1: {
      fontFamily: 'heading',
      fontWeight: 'bold',
      lineHeight: 'heading',
      letterSpacing: 'heading',
      textTransform: 'uppercase',
      fontSize: [16, 20]
    },
    h1Italic: {
      variant: 'text.h1',
      fontStyle: 'italic',
      letterSpacing: '0.01em'
    },
    h2: {
      fontFamily: 'heading',
      fontWeight: 'bold',
      lineHeight: 'button',
      letterSpacing: 'heading',
      textTransform: 'uppercase',
      fontSize: [12, 18]
    },
    h2Italic: {
      variant: 'text.h2',
      fontStyle: 'italic',
      letterSpacing: '0.01em'
    },
    form: {
      fontFamily: 'body',
      fontWeight: 'body',
      fontSize: [12, 16]
    },
    captions: {
      fontFamily: 'body',
      fontWeight: 'body',
      fontSize: [10, 12]
    },
    buttons: {
      fontFamily: 'heading',
      fontWeight: 'bold',
      fontSize: [12, 24]
    },
    hud: {
      fontFamily: 'body',
      fontWeight: 'heading',
      fontSizes: [20, 20]
    },
    ps: {
      fontFamily: 'body',
      fontWeight: 'body',
      fontSize: ['10px', '12px'],
      lineHeights: 1.2,
      letterSpacing: 0.7
    },
    disclaimer: {
      fontFamily: 'body',
      fontWeight: 'body',
      fontSize: ['7px', '9px'],
      lineHeights: 1.125,
      letterSpacing: 0.63,
      color: '#6B6B6B'
    },
    link: {
      fontFamily: 'body',
      fontWeight: 'body',
      fontSize: ['12px', '12px'],
      lineHeights: 1.2,
      letterSpacing: 0.5,
      color: 'black'
    },
    greeting: {
      fontFamily: 'heading',
      fontWeight: 'body',
      fontSize: ['8px', '10px'],
      lineHeights: [1.5, 1.4],
      letterSpacing: [1, 1.5],
      whiteSpace: 'break-spaces',
      textTransform: 'uppercase'
    }
  },
  buttons: {
    primary: {
      color: 'white',
      fontFamily: 'body',
      fontWeight: 'body',
      lineHeight: 'button',
      fontSize: [14, 20],
      py: [12, 12],
      px: [16, 24],
      borderRadius: 40,
      '&:focus': {
        outline: 'none'
      },
      cursor: 'pointer'
    },
    rounded: {
      color: 'white',
      fontFamily: 'heading',
      fontWeight: 'bold',
      lineHeight: 'button',
      letterSpacing: 'heading',
      textTransform: 'uppercase',
      fontSize: [12, 14],
      height: [104, 144],
      width: [104, 144],
      borderRadius: '100%',
      '&:focus': {
        outline: 'none'
      },
      cursor: 'pointer'
    },
    social: {
      variant: 'buttons.rounded',
      height: [48, 64],
      width: [48, 64],
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    },
    form: {
      variant: 'buttons.primary',
      fontSize: ['12px', null, '14px', '16px', '18px', '20px'],
      backgroundColor: 'rgb(0,0,0,0.3)',
      transition: 'backgroundColor',
      ':hover': {
        backgroundColor: 'rgb(0,0,0,0.5)'
      }
    },
    link: {
      variant: 'buttons.primary',
      width: '100%'
    }
  },
  forms: {
    input: {
      background: '#ffffff',
      borderRadius: 20,
      border: 'none',
      padding: 11,
      display: 'block',
      fontSize: [10, 14],
      textAlign: 'center',
      ':focus': {
        outline: 'none'
      }
    }
  },
  styles: {
    spinner: {
      color: 'white',
      height: 24,
      width: 24
    }
  }
}

export default theme
