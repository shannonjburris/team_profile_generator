const { test, expect} = require("@jest/globals");
const Engineer = require ("../lib/Engineer");

test("Instantiantes new Engineer instance", () => {
    const e = new Engineer();
    expect(type(e).toBe("obejct"));
})


test("Can set GitHUb with constructor", () => {
  const testValue = "username";
  const e = new Engineer("Shannon", 21, "placeholder@me.com", testValue);
  expect(e.github).toBe(testValue);
});

test("getRole() gets engineer", () => {
  const testValue = "Engineer";
  const e = new Engineer("Shannon", 21, "username");
  expect(e.getRole()).toBe(testValue);
});

test("getGithub() get username", () => {
  const testValue = "username";
  const e = new Engineer("Shannon", 21, "placeholder@me.com", testValue);
  expect(e.getGithub()).toBe(testValue);
});