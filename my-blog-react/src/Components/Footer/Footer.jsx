import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

function Copyright() {
  return (
    <Typography variant="body2"  align="center">
      {'Ukraine, Dnepropetrovsk | '}
       {'alexxldub@gmail.com'}
    </Typography>
  );
}

const useStyles = makeStyles(theme => ({
  footer: {
    color:'#a7a7a7',
    marginTop: theme.spacing(16),
    padding: theme.spacing(6, 0),
    flexShrink: "0"
    // тут прижать футер
  },
}));

export default function Footer(props) {
  const classes = useStyles();
  const { description, title } = props;

  return (
    <footer className={classes.footer}>
      <Container maxWidth="lg" >
        <Typography variant="h6" align="center" gutterBottom>
          {title}
          <hr/>
        </Typography>
        <Typography variant="subtitle1" align="center"  component="p">
          {description}
          {' | '}
          {new Date().getFullYear()}
      {' year'}
        </Typography>
        <Copyright />
      </Container>
    </footer>
  );
}
