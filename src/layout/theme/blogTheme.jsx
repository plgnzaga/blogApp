import { createTheme } from '@mui/material/styles';
import { ButtonOverrides } from "./button/buttonOverrides";
import { TypographyOverrides } from './typography/overrides';
import { dialogOverrides } from "./dialog/overrides";
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
      },
      variants:[
        {
          props: { variant: 'primary' },
          style: {
              color: 'white',
              background: '#a100ff',
              '&:hover': {
                background: `linear-gradient(to right,#0956E2,#a100ff)`,
              },

          },
      },
      ]
    },
    MuiDialog: dialogOverrides,
    MuiTextField: {
      styleOverrides: {
        root: {
          width:'100%'
        }
      }
    }
  }
});

export default theme;
