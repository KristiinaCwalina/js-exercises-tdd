let greetPeople = require("./greet-people");
test("print list of names prefixed with Hello", function() {
  // Arrange
  let people = ["Jose", "Maria", "Eduard", "Laura"];
  let expectedResult = "Hello JoseMariaEduardLaura";
  let result = greetPeople(people);
  expect(result).toBe(expectedResult);
  // Act
  // Assert
});
