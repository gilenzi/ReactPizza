interface ITheme {
  [key: string]: Record<string, string | number>;
}

export const theme: ITheme = {
  colors: {
    primary: 'rgb(250 204 21)',
    secondary: '#e5e7eb',
    success: '#28A745',
    danger: '#DC3545',
    white: '#fff',
    warning: '#FFC107',
    light: 'rgb(234, 179, 8)',
    dark: 'rgb(68, 64, 60)',
  },
  fontSizes: {
    xxs: '0.5rem',
    xs: '0.6rem',
    sm: '0.8rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '1.9rem',
    xxl: '2.5rem',
  },
  spacers: {
    xxs: '0.5rem',
    xs: '0.6rem',
    sm: '0.8rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '1.9rem',
    xxl: '2.5rem',
  },
  fonts: {
    body: "'Roboto', sans-serif",
    heading: "'Poppins', sans-serif",
  },
};
