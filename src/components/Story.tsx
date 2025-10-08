import React, { memo, useEffect, useState } from "react";
import { getStory } from "../services/hnApi";
import { StoryType } from "../selectors/SelectField";
import {
  StoryMeta,
  StoryMetaElement,
  StoryTitle,
  StoryWrapper,
} from "../style/StoryStyles";
import { mapTime } from "../mappers/mapTIme";

const StoryComponent = ({ storyId }: { storyId: number}) => {
  const [story, setStory] = useState<StoryType | null>(null);
  useEffect(() => {
    getStory(storyId).then((data) => data && data.url && setStory(data));
  }, []);
  return story && story.url ? (
    <StoryWrapper data-testid="story">
      <StoryTitle>
        <a target="_blank" href={story.url}>{story.title}</a>
      </StoryTitle>

      <StoryMeta>
        <span className="story__by" data-testid="story-by">
          <StoryMetaElement color="#000">By:</StoryMetaElement> {story.by}
        </span>
        <span className="story__time" data-testid="story-time">
          <StoryMetaElement color="#000">Posted:</StoryMetaElement>{" "}
          {mapTime(story.time ?? 0)}
        </span>
      </StoryMeta>
    </StoryWrapper>
  ) : null;
}

const Story = memo(StoryComponent)

export default Story;
