import { DefaultTheme } from 'styled-components';

const dark: DefaultTheme = {
  colors: {
    text: {
      primary: '#ffffff',
      secondary: '#fd749b',
      tertiary: '#1cd1a1',
      quartenary: '#B327F5',
      success: '#5DF888',
      error: '#F85D5D',
      warn: '#FFBE57',
      contrast: '#ffffff',
      percent: '#faa9c6',
    },
    calendar: {
      primary: '#5C5C5C',
      secondary: '#B3B2B2',
    },
    background: {
      primary: '#1E0338',
      secondary: '#1E0338',
      tertiary: '#1E0338',
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

export default dark;
