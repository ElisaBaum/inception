import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
import './styles.scss';

export const primaryColor = '#213155';
export const secondaryColor = '#ff4eaa';
export const defaultColor = '#bbc0d4';

export const defaultTheme = createMuiTheme({
    palette: {
        primary: {
            main: primaryColor,
        },
        action: {
            active: secondaryColor,
        },
        secondary: {
            main: secondaryColor,
        },
        text: {
            primary: primaryColor,
            secondary: defaultColor,
        },
    },
    typography: {
        useNextVariants: true,
        fontFamily: '\'Nunito\', sans-serif',
    },
    overrides: {
        MuiIcon: {
            root: {
                color: defaultColor
            }
        },
        MuiInput: {
            // input: {
            //     // '&::-webkit-input-placeholder': {
            //     //     color: defaultColor,
            //     // },
            //     fontSize: '.875rem',
            //     '&::placeholder': {
            //         color: defaultColor,
            //         opacity: 1,
            //     },
            // },
            // underline: {
            //     '&:after': {
            //         borderBottom: `1px solid ${secondaryColor}`,
            //     },
            //     '&:before': {
            //         borderBottom: `1px solid ${defaultColor}`,
            //     },
            // },
        }
    }
});
