const { test, expect} = require("@jest/globals");
const Manager = require ("../lib/Manager");

test("Instantiantes new Manager instance", () => {
    const e = new Manager();
    expect(type(e).toBe("obejct"));
})

test("Can set office number with constructor", () => {
    const testValue = "number";
    const e = new Manager("Shannon", 21, "placeholder@me.com", testValue);
    expect(e.github).toBe(testValue);
  });

  test("getRole() gets manager", () => {
    const testValue = "manager";
    const e = new Manager("Shannon", 21, "office-number");
    expect(e.getRole()).toBe(testValue);
  });

  test("getOfficeNumberl() get office number", () => {
    const testValue = "office-number";
    const e = new Manager("Shannon", 21, "placeholder@me.com", testValue);
    expect(e.getGithub()).toBe(testValue);
  });