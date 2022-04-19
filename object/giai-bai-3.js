/**
 * Input: Danh sách tiền lương
 * Ouput: Tổng lương trong danh sách đó
 */

/**
 * C1: Biến object salaries thành một array chỉ chứa tiền lương
 *     Tính tổng những biến trong đó
 */

 let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
  John2: 100,
  Ann2: 160,
  Pete2: 130,
}

// function sumSalaries(salaries) {
//     let listSalaries = Object.values(salaries);
//     let total = 0;
//     for (let i=0; i<listSalaries.length; i++) {
//         total += listSalaries[i];
//     }

//     return total;
// }

function sumSalaries2(salaries) {
    let total = 0;
    for (const [key, value] of Object.entries(salaries)) {
        total = total + value;
    }

    return total;
}

const total = sumSalaries2(salaries);
console.log(total);

