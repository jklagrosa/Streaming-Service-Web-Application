import React, { useEffect } from "react";
import { useRouter } from "next/router";

const PleaseWait = () => {
  const router = useRouter();

  useEffect(() => {
    router.push({
      pathname: "/watch/[id]",
      query: { id: router.query.id },
    });
  }, []);

  return (
    <>
      <h1>Please wait...</h1>
    </>
  );
};

export default PleaseWait;
