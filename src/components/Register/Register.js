import TextField from "@material-ui/core/TextField";
import "./register.css";
import InputLabel from "@material-ui/core/InputLabel";
import { Controller, useForm } from "react-hook-form";
import { Button } from "@material-ui/core";

const Register = () => {
  const { control, handleSubmit } = useForm();

  const onSubmit = (data) => {
    alert("successfully registered");
  };
  return (
    <form className="register" onSubmit={handleSubmit(onSubmit)}>
      <h1>Register</h1>
      <div className="register__inputfields">
        <InputLabel
          htmlFor="input-with-icon-adornment"
          className="register__label"
        >
          Full Name:
        </InputLabel>
        <Controller
          control={control}
          name="FullName"
          render={({
            field: { onChange },
            fieldState: { error, invalid },
            formState,
          }) => (
            <TextField
              id="outlined-textarea"
              placeholder="Your full name"
              onChange={onChange}
              error={invalid}
              multiline
              variant="outlined"
              helperText={error?.message}
              fullWidth
            />
          )}
          rules={{
            required: { value: true, message: "*FullName is Required" },
            minLength: {
              value: 4,
              message: "*Name is too short(Minimum 4 characters needed)",
            },
          }}
        />
      </div>
      <div className="register__inputfields">
        <InputLabel
          htmlFor="input-with-icon-adornment"
          className="register__label"
        >
          Username:
        </InputLabel>
        <Controller
          control={control}
          name="Username"
          render={({
            field: { onChange },
            fieldState: { error, invalid },
            formState,
          }) => (
            <TextField
              id="outlined-textarea"
              placeholder="A unique username"
              onChange={onChange}
              error={invalid}
              helperText={error?.message}
              multiline
              variant="outlined"
              fullWidth
            />
          )}
          rules={{
            required: { value: true, message: "*username is Required" },
          }}
        />
      </div>
      <div className="register__inputfields">
        <InputLabel
          htmlFor="input-with-icon-adornment"
          className="register__label"
        >
          Email:
        </InputLabel>
        <Controller
          control={control}
          name="email"
          render={({
            field: { onChange },
            fieldState: { error, invalid },
            formState,
          }) => (
            <TextField
              id="outlined-textarea"
              placeholder="Your email"
              error={invalid}
              helperText={error?.message}
              onChange={onChange}
              multiline
              variant="outlined"
              fullWidth
            />
          )}
          rules={{
            required: { value: true, message: "*email is Required" },
            pattern: {
              value:
                /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$/,
              message: "*Email is invalid",
            },
          }}
        />
      </div>
      <div className="register__inputfields">
        <InputLabel
          htmlFor="input-with-icon-adornment"
          className="register__label"
        >
          Password:
        </InputLabel>
        <Controller
          control={control}
          name="password"
          render={({
            field: { onChange },
            fieldState: { error, invalid },
            formState,
          }) => (
            <TextField
              id="outlined-textarea"
              placeholder="A password between 6 to 20 characters"
              onChange={onChange}
              error={invalid}
              helperText={error?.message}
              multiline
              variant="outlined"
              fullWidth
            />
          )}
          rules={{
            required: { value: true, message: "*Password is Required" },
            minLength: {
              value: 6,
              message: "*Password must be at least 6 characters",
            },
            maxLength: {
              value: 20,
              message: "*Password must be at most 20 characters",
            },
          }}
        />
      </div>
      <Button
        className={"register__button"}
        variant="contained"
        type="submit"
        fullWidth
      >
        Sign up
      </Button>
    </form>
  );
};

export default Register;
