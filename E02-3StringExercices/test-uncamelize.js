import { strictEqual } from "assert";
import { uncamelize } from "./11-copy.js";

describe("uncamelize", () => {
  it("debería convertir una cadena camelCase en palabras separadas por espacio", () => {
    strictEqual(uncamelize("helloWorld"), "hello World");
    strictEqual(uncamelize("myVariableName"), "my Variable Name");
    strictEqual(uncamelize("thisIsATest"), "this Is A Test");
  });

  it("debería convertir una cadena CamelCase en palabras separadas por espacio", () => {
    strictEqual(uncamelize("HelloWorld"), "Hello World");
    strictEqual(uncamelize("MyVariableName"), "My Variable Name");
    strictEqual(uncamelize("ThisIsATest"), "This Is A Test");
  });

  it("debería convertir una cadena en Snake_Case en palabras separadas por espacio", () => {
    strictEqual(uncamelize("snake Case Example", "_"), "snake_Case_Example");
    strictEqual(uncamelize("AnotherExampleTest", "_"), "another_Example_Test");
  });

  it("debería convertir una cadena en kebab-case en palabras separadas por espacio", () => {
    strictEqual(uncamelize("kebab Case Example", "-"), "kebab-Case-Example");
    strictEqual(uncamelize("AnotherExample Test", "-"), "Another-Example-Test");
  });

  it("debería mantener una cadena que ya está en palabras separadas por espacio", () => {
    strictEqual(uncamelize("hello world"), "hello world");
    strictEqual(uncamelize("my variable name"), "my variable name");
  });

  it("debería manejar casos extremos", () => {
    strictEqual(uncamelize(""), "");
    strictEqual(uncamelize("singleWord"), "single Word");
    strictEqual(uncamelize("    spaceBefore"), "space Before");
    strictEqual(uncamelize("spaceAfter     "), "space After");
    strictEqual(uncamelize("   "), "   ");
  });
});
