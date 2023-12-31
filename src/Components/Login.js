import React from "react";
import { useDispatch } from "react-redux";
import { login } from "../store/login";
import styles from "./Login.module.css";

export const Login = () => {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const dispatch = useDispatch();

  function handleSubmit(event) {
    event.preventDefault();
    dispatch(login({ username, password }));
  }

  return (
    <form className="anime" onSubmit={handleSubmit}>
      <label className={styles.label} htmlFor="username">
        Username
      </label>
      <input
        id="username"
        type="text"
        value={username}
        onChange={({ target }) => setUsername(target.value)}
        className={styles.input}
      />
      <label className={styles.label} htmlFor="password">
        password
      </label>

      <input
        id="password"
        type="password"
        value={password}
        onChange={({ target }) => setPassword(target.value)}
        className={styles.input}
      />
      <button className={styles.button}>Enviar</button>
    </form>
  );
};
