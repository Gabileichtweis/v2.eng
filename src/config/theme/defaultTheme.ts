import { createTheme } from '@mui/material/styles';

//LOGO: #7EB5C6 E #24274C

const defaultTheme = createTheme({
  palette: {
    primary: {
      main: '#7EB5C6',
      contrastText: '#24274C',
    },
    secondary: {
      main: '#24274C',
      contrastText: '#FFFF',
    },
  },
  typography: {
    fontFamily: '"Helvetica Neue"',
  },
});

export default defaultTheme;
