import React from "react";
import { useRouter } from "next/router";

const UserID = () => {
  const router = useRouter();
  const { UserID } = router.query;

  return <div>{UserID}</div>;
};

export default UserID;
