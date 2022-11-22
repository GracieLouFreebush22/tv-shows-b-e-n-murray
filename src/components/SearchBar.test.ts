import { epCount } from "./EpisodeListView";
import episodes from "../episodes.json";

test("is episode count working", () => {
  expect(epCount("winter", episodes)).toBe(10);
  expect(epCount("pointy", episodes)).toBe(1);
});
