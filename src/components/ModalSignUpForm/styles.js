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
    //padding: theme.spacing(2, 4, 3),
    margin: theme.spacing(3),
    outline: 'none',
    '&:focus': {
      outline: 'none',
    },
    '&:hover': {
      outline: 'none',
    },
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    margin: theme.spacing(2),
    justifyContent: 'space-between',
    //padding: theme.spacing(2, 4, 3),
  },
  right: {
    justifyContent: 'right',
  },
  tuduLogoText: {
    fontSize: '2.5rem',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    margin: theme.spacing(3),
  },
  signUpBtn: {
    color: 'white',
    backgroundColor: `${colors.primaryColor}`,
    border: 'none',
    '&:hover': {
      backgroundColor: `${colors.pDarkColor}`,
    },
  },
  footer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    margin: theme.spacing(3),
  },
}));

export default useStyles;
