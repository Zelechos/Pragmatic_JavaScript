import { describe, it, expect } from "vitest";
import { canReconfigure } from "../src/can_reconfigure";
/*
 Estamos en una fabrica de Santa Claus creando regalos como si no hubiera un mañana
 Pensabamos que no ivamos a llegar pero Jeff Bezos a tenido una idea genial para aprovechar las maquinas y optimizar al maximo la creacion de regalos

 La configuracion de las maquinas es un String 
 Podemos reconfigurarla para que haga otro regalo y para ello podemos cambiar cada caracter por otro.

 Pero tiene limtoaciones : al reemplazar el caracter se debe mantener el orden, no se pueden asignar al mismo caracter a dos letras distintas(PERO SI ASI MISMO) y claro la longtoud del string debe ser el mismo

 Necestoamos una funcion que nos diga si podemos reconfigurar una maquina para que de un regalo pueda llegar a fabricar otro segun las reglas mencionadas. Lo mejor es que veamos un ejemplo
 
*/

describe("canReconfigure", () => {
  it("should be a function", () => {
    expect(canReconfigure).toBeTypeOf("function");
  });

  it("should throw if the parameters is not a String", () => {
    expect(() => canReconfigure()).toThrow();
  });

  it("should return a boolean", () => {
    expect(canReconfigure("C", "F")).toBeTypeOf("boolean");
  });

  it("should return false if strings porvided have differnt length", () => {
    expect(canReconfigure("CRD", "GNFH")).toBe(false);
  });

  it("should return false if two o more letters of the strings provided have equals", () => {
    expect(canReconfigure("GNF", "HII")).toBe(false);
    expect(canReconfigure("DDD", "NGL")).toBe(false);
  });

  it("should return false if string has different order of tranformation", () => {
    expect(canReconfigure("XBOX", "XXBO")).toBe(false);
  });

  //   it("should throw if first parameter missing", () => {
  //     expect(() => canReconfigure()).toThrow();
  //   });

  //   it("should thorw if first parameter is null", () => {
  //     expect(() => canReconfigure(null)).toThrow();
  //   });

  //   it("should thorw if the second parameter si missing or null", () => {
  //     expect(() => canReconfigure("from")).toThrow();
  //     expect(() => canReconfigure("from", null)).toThrow();
  //   });
});
