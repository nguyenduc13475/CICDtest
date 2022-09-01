import Foo from "./Foo";

test("toi dang test", () => {
  const ab = Foo(1, 3);
  expect(ab).toBe(5);
});
