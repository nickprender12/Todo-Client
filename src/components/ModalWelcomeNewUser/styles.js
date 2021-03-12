import { makeStyles } from '@material-ui/core/styles';
import colors from '../../utils/colors';

const useStyles = makeStyles((theme) => ({
  root: {
    // display: 'flex',
    // flexDirection: 'row',
    // justifyContent: 'right',
    // alignItems: 'right',
  },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    // border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(3),
    // margin: theme.spacing(3),
    //width: '424px',
    outline: 'none',
    '&:focus': {
      outline: 'none',
    },
    '&:hover': {
      outline: 'none',
    },
  },
  greeting: {
    display: 'flex',
    flexDirection: 'column',
    margin: theme.spacing(2),
  },
  Success: {
    fontSize: '2.5rem',
  },
  okBtn: {
    color: 'white',
    backgroundColor: `${colors.primaryColor}`,
    border: 'none',
    '&:hover': {
      backgroundColor: `${colors.pDarkColor}`,
    },
  },
  alert: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
}));

export default useStyles;
