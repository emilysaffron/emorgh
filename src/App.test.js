import add from "./Function";
import CalculatePageNumber from "./Helpers/CalculatePageNumber";
import renderer from "react-test-renderer";
import Heading from "./Components/Heading";
test("faketest", () => {
  expect(true).toBeTruthy();
});

test("add", () => {
  expect(add(1, 2)).toBe(3);
});

//Unit Test

test("CalculatePageNumber", () => {
  expect(CalculatePageNumber(3, "Next")).toBe(4);
  expect(CalculatePageNumber(3, "Previous")).toBe(2);
  expect(CalculatePageNumber(5, "Next")).toBe(5);
  expect(CalculatePageNumber(1, "Previous")).toBe(1);
});

//Snapshot Test
it("Heading Snapshot", () => {
  const tree = renderer.create(<Heading text="text" />).toJSON();
  expect(tree).toMatchSnapshot();
});
