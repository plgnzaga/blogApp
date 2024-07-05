declare module '@mui/material/styles' {
  interface TypographyVariants {
    normal: React.CSSProperties;
    small: React.CSSProperties;
    medium?: React.CSSProperties;
  }

  interface TypographyVariantsOptions {
    normal?: React.CSSProperties;
    small?: React.CSSProperties;
    medium?: React.CSSProperties;
  }
  
  
}

// Update the Typography's variant prop options
declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    medium: true;
    normal: true;
    small: true;
  }
}

declare module "@mui/material/Button" {
  interface ButtonPropsVariantOverrides{
    primary:true;
  }
}