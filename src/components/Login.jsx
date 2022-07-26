import { useState } from "react";

const Login = () => {
  const name = "john";
  const password = "password";
  const [userName, setUserName] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [login, setLogin] = useState(false);

  function handleSubmit() {
    if (userName === name && password === userPassword) {
      setLogin(true);
    }
  }

  return (
    <div>
      <h1>Login</h1>
      <input
        type="text"
        onChange={(e) => {
          setUserName(e.target.value);
        }}
      />
      <input
        type="password"
        onChange={(e) => {
          setUserPassword(e.target.value);
        }}
      />
      <button onClick={handleSubmit}>Submit</button>
      {login && <h1>You are log in</h1>}
    </div>
  );
};

export default Login;
