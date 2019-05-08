import * as React from "react";
import MuiCardContent from '@material-ui/core/CardContent/CardContent';
import Typography from "@material-ui/core/Typography/Typography";
import withStyles, {WithStyles} from '@material-ui/core/styles/withStyles';

const styles = () => ({
    root: {
        padding: 0,
    },
    cardContent: {
        fontSize: '.85rem',
        fontWeight: 300,
    },
});

export interface CardContentProps extends WithStyles<typeof styles> {
    children: React.ReactNode;
}

export const CardContent = withStyles(styles)(({children, classes}: CardContentProps) => (
  <MuiCardContent classes={classes}>
      <Typography className={classes.cardContent}>
          {children}
      </Typography>
  </MuiCardContent>
));