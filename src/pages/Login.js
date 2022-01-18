import React from "react";
import { useDispatch } from "react-redux";
import { loginAction } from "../redux/login_reducer";

const Login = () => {
  const dispatch = useDispatch();

  const [log, setLog] = React.useState("");
  const [pas, setPas] = React.useState("");
  const [but, setButton] = React.useState(true);

  React.useEffect(() => {
    if (pas === "123") {
      setButton(false);
    }
  }, [pas]);

  const submitUser = (e) => {
    e.preventDefault();
    dispatch(loginAction(log));
  };

  return (
    <form>
      Login:
      <input
        name='username'
        value={log}
        type='text'
        onChange={(event) => setLog(event.target.value)}
      />
      Password:
      <input
        name='userpassword'
        value={pas}
        type='text'
        onChange={(event) => setPas(event.target.value)}
      />
      <button type='submit' disabled={but} onClick={submitUser}>
        set
      </button>
    </form>
  );
};

export default Login;
