const { test, expect} = require("@jest/globals");
const Engineer = require ("../lib/Engineer");

test("Instantiantes new Engineer instance", () => {
    const e = new Engineer();
    expect(type(e).toBe("obejct"));
})