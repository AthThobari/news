import axios from "axios";
import { emptySingularStory, singularStory, storyIds } from "../fixtures";
import { getStory, getStoryIds, newStoriesUrl, storyUrl } from "../services/hnApi";

jest.mock("axios");

const mockedAxios = axios as jest.Mocked<typeof axios>;

describe("HackerNews Api", () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  describe("getStory functionality", () => {
    it("requests and gets a story from the HackerNews Api", async () => {
    //   console.log("axios", mockedAxios);
      mockedAxios.get.mockImplementation(() =>
        Promise.resolve({ data: singularStory })
      );

      const entity = await getStory(1);
      expect(axios.get).toHaveBeenCalledTimes(1);
      expect(axios.get).toHaveBeenCalledWith(`${storyUrl + 1}.json`);
      expect(entity).toEqual(singularStory);
    });
  });

  describe("handle story gracefully", () => {
    it("does not retrieve story from the HackerNews Api, but handles gracefully", async () => {
     mockedAxios.get.mockImplementation(() =>
        Promise.resolve({ data: emptySingularStory })
      );

      const entity = await getStory(1);
      expect(axios.get).toHaveBeenCalledTimes(1);
      expect(axios.get).toHaveBeenCalledWith(`${storyUrl + 1}.json`);
      expect(entity).toEqual(emptySingularStory);
  });
  });

  describe('getStoryIds', () => {
    it("does not retrieve ids from the HackerNews Api, but handles gracefully", async () => {
     mockedAxios.get.mockImplementation(() =>
        Promise.resolve({ data: storyIds })
      );

      const entity = await getStoryIds();
      expect(axios.get).toHaveBeenCalledTimes(1);
      expect(axios.get).toHaveBeenCalledWith(newStoriesUrl);
      expect(entity).toEqual(storyIds);
    })
  })
});
