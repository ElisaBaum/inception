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
        fontFamily: '\'Lato\', sans-serif',
        h1: {
            fontSize: '1.125rem',
            fontWeight: 'normal',
        },
        h2: {
            fontSize: '1rem',
            fontWeight: 'normal',
        }
    },
    overrides: {
        MuiIcon: {
            root: {
                color: defaultColor
            }
        },
        MuiAvatar: {

        },
        MuiPaper: {
            elevation1: {
                boxShadow: '0 0 6px #EEEFF4'
            },
            rounded: {
                borderRadius: '.7rem',
            }
        },
        MuiCardActions: {
            action: {
                margin: 0,
            }
        }
    }
});
