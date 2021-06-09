import React, { useEffect } from "react";

import DiseasePage from "./app";

const Disease = () => {
  useEffect(() => {
    document.title = `Disease`;
  });
  return <DiseasePage />;
};

export default Disease;
