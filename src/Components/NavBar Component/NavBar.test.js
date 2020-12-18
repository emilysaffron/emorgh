import NavBar from "./NavBar";
import renderer from "react-test-renderer";

it("NavBar Snapshot", () => {
    const tree = renderer.create(<NavBar  />).toJSON();
    expect(tree).toMatchSnapshot();
  });