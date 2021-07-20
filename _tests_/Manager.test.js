const { test, expect} = require("@jest/globals");
const Manager = require ("../lib/Manager");

test("Instantiantes new Manager instance", () => {
    const e = new Manager();
    expect(type(e).toBe("obejct"));
})