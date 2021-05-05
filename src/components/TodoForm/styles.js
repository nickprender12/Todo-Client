import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
  pap: {
    // background: 'red',
    boxShadow: '0px 5px 15px 0px rgba(0,0,0,0.39)',
  },
}));

export default useStyles;
