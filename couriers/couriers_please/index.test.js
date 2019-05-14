const couriers_please = require("./index");

describe("Couriers Please", () => {
  describe(".valid", () => {
    describe("with a valid connote", () => {
      test("returns true", () => {
        expect(couriers_please.valid("CP0000E0000000")).toBe(true);
        expect(couriers_please.valid("CP000024716400")).toBe(true);
        expect(couriers_please.valid("CPWY33000009337")).toBe(true);
      });
    });

    describe("with an invalid connote", () => {
      test("returns false", () => {
        expect(couriers_please.valid("CP0000247164")).toBe(false);
        expect(couriers_please.valid("12345")).toBe(false);
        expect(couriers_please.valid("")).toBe(false);
        expect(couriers_please.valid(null)).toBe(false);
        expect(couriers_please.valid({})).toBe(false);
      });
    });
  });
});
