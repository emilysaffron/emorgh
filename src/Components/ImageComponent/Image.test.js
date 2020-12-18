import renderer from "react-test-renderer";
import Image from "./Image";

it("Image Snapshot", () => {
  const tree = renderer.create(<Image alt="image" url="photo" />).toJSON();
  expect(tree).toMatchSnapshot();
});
