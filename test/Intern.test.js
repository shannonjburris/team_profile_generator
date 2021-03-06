const { test, expect} = require("@jest/globals");
const Intern = require ("../lib/Intern");

test("Instantiantes new Intern instance", () => {
    const e = new Intern();
    expect(typeof(e)).toBe("object");
})

test("Can set school with constructor", () => {
    const testValue = "school";
    const e = new Intern("Shannon", 21, "placeholder@me.com", testValue);
    expect(e.school).toBe(testValue);
  });
// should this say shannon,21,email,school after new intern?
  test("getRole() gets intern", () => {
    const testValue = "Intern";
    const e = new Intern("Shannon", 21, "school");
    expect(e.getRole()).toBe(testValue);
  });

  test("getSchool() get school", () => {
    const testValue = "school";
    const e = new Intern("Shannon", 21, "placeholder@me.com", testValue);
    expect(e.getSchool()).toBe(testValue);
  });