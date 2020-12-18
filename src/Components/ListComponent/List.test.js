import List from "./List";
import renderer from "react-test-renderer";

it("List Snapshot", () => {
    const tree = renderer.create(<List items="[]" />).toJSON();
    expect(tree).toMatchSnapshot();
  });