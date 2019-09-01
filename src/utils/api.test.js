import { getAPIURL, loadArticlesFromSection } from "./api";

test("returns url with section", () => {
  expect(getAPIURL("travel")).toBe(
    "http://content.guardianapis.com/travel?api-key=test"
  );
});

test("returns values from API call", async function() {
  global.fetch = jest.fn().mockImplementation(
    () =>
      new Promise(resolve => {
        resolve({
          json: function() {
            return {
              response: {
                results: "expected_content"
              }
            };
          }
        });
      })
  );
  const result = await loadArticlesFromSection("test");
  expect(result).toBe("expected_content");
});
