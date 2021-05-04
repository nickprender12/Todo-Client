import { makeStyles } from "@material-ui/core/styles";
import colors from "../../utils/colors";

const useStyles = makeStyles((theme) => ({
  root: {},
  btnList: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  logInBtn: {
    marginRight: "10px",
    // backgroundColor: 'blue',
    // color: 'white',
    border: "1px solid black",
  },
  signUpBtn: {
    color: "white",
    backgroundColor: `${colors.primaryColor}`,
    border: "none",
    "&:hover": {
      backgroundColor: `${colors.pDarkColor}`,
    },
  },
}));

export default useStyles;
