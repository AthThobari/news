import React, { useEffect, useState } from "react";
import { getStoryIds } from "../services/hnApi";
import Story from "../components/Story";
import {
  GlobalStyle,
  StoriesContainerWrapper,
} from "../style/StoriesContainerStyles";

function StoriesContainer() {
  const [storyIds, setStoryIds] = useState<number[]>([]);

  useEffect(() => {
    getStoryIds().then((data) => data && setStoryIds(data));
  }, []);

  return (
    <>
      <GlobalStyle />
        <StoriesContainerWrapper data-test-id="stories-container">
          <h1>Hacker News Stories</h1>
          {storyIds.map((storyId) => (
            <Story key={storyId} storyId={storyId} />
          ))}
        </StoriesContainerWrapper>
    </>
  );
}

export default StoriesContainer;
