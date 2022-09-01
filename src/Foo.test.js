import Foo from "./Foo";

test("toi dang test", () => {
  const ab = Foo(1, 2);
  expect(ab).toBe(3);
});
