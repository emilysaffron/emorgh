import CalculatePageNumber from "./Helpers/CalculatePageNumber";
test("faketest", () => {
  expect(true).toBeTruthy();
});
test("CalculatePageNumber", () => {
  expect(CalculatePageNumber(3, "Next")).toBe(4);
  expect(CalculatePageNumber(3, "Previous")).toBe(2);
  expect(CalculatePageNumber(5, "Next")).toBe(5);
  expect(CalculatePageNumber(1, "Previous")).toBe(1);
});
