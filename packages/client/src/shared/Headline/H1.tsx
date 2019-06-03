import * as React from 'react';
import Typography, {TypographyProps} from '@material-ui/core/Typography/Typography';

export const H1 = ({children, ...props}: TypographyProps) => (
  <Typography variant="h1" {...props}>
      {children}
  </Typography>
);
