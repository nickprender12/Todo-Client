import React from 'react';
import useStyles from './styles';
import { Alert } from '@material-ui/lab';

const Notification = (props) => {
  const classes = useStyles(props);
  const { message } = props;

  if (message === null) {
    return null;
  }
  return (
    <div className={classes.root}>
      <Alert severity="info">{message}</Alert>
    </div>
  );
};

export default Notification;
