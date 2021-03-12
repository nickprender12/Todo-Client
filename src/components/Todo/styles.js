import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  todo: {
    display: 'flex',
    flexDirection: 'row',
  },
}));

export default useStyles;
