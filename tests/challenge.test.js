const challenge = require("../unistTestsJest/challenge");

describe("doubleANumber", () => {
  it("deve dobrar um número passado como argumento", () => {
    //2 testes que retorne sucesso
    expect(challenge.doubleANumber(3)).toBe(6);
    expect(challenge.doubleANumber(0)).toEqual(0);

    //2 testes que retornem falha
    expect(challenge.doubleANumber(3)).toBe(8);
    expect(challenge.doubleANumber(0)).toBe(1);
  });
});

describe("createFullName", () => {
  it("deve retornar o nome completo passado por parâmetro", () => {
    //2 testes que retorne sucesso
    expect(challenge.createFullName("Amanda", "Machado")).toBe(
      "Amanda Machado"
    );
    expect(challenge.createFullName("Amanda", "Machado")).toMatch(
      /Amanda Machado/
    );

    //2 testes que retornem falha
    expect(challenge.createFullName("Amanda", "Machado")).toBe(
      "Amanda Colacio"
    );
    expect(challenge.createFullName("Amanda", "Machado")).toBe(22);
  });
});

describe("calculateTheLenghtOfAString2", () => {
  it("deve calcular o tamanho de uma string", () => {
    //2 testes que retorne sucesso
    expect(challenge.calculateTheLenghtOfAString2("Amanda")).toBe(6);
    expect(challenge.calculateTheLenghtOfAString2("Engenharia")).toMatch(10);
    expect(challenge.calculateTheLenghtOfAString2("")).toBe(0);

    //2 testes que retornem falha
    expect(challenge.calculateTheLenghtOfAString2(".")).toBe(0);
    expect(challenge.calculateTheLenghtOfAString2("Engenharia")).toBe(12);
  });
});

describe("numbersArrayIntoString", () => {
  it("deve converter o array de números em string separando a cada 3 números com ponto", () => {
    //2 testes que retorne sucesso
    expect(challenge.numbersArrayIntoString([1, 2, 3, 4, 5, 6, 7])).toBe(
      "123.456.7"
    );
    expect(challenge.numbersArrayIntoString([1, 2, 3, 4, 5, 6])).toEqual(
      "123.456"
    );

    //2 testes que retornem falha
    expect(challenge.numbersArrayIntoString([1, 2, 3, 4, 5, 6, 7])).toBe(
      "123.4567"
    );
    expect(challenge.numbersArrayIntoString([10, 20, 30, 40, 50, 60])).toBe(
      "102.030.405.060" // são números completos, o certo seria '102030.405060'
    );
  });
});

describe("addNewLanguage", () => {
  it("deve adicionar uma nova linguagem na lista", () => {
    const object = { languages: ["JavaScript", "C#"] };
    const newObject = challenge.addNewLanguage(object, "Java");

    //2 testes que retorne sucesso
    expect(newObject.languages).toContain("Java");
    expect(newObject.languages.length).toEqual(3);

    //2 testes que retornem falha
    expect(newObject.languages).not.toContain("Java");
    expect(object.languages).toContain("Python");
    expect(newObject.languages.length).toEqual(3);
  });

  it("deve retornar um erro se o objeto for null", () => {
    const newLanguage = "Ruby";
    expect(() => addNewLanguage(null, newLanguage)).toThrow(
      "addNewLanguage is not defined"
    );
  });

  it("deve retornar um erro se a nova linguagem for undefined", () => {
    const object = { languages: ["JavaScript", "Python"] };
    expect(() => addNewLanguage(object)).toThrow(
      "addNewLanguage is not defined"
    );
  });
});

describe("votersResult", () => {
  it("Deve retornar o número de eleitores separados por jovens, maduros, sêniores que votaram e que não votaram", () => {
    const voters = [
      { name: "Bob", age: 30, voted: true },
      { name: "Jake", age: 32, voted: true },
      { name: "Kate", age: 25, voted: false },
      { name: "Sam", age: 20, voted: false },
      { name: "Phil", age: 21, voted: true },
      { name: "Ed", age: 55, voted: true },
      { name: "Tami", age: 54, voted: true },
      { name: "Mary", age: 31, voted: false },
      { name: "Becky", age: 43, voted: false },
      { name: "Joey", age: 41, voted: true },
      { name: "Jeff", age: 30, voted: true },
      { name: "Zack", age: 19, voted: false },
    ];

    const expected = {
      numYoungVotes: 1,
      numYoungPeople: 4,
      numMidVotesPeople: 3,
      numMidsPeople: 4,
      numOldVotesPeople: 3,
      numOldsPeople: 4,
    };

    const result = challenge.votersResult(voters);
    expect(result).toEqual(expected);

    //retornar falha

    const notExpected = {
      numYoungVotes: 2,
      numYoungPeople: 2,
      numMidVotesPeople: 0,
      numMidsPeople: 1,
      numOldVotesPeople: 2,
      numOldsPeople: 2,
    };
    expect(expected).toEqual(notExpected);
  });
});
