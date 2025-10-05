import React, { useEffect, useState } from "react";
import { getStoryIds } from "../services/hnApi";
import Story from "../components/Story";
import {
  GlobalStyle,
  StoriesContainerWrapper,
} from "../style/StoriesContainerStyles";
import { useInfiniteScroll } from "../hooks/useInfineteScroll";

function StoriesContainer() {
  const [storyIds, setStoryIds] = useState<number[]>([]);
  const { count } = useInfiniteScroll();

  useEffect(() => {
    getStoryIds().then((data) => data && setStoryIds(data));
  }, []);



  return (
    <>
      <GlobalStyle />
        <StoriesContainerWrapper data-test-id="stories-container">
          <h1>Hacker News Stories</h1>
          {storyIds.slice(0, count).map(( storyId) => (
            <Story key={storyId} storyId={storyId}/>
          ))}
        </StoriesContainerWrapper>
    </>
  );
}

export default StoriesContainer;
