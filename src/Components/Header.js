import React from "react";
import styles from "./Header.module.css";
import { useDispatch, useSelector } from "react-redux";
import { userLogout } from "../store/login";
export const Header = () => {
  const { user, token } = useSelector((state) => state.login);
  const loading = token.loading || user.loading;
  const dispatch = useDispatch();
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>Mini Dogs</h1>
      <button
        aria-label="Logout"
        className={`
        ${styles.login} 
        ${loading ? styles.loading : ""}
        ${user.data ? styles.loaded : ""}
        `}
        onClick={() => dispatch(userLogout())}
      />
    </header>
  );
};
