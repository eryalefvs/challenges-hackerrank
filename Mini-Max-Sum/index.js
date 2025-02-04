'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function (inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function () {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'miniMaxSum' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function miniMaxSum(arr) {
    let arrSort = arr.sort();
    let sumMax = 0;
    let sumMin = 0;

    for (let i = 0; i < 4; i++) {
        sumMax += arrSort[i];
    }

    for (let i = 1; i <= 4; i++) {
        sumMin += arrSort[i];
    }

    console.log(sumMax)
    console.log(sumMin)
}

function main() {

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    miniMaxSum(arr);
}