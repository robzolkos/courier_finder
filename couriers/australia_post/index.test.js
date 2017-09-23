const australia_post = require("./index");

describe("Australia Post", () => {
  describe(".valid", () => {
    describe("with a valid connote", () => {
      test("returns true", () => {
        expect(australia_post.valid("0000000000")).toBe(true); // 10
        expect(australia_post.valid("00000000000000")).toBe(true); // 14
        expect(australia_post.valid("000000000000000000")).toBe(true); // 18
        expect(australia_post.valid("000000000000000000000")).toBe(true); // 21
        expect(
          australia_post.valid("000000000000000000000000000000000000000")
        ).toBe(true); // 39
      });
    });

    describe("with an invalid connote", () => {
      test("returns false", () => {
        expect(australia_post.valid("CP000000000000")).toBe(false); // 14 Couriers Please
        expect(australia_post.valid("12345")).toBe(false);
        expect(australia_post.valid("")).toBe(false);
        expect(australia_post.valid(null)).toBe(false);
        expect(australia_post.valid({})).toBe(false);
      });
    });
  });
});
