import renderer from "react-test-renderer";
import { MemoryRouter } from 'react-router-dom'
import Footer from "./Footer";

describe("Footer Component", () => {
    it("Render Footer Correctly", () => {
      const tree = renderer.create(
        <MemoryRouter>
            <Footer />
        </MemoryRouter>
      ).toJSON();
      expect(tree).toMatchSnapshot();
    });
    
});
  