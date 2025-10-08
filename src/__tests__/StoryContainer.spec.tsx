import "@testing-library/jest-dom";

import { render, cleanup, waitFor } from "@testing-library/react";
import { storyIds, singularStory } from "../fixtures";
import { getStory, getStoryIds } from "../services/hnApi";
import { useInfiniteScroll } from "../hooks/useInfineteScroll";
import { STORY_INCREMENT } from "../constants";
import { count } from "console";
import App from "../App";
import StoriesContainer from "../containers/StoriesContainer";

beforeEach(cleanup)

jest.mock("../hooks/useInfineteScroll", () => ({
  useInfiniteScroll: jest.fn(),
}));

jest.mock("../services/hnApi", () => ({
    getStory: jest.fn(),
    getStoryIds: jest.fn(),
}))


test('renders the story container with a story', async () => {
    (useInfiniteScroll as jest.Mock).mockImplementation(() => ({
        count: STORY_INCREMENT
    }));
    (getStory as jest.Mock).mockImplementation(() => Promise.resolve(singularStory));
    (getStoryIds as jest.Mock).mockImplementation(() => Promise.resolve(storyIds));

const { findByText, queryByTestId } = render(<StoriesContainer />);

expect(await findByText("Hacker News Stories")).toBeInTheDocument();
expect(await findByText("Tarnished: Google Responds")).toBeInTheDocument();
expect(queryByTestId("story-by")?.textContent).toEqual("By: Karl Hadwen.");

})