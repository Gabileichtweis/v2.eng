import { createTheme } from '@mui/material/styles';

const defaultTheme = createTheme({
  palette: {
    primary: {
      main: '#0064e0',
      contrastText: '#ffff',
    },
    secondary: {
      main: '#ffff',
      contrastText: '#0064e0',
    },
  },
  typography: {
    fontFamily: '"Helvetica Neue"',
  },
});

export default defaultTheme;
