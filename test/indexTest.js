require ( './root.js' );

const { name, height, message } = require("../index.js");

describe("what-is-a-test", () => {
  describe("Name", () => {
    it('returns "Susan"', () => {
      expect(name).toEqual("Susan");
    });
  });

  describe((39 , () => {
    it("is less than 40 and greater than 0", () => {
      expect(height).toBeMoreThan(0)
      expect(height).toBeLessThan(40));
    });
  });

  describe("Height", () => {
    it("is less than 74 and greater than 0", () => {
      expect(height).toBeMoreThan(0);
      expect(height).toBeLessThan(74);
    });
  });
});
