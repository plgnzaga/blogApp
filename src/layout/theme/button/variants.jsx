import { dangerColors, darkColors, infoColors, lightColors, primaryColors, secondaryColors, successColors, warningColors } from "../colorPalettes/colorPalettes"

export const buttonVariants = () => {
    return(
        [
            {
                props: { variant: 'primary' },
                style: {
                    color: '#ffffff',
                    border: '0.1px solid',
                    borderColor: '#a100ff',
                    background: '#a100ff',
                    '&:hover': {
                        background: 'linear-gradient(to right,#0956E2,#a100ff)',
                    },
                    '&:active': {
                        background: '#a100ff',
                    },
                },
            }
            
            
        ]
    )
}