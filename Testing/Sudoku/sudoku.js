'use strict';

// Debemos crear un sudoku con funcionalidades para testear
export default class Sudoku{

    // 1 area tiene 9 casillas
    getBoxes(){
        return 9;
    }

    getBoxesArea(area){
        let boxes = this.getBoxes();
        return area * boxes;
    }

    generatorSudoku(value){
        const sudoku = [];
        const row = [[]];
        let count = 0;
        for (const iterator of value) {

            if(count < 9){
                row.push(parseInt(iterator));
                count++;
            }else{
                sudoku.push(row);
                this.voidArray(row);
                count = 0;
            }
        }

        return sudoku;
    }

    voidArray(array){
        for (let i = array.length; i > 0; i--) {
            array.pop();
        }
        return array;
    }
}

// module.exports = Sudoku;

// test code
let text = '005910308009403060027500100030000201000820007006007004000080000640150700890000420';
let obj = new Sudoku();
console.log(obj.generatorSudoku(text));