import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    // display: 'flex',
    // flexDirection: 'column',
    // alignItems: 'center',
    //width: '50%',
    height: '100hv',
    border: '1px solid black',
    // backgroundColor: 'red',
  },
  title: {
    // borderBottom: '1px solid black',
  },
  paper: {
    padding: '64px',
    margin: 0,
    //marginTop: '64px',
    height: '100vh',
    // backgroundColor: 'white',
    width: '100vw',
  },
  gridItems: {
    //backgroundColor: 'red',
  },
  listForm: {
    backgroundColor: 'rgba(0, 123, 255)',
    // backgroundImage:
    //   'linear-gradient(rgba(189, 189, 189, 1), rgba(227, 227, 227, .6))',
    padding: '20px',
    borderRadius: '4px',
    boxShadow: '0px 5px 15px 0px rgba(0,0,0,0.39)',
  },
  listForm2: {},
  // appBar: {
  //   height: '64px',
  //   width: '100vw',
  // },
}));

export default useStyles;
