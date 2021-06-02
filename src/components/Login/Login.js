import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import InputAdornment from "@material-ui/core/InputAdornment";
import AccountCircle from "@material-ui/icons/AccountCircle";
import LockOpenIcon from "@material-ui/icons/LockOpen";
import "./login.css";
import { Button } from "@material-ui/core";
import { Controller, useForm } from "react-hook-form";

const Login = () => {
  const { control, handleSubmit } = useForm();

  const onSubmit = (data) => {
    alert("successfully logged in");
  };

  return (
    <form className="login" onSubmit={handleSubmit(onSubmit)}>
      <h1>Login</h1>
      <div className="login__inputfields">
        <InputLabel htmlFor="input-with-icon-adornment">
          Username or Email
        </InputLabel>{" "}
        <Controller
          control={control}
          name="username"
          render={({
            field: { onChange },
            fieldState: { error, invalid },
            formState,
          }) => (
            <>
              <Input
                id="input-with-icon-adornment"
                className="login__input"
                error={invalid}
                onChange={onChange}
                fullWidth
                startAdornment={
                  <InputAdornment position="start">
                    <AccountCircle />
                  </InputAdornment>
                }
              />
              <span className="login__error">{error?.message}</span>
            </>
          )}
          rules={{
            required: {
              value: true,
              message: "*Username or Email is Required",
            },
          }}
        />
      </div>
      <div className="login__inputfields">
        <InputLabel htmlFor="input-with-icon-adornment">Password</InputLabel>
        <Controller
          control={control}
          name="password"
          render={({
            field: { onChange },
            fieldState: { error, invalid },
            formState,
          }) => (
            <>
              <Input
                className="login__input"
                id="input-with-icon-adornment"
                onChange={onChange}
                error={invalid}
                fullWidth
                startAdornment={
                  <InputAdornment position="start">
                    <LockOpenIcon />
                  </InputAdornment>
                }
              />
              <span className="login__error">{error?.message}</span>
            </>
          )}
          rules={{
            required: { value: true, message: "*Password is Required" },
          }}
        />
      </div>
      <Button
        className="login__button"
        variant="contained"
        type="submit"
        fullWidth
      >
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
