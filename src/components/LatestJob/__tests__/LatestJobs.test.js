import React from "react";
import renderer from "react-test-renderer";
import LatestJobs from "../LatestJobs";
const data = [
  {
    position: "Web Developer f",
    salary: "2000$-3000$",
    date: "10/10/2022",
    fullTime: true,
    partTime: false,
    remote: false,
    id: 1,
  },
  {
    position: "Web Developer p",
    salary: "2000$-3000$",
    date: "10/10/2022",
    fullTime: false,
    partTime: true,
    remote: false,
    id: 2,
  },
  {
    position: "Web Developer fr",
    salary: "2000$-3000$",
    date: "10/10/2022",
    fullTime: true,
    partTime: false,
    remote: true,
    id: 3,
  },
  {
    position: "Web Developer pr",
    salary: "2000$-3000$",
    date: "10/10/2022",
    fullTime: false,
    partTime: true,
    remote: true,
    id: 4,
  },
  {
    position: "Web Developer fr",
    salary: "2000$-3000$",
    date: "10/10/2022",
    fullTime: true,
    partTime: false,
    remote: true,
    id: 5,
  },
  {
    position: "Web Developer r",
    salary: "2000$-3000$",
    date: "10/10/2022",
    fullTime: false,
    partTime: false,
    remote: true,
    id: 6,
  },
  {
    position: "Web Developer fp",
    salary: "2000$-3000$",
    date: "10/10/2022",
    fullTime: true,
    partTime: true,
    remote: false,
    id: 7,
  },
];
const header = [
  { title: "Position", id: 1 },
  { title: "Salary", id: 2 },
  { title: "Date", id: 3 },
  { title: "", id: 4 },
];
it("renders Latest Jobs correctly", () => {
  const tree = renderer
    .create(<LatestJobs headers={header} data={data} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
