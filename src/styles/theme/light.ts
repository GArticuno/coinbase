import { DefaultTheme } from 'styled-components';

const light: DefaultTheme = {
  colors: {
    text: {
      primary: '#858585',
      secondary: '#fd749b',
      tertiary: '#1cd1a1',
      quartenary: '#B327F5',
      success: '#5DF888',
      error: '#F85D5D',
      contrast: '#ffffff',
      percent: '#faa9c6',
    },
    background: {
      primary: '#ffffff',
      secondary: '#fff9fe',
    },
    border: '#f0f0f0',
    gradient: {
      primary: {
        head: '#FD749B',
        tail: '#281AC8',
      },
      secondary: {
        head: '#FC58B3',
        tail: '#FEAE68',
      },
    },
  },

  font: {
    size: {
      xs: '0.5rem',
      s: '0.75rem',
      m: '1rem',
      l: '1.5rem',
      xl: '2rem',
      xxl: '2.5rem',
    },
    weight: {
      light: 300,
      regular: 400,
      medium: 500,
      bold: 700,
    },
  },
};

export default light;
