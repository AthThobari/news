import React, { useEffect, useState } from "react";
import { getStoryIds } from "./services/hnApi";
import StoriesContainer from "./containers/StoriesContainer";

const App = () => {
  return (
    <>
      <StoriesContainer />
    </>
  );
};

export default App;
