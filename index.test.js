const courier_finder = require("./index");

describe("courier_finder", () => {
  describe("with a valid connote", () => {
    test("returns an object with courier name and tracking link", () => {
      expect(courier_finder("CP0000E00000")).toEqual({
        courier: "Couriers Please",
        tracking_link:
          "https://www.couriersplease.com.au/Tools/Track?no=CP0000E00000"
      });
    });
  });

  describe("with an invalid connote", () => {
    test("returns an error object", () => {
      expect(courier_finder("blah")).toEqual({
        error: true,
        message: "Courier details not found from provided connote: blah"
      });
    });
  });
});
