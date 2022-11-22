import renderer from "react-test-renderer";
import { MemoryRouter } from "react-router-dom";
import FooterCol from "./FooterCol";

describe("Footer Component", () => {
  it("Footer Column when there are multiple items", () => {
    const domTree = renderer
      .create(
        <MemoryRouter>
          <FooterCol
            title="Title"
            links={[
              { title: "Home", path: "/" },
              { title: "About Us", path: "/About_Us" },
            ]}
          />
        </MemoryRouter>
      )
      .toJSON();
    expect(domTree).toMatchSnapshot();
  });
});
