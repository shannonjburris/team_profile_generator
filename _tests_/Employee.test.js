const { test, expect } = require("@jest/globals");
const Employee = require("../lib/Employee");

test("Instantiantes new Employee instance", () => {
    const e = new Employee();
    expect(type(e).toBe("obejct"));
    expect(type(e.name).toBe("obejct"));
});

test("Can set name with constructor", () => {
    const name = "Shannon";
    const e = new Employee(name);
    expect(e.name).toBe(name);
});

test("Can set id with constructor", () => {
    const testValue = 21;
    const e = new Employee("placeholder", testValue);
    expect(e.id).toBe(testValue);
  });

test("Can set email with constructor", () => {
    const testValue = "placeholder@me.com";
    const e = new Employee("palceholder", 21, testValue);
    expect(e.email).toBe(testValue);
  });

test("getName() gets names", () => {
    const testValue = "Shannon";
    const e = new Employee(testValue);
    expect(e.getName()).toBe(testValue);
  });

test("getId() gets id", () => {
    const testValue = 21;
    const e = new Employee("placeholder", testValue);
    expect(e.getId()).toBe(testValue);
  });

test("getEmail() gets email", () => {
    const testValue = "placeholder@me.com";
    const e = new Employee("palceholder", 21, testValue);
    expect(e.getEmail()).toBe(testValue);
  });

test("getRole() gets employee", () => {
    const testValue = "Employee";
    const e = new Employee("Shannon", 21, "placeholder@me.com");
    expect(e.getRole()).toBe(testValue)
});
