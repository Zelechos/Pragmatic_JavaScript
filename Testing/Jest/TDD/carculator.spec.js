/*
Casos: 
Calcular el area de un cuadrado de 5 x 5 debe dar como resultado 25
Calcular el area de un cuadrado de 2 x 2 debe dar como resultado 4
Calcular el area de un rectangulo de 2 x 4 debe dar como resultado 8
Calcular el area de un triangulo de altura 12 y base 20 debe dar como resultado 120
*/
"use strict";

const { it, expect } = require("@jest/globals");
const Area = require("./areas-calculator");

describe("calculator areas", () => {
  const area = new Area();

  it("Calcular el area de un cuadrado de 5 x 5 debe dar como resultado 25", () => {
    const response = area.calculatedAreaSquare(5);
    expect(response).toBe(25);
  });

  it("Calcular el area de un cuadrado de 2 x 2 debe dar como resultado 4", () => {
    const response = area.calculatedAreaSquare(2);
    expect(response).toBe(4);
  });

  it("Calcular el area de un cuadrado de 0 x 0 debe dar como resultado un mensaje de error", () => {
    const response = area.calculatedAreaSquare(0);
    expect(response).toBe("Error el lado debe ser mayor a 0!!!");
  });

  it("Calcular el area de un rectangulo de 2 x 4 debe dar como resultado 8", () => {
    const response = area.calculatedAreaRectangle(2, 4);
    expect(response).toBe(8);
  });

  it("Calcular el area de un triangulo de altura 12 y base 20 debe dar como resultado 120", () => {
    const response = area.calculatedAreaTriangle(12, 20);
    expect(response).toBe(120);
  });
});
