let numbers = [1, 4, 2, 6, 3, 7];

/**
 * Requirements
 * 1. Sắp sếp tăng dần
 * 2. Sắp sếp giảm dần
 */

// const ASC_numbers = numbers.sort(function(a, b) {
//     return a - b;
// });

const DESC_numbers = numbers.sort(function(a, b) {
    console.log(a, b);
    // [4, 2, 1, 6, 3, 7]
    return b - a;// 1 - 2
});
console.log(DESC_numbers);
