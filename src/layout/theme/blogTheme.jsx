import { createTheme } from '@mui/material/styles';
import { ButtonOverrides } from "./button/buttonOverrides";
import { TypographyOverrides } from './typography/overrides';
const primaryColor = '#007bff'; 

const theme = createTheme({
  palette: {
    primary: {
      main: primaryColor, 
    },
    secondary: {
      main: '#f50057', 
    },
  },
  typography: TypographyOverrides,
  components:{
    MuiButton:{
      styleOverrides:{
        root: ButtonOverrides,
      }
    }
  }
});

export default theme;
