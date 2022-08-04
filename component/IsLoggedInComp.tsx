import React from "react";
import styles from "../styles/Wait.module.scss";

const isLoggedIn = () => {
  return (
    <>
      <div id={styles._please_wait_wrapper_}>
        <h1 className={styles._Please_wait}>
          You&apos;re already logged in. Redirecting to homepage.
        </h1>
      </div>
    </>
  );
};

export default isLoggedIn;
