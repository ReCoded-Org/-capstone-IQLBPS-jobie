import renderer from "react-test-renderer";
import { MemoryRouter } from "react-router-dom";

import Login from "../Login";

it("renders correctly when the component matches the snapshot", () => {
  const tree = renderer
    .create(
      <MemoryRouter>
        <Login />
      </MemoryRouter>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
