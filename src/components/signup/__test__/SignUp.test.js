import React from "react";
import renderer from "react-test-renderer";
import { MemoryRouter } from "react-router-dom";
import SignUp from "../SignUp";

jest.mock("react-redux", () => ({
  useDispatch: () => ({ t: (key) => key }),
}));


it("renders correctly when the component matches the snapshot", () => {
  const tree = renderer.create(
    <MemoryRouter>
      <SignUp />
    </MemoryRouter>
    

   
   ).toJSON();
  expect(tree).toMatchSnapshot();
});
