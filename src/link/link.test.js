import React from "react";
import renderer from "react-test-renderer";
import Link from "./link";

it("renders correctly", () => {
  const tree = renderer
    .create(<Link label="UK News" link="uk-news.com" />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
