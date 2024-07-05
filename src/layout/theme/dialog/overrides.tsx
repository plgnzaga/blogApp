export const dialogOverrides = {
    styleOverrides: {
      borderRadius: "1.5rem",
      paper: {
        borderRadius: "1.5rem",
        maxHeight: "unset",
        overflow: "unset",
        "& .dialog-body":{
          padding: "0.75rem",
          paddingInline: "1.5rem"
        },
        
        "& .dialog-header":{
          padding: "1rem 1.5rem",
          borderRadius: "1.5rem 1.5rem 0 0",
          justifyContent: "space-between",
          borderBottom: "1px solid #E5E7EB"
        },
        
        "& .dialog-footer":{
          padding: "0.75rem",
          paddingInline: "1.5rem",
          justifyContent: "flex-end",
          gap: "0.5rem",
          borderTop: "1px solid #E5E7EB",
          borderRadius: "0 0 1.5rem 1.5rem"
        },
        "& .dialog-header,& .dialog-footer":{
          display:'flex',
          background: 'white'
        }
        
      },
    },
  }