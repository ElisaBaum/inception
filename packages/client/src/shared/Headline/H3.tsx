import * as React from 'react';
import Typography, {TypographyProps} from '@material-ui/core/Typography/Typography';

export const H3 = ({children, ...props}: TypographyProps) => (
    <Typography variant="h3" {...props}>
      {children}
    </Typography>
);
