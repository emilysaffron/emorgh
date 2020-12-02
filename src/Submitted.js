import React, { useState, useEffect } from "react";
import { SubHeading } from "@bbc/psammead-headings";
import Loader from "react-loader-spinner";
import tick from "./tick.png";
const Submitted = () => {
  const [loading, updateLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      updateLoading(false);
    }, 1000);
  }, []);

  return loading ? (
    <Loader type="ThreeDots" color="lightgray" height={80} width={80} />
  ) : (
    <div>
      <img src={tick} height="100px" width="100px" alt="tick" />
      <SubHeading>Submitted</SubHeading>
    </div>
  );
};

export default Submitted;
