import React from "react";
import { css } from "@emotion/react";
import { HashLoader } from "react-spinners";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

function Loading() {
  return (
    <div className="loading-container">
      {console.log("-------")}
      <HashLoader color="#00bfff" css={override} size={60} />
    </div>
  );
}

export default Loading;
