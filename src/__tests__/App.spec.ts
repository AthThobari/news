import React from "react";
import { act } from "react";
import { render, cleanup } from "@testing-library/react";
import App from "../App";
import { storyIds, singularStory } from "../fixtures";
import { getStory, getStoryIds } from "../services/hnApi";
import { useInfiniteScroll } from "../hooks/useInfineteScroll";
import { STORY_INCREMENT } from "../constants";
import { count } from "console";

jest.mock("../hooks/useInfineteScroll")
jest.mock("../services/hnApi")
beforeEach(cleanup)

test('renders the application', async () => {
    (useInfiniteScroll as jest.Mock).mockImplementation(() => {
        count: STORY_INCREMENT
    });
    (getStory as jest.Mock).mockImplementation
})