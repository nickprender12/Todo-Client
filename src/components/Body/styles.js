import { makeStyles } from '@material-ui/core/styles';
import colors from '../../utils/colors';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    // marginTop: "50px",
  },
  title: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    fontWeight: '700',
    fontSize: '70px',
    marginBottom: theme.spacing(-8),
  },
  tagline: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    color: 'rgb(139,139,139)',
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
}));

export default useStyles;
