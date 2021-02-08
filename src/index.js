// You should implement your task here.

module.exports = function towelSort(matrix) {
    if (!matrix || matrix.length == 0) return [];
    const arr = [];
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (i % 2 == 1) {
                matrix[i].sort(function (a, b) {
                    return b - a;
                });
            } else
                matrix[i].sort(function (a, b) {
                    return a - b;
                });
        }
    }
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            arr.push(matrix[i][j]);
        }
    }
    return arr;
};
