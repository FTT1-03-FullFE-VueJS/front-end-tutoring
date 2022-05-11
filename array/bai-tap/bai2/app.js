let array_numbers = [7, 1, 9, 8, 2, 5, 3];
// max = 1;
// max = 2;
// max = 5;
// max = 7;
/**
 * Find number is max in array
 * @param {array} numbers
 * @returns {number}
 */
function findMax1(numbers) {
    let max = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > max) {
            max = numbers[i];
        }
    }
    return max;
}

// const result = findMax1(array_numbers);
// console.log(result);

// function findMax2(numbers) {
//     // b1: sort array từ bé tới lớn
//     // b2: return pop array
//     let numbersSortedASC = numbers.sort(function(secound_element, first_element) {
//         return secound_element - first_element;
//     });
//     return numbersSortedASC.pop();
// }
// const result2 = findMax2(array_numbers);
// console.log(result2);

// bt1
// bt2: tim so be nhat
// - c1, c2, c3
