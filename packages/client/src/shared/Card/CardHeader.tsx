import * as React from 'react';
import MuiCardHeader from '@material-ui/core/CardHeader/CardHeader';
import Icon from '@material-ui/core/Icon/Icon';
import withStyles, {WithStyles} from '@material-ui/core/styles/withStyles';
import {Theme} from '@material-ui/core/styles/createMuiTheme';

import {H2} from '../Headline/H2';
import {H3} from '../Headline/H3';

const styles = (theme: Theme) => ({
    root: {
        padding: 0,
        marginBottom: theme.spacing.unit,
    },
    subheader: {
        marginTop: .5 * theme.spacing.unit,
    },
    avatar: {
        marginRight: theme.spacing.unit,
    },
    action: {
        marginRight: 0,
    },
    icon: {
        color: '#495672',
        flex: '0 0 auto',
        marginRight: theme.spacing.unit,
    },
    titleContainer: {
        display: 'flex',
    }
});

export interface CardHeaderProps extends WithStyles<typeof styles> {
    title: string;
    subtitle?: string;
    icon?: string;
    action?: React.ReactNode;
}

const Title = ({title, subtitle, icon, classes: {icon: iconClass, titleContainer, subheader}}: CardHeaderProps) => (
    <div className={titleContainer}>
        {icon && <Icon className={iconClass} fontSize="small">{icon}</Icon>}
        <span>
            <H2>{title}</H2>
            {subtitle && <H3 className={subheader}>{subtitle}</H3>}
        </span>
    </div>
);

export const CardHeader = withStyles(styles)((props: CardHeaderProps) => {
    const {action, classes: {icon: iconClass, titleContainer, ...muiClasses}} = props;
    return (
        <MuiCardHeader classes={muiClasses}
                       title={<Title {...props}/>}
                       action={action}
        />
    );
});
