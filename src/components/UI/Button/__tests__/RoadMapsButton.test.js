import React from "react";
import renderer from "react-test-renderer";
import RoadMapsButton from "../RoadMapsButton";
const data = {
  svg: {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 384 512",
    d: "M0 32l34.9 395.8L191.5 480l157.6-52.2L384 32H0zm308.2 127.9H124.4l4.1 49.4h175.6l-13.6 148.4-97.9 27v.3h-1.1l-98.7-27.3-6-75.8h47.7L138 320l53.5 14.5 53.7-14.5 6-62.2H84.3L71.5 112.2h241.1l-4.4 47.7z",
  },
  link: "https://roadmap.sh/frontend",
  title: "Frontend",
  id: 1,
};

it("renders Road Map button correctly", () => {
  const tree = renderer
    .create(
      <RoadMapsButton svg={data.svg} link={data.link} title={data.title} />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
