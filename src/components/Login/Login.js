import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import InputAdornment from "@material-ui/core/InputAdornment";
import AccountCircle from "@material-ui/icons/AccountCircle";
import LockOpenIcon from "@material-ui/icons/LockOpen";
import "./login.css";
import { Button } from "@material-ui/core";

const Login = () => {
  return (
    <form className="login">
      <h1>Login</h1>
      <div className="login__inputfields">
        <InputLabel htmlFor="input-with-icon-adornment">
          Username or Email
        </InputLabel>{" "}
        <Input
          id="input-with-icon-adornment"
          className="login__input"
          fullWidth
          startAdornment={
            <InputAdornment position="start">
              <AccountCircle />
            </InputAdornment>
          }
        />
      </div>
      <div className="login__inputfields">
        <InputLabel htmlFor="input-with-icon-adornment">Password</InputLabel>
        <Input
          className="login__input"
          id="input-with-icon-adornment"
          fullWidth
          startAdornment={
            <InputAdornment position="start">
              <LockOpenIcon />
            </InputAdornment>
          }
        />
      </div>
      <Button className="login__button" variant="contained" fullWidth>
        {" "}
        Login
      </Button>
      <p className="login__registernow">
        or <span>register now!</span>
      </p>
    </form>
  );
};

export default Login;
