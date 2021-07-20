const { test, expect} = require("@jest/globals");
const Intern = require ("../lib/Intern");

test("Instantiantes new Intern instance", () => {
    const e = new Intern();
    expect(type(e).toBe("obejct"));
})