import { removeHTMLTags } from "./OneEpisodeView";

test("remove HTML <p> and </p> tags", () => {
  expect(removeHTMLTags("<p>Hello</p>")).toBe("Hello");
});
