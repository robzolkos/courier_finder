const fastway = require("./index");

describe("Fastway", () => {
  describe(".valid", () => {
    describe("with a valid connote", () => {
      test("returns true", () => {
        expect(fastway.valid("QH0000247164")).toBe(true);
      });
    });

    describe("with an invalid connote", () => {
      test("returns false", () => {
        expect(fastway.valid("CP0000247164")).toBe(false);
        expect(fastway.valid("12345")).toBe(false);
        expect(fastway.valid("")).toBe(false);
        expect(fastway.valid(null)).toBe(false);
        expect(fastway.valid({})).toBe(false);
      });
    });
  });
});
