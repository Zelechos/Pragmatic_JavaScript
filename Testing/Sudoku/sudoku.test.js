/*
Casos: 
Calcular el la cantidad de Areas del Sudoku 1 area tiene 9 casillas
Calcular el la cantidad de Areas del Sudoku 3 area tiene 27 casillas
Calcular el la cantidad de Areas del Sudoku 9 area tiene 81 casillas
Generar la cuadricula principal del sudoku para 0 tiene que ser 81 valores de 0 incialmente
*/
'use strict'

const {it, expect} = require("@jest/globals");
const Sudoku = require("./sudoku");

describe('sudoku game ==> tests !!!', ()=>{
    const sudoku = new Sudoku();

    it('Calcular el la cantidad de Areas del Sudoku 1 area tiene 9 casillas', ()=>{
        const response = sudoku.getBoxesArea(1);
        expect(response).toBe(9);
    });

    it('Calcular el la cantidad de Areas del Sudoku 3 area tiene 27 casillas', ()=>{
        const response = sudoku.getBoxesArea(3);
        expect(response).toBe(27);
    });

    it('Calcular el la cantidad de Areas del Sudoku 9 area tiene 81 casillas', ()=>{
        const response = sudoku.getBoxesArea(9);
        expect(response).toBe(81);
    });

    it('Generar el sudoku para 0 tiene que ser 81 valores de 0 incialmente', ()=>{
        const response = sudoku.generatorSudoku('005910308009403060027500100030000201000820007006007004000080000640150700890000420');
        expect(response).toBe(81);
    });
});

/*
005 910 308 
009 403 060 
027 500 100 

030 000 201 
000 820 007 
006 007 004 

000 080 000
640 150 700
890 000 420







*/