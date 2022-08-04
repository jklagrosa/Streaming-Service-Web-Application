import React, { useEffect } from "react";
import { useRouter } from "next/router";
import styles from "../../styles/Wait.module.scss";

const PleaseWaitTrailer = () => {
  const router = useRouter();

  useEffect(() => {
    router.push({
      pathname: "/trailer/[id]",
      query: { id: router.query.id },
    });
  }, []);

  return (
    <>
      <div id={styles._please_wait_wrapper_}>
        <h1 className={styles._Please_wait}>Please wait...</h1>
      </div>
    </>
  );
};

export default PleaseWaitTrailer;
