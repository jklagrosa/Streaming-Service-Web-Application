import React from "react";
import styles from "../styles/Wait.module.scss";

const PleaseWait = () => {
  return (
    <>
      <div id={styles._please_wait_wrapper_}>
        <h1 className={styles._Please_wait}>
          You&apos;re not logged in. Redirecting to login page.
        </h1>
      </div>
    </>
  );
};

export default PleaseWait;
