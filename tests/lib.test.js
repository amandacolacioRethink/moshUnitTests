const exp = require("constants");
const { describe } = require("yargs");
const lib = require("../lib");

// test("absolute - should return a positive number if input is positive", () => {
//   throw new Error("something failed");
// });

describe("absolute", () => {
  it(" should return a positive number if input is positive", () => {
    const result = lib.absolute(1);
    expect(result).toBe(1);
  });

  it("should return a positive number if input is negative", () => {
    const result = lib.absolute(-1);
    expect(result).toBe(1);
  });

  it("should return a positive number if input is zero", () => {
    const result = lib.absolute(0);
    expect(result).toBe(0); // se for diferente do esperado dá erro
  });
});

describe("greeting", () => {
  it("should return the greeting message", () => {
    const result = lib.greet("Amanda");
    expect(result).toMatch(/Amanda/);
    expect(result).toContain("Amanda");
  });
});

describe("getCurrenciaes", () => {
  it("should return supported currencies", () => {
    const result = lib.getCurrencies();

    //generalista
    expect(result).toBeDefined();
    expect(result).not.toBeNull();

    //especifico
    expect(result[0]).toBe("USD");
    expect(result[1]).toBe("AUD");
    expect(result[2]).toBe("EUR");
    expect(result.length).toBe(3);

    //proper way
    expect(result).toContain("USD");
    expect(result).toContain("AUD");
    expect(result).toContain("EUR");

    //Ideal way
    expect(result).toEqual(expect.arrayContaining(["USD", "AUD", "EUR"]));
  });
});

describe("getProduct", () => {
  it("should return the product with the given id", () => {
    const result = lib.getProduct(1);
    expect(result).toEqual({ id: 1, price: 10 }); // testar igualidade dos objetos
    expect(result).toMatchObject({ id: 1, price: 10 });
    expect(result).toHaveProperty("id", "1"); // vai dar erro, pq ele espera um number e esta entregando string
  });
});

describe("registerName", () => {
  it("should throw if username is false", () => {
    const args = [null, undefined, NaN, "", 0, false];
    args.forEach((a) => {
      expect(() => {
        lib.registerUser(a);
      }).toThrow();
    });
  });

  it("should return a user object if valid username", () => {
    const result = lib.registerUser("Amanda");
    expect(result).toMatchObject({ username: "Amanda" });
    expect(result.id).toBeGreaterThan(0);
  });
});
