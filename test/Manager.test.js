const { test, expect} = require("@jest/globals");
const Manager = require ("../lib/Manager");

test("Instantiantes new Manager instance", () => {
    const e = new Manager();
    expect(typeof(e)).toBe("object");
})

test("Can set office number with constructor", () => {
    const testValue = "number";
    const e = new Manager("Shannon", 21, "placeholder@me.com", testValue);
    expect(e.officeNumber).toBe(testValue);
  });

  test("getRole() gets manager", () => {
    const testValue = "Manager";
    const e = new Manager("Shannon", 21, "office-number");
    expect(e.getRole()).toBe(testValue);
  });

  test("getOfficeNumberl() get office number", () => {
    const testValue = "office-number";
    const e = new Manager("Shannon", 21, "placeholder@me.com", testValue);
    expect(e.getOfficeNumber()).toBe(testValue);
  });