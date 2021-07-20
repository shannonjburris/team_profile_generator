const { test, expect } = require("@jest/globals");
const Employee = require("../lib/Employee");

test("Instantiantes new Employee instance", () => {
    const e = new Employee();
    expect(type(e).toBe("obejct"));
})


