import "@testing-library/jest-dom";

import { render, cleanup, waitFor } from "@testing-library/react";
import { singularStory } from "../fixtures";
import { getStory} from "../services/hnApi";

import Story from "../components/Story";

beforeEach(() => {
    cleanup();
    jest.resetAllMocks();
})

jest.mock("../hooks/useInfineteScroll", () => ({
  useInfiniteScroll: jest.fn(),
}));

jest.mock("../services/hnApi", () => ({
    getStory: jest.fn(),
    getStoryIds: jest.fn(),
}))


test('renders the story component with content', async () => {

    (getStory as jest.Mock).mockImplementation(() => Promise.resolve(singularStory));

const { findByText, queryByTestId, getByTestId } = render(<Story storyId={1} />);

  await waitFor(() => expect(getByTestId("story")).toBeInTheDocument());

expect(await findByText("Tarnished: Google Responds")).toBeInTheDocument();
expect(queryByTestId("story-by")?.textContent).toEqual("By: Karl Hadwen.");
})