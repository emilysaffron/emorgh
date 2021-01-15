import add from "./Function";
import CalculatePageNumber from "./Helpers/CalculatePageNumber";
import GetGridGroups from "./Helpers/GetGridGroups";
test("faketest", () => {
  expect(true).toBeTruthy();
});

test("add", () => {
  expect(add(1, 2)).toBe(3);
});

//Unit Tests

test("CalculatePageNumber", () => {
  expect(CalculatePageNumber(3, "Next")).toBe(4);
  expect(CalculatePageNumber(3, "Previous")).toBe(2);
  expect(CalculatePageNumber(5, "Next")).toBe(5);
  expect(CalculatePageNumber(1, "Previous")).toBe(1);
});

test("GetGridGroups", () => {
  expect(GetGridGroups([8, 8, 8, 8, 8, 8])).toStrictEqual({
    group0: 8,
    group1: 8,
    group2: 8,
    group3: 8,
    group4: 8,
    group5: 8,
  });
});
