import { makeStyles } from '@material-ui/core/styles';
import colors from '../../utils/colors';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      // margin: theme.spacing(1),
    },
    display: 'flex',
    justifyContent: 'space-between',
    padding: '2px',
    borderBottom: '.5px solid rgba(0, 0, 0, 0.466)',
    fontSize: '30px',
  },
  tuduLogo: {
    fontSize: '2.5rem',
  },
  btnList: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logInBtn: {
    marginRight: '10px',
  },
  signUpBtn: {
    color: 'white',
    backgroundColor: `${colors.primaryColor}`,
    border: 'none',
    '&:hover': {
      backgroundColor: `${colors.pDarkColor}`,
    },
  },
  username: {
    marginRight: '10px',
  },
  logOutBtn: {
    marginRight: '10px',
  },
}));

export default useStyles;
