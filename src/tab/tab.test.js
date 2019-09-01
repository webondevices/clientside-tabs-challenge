import React from "react";
import renderer from "react-test-renderer";
import Tab from "./tab";

it("renders correctly", () => {
  const tree = renderer.create(<Tab title="UK News" id="uk-news" />).toJSON();
  expect(tree).toMatchSnapshot();
});
