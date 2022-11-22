import { GenerateEpisodeCode } from "./OneEpisodeView";

test("Displays a single episode with correct season and episode code.", () => {
  expect(GenerateEpisodeCode(11, 12)).toBe("S11E12");
});
