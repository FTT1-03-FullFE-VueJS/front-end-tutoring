const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

/**
 * 1. Lọc những phần tử trong numbers và chỉ lấy những phần tử là số chẵn
 * 2. Lọc những phần tử trong numbers và chỉ lấy những phần tử là số lẻ
 */
const filter_even_number_handler = function(item) {
    if (item % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

const filter_odd_number_handler = function(item) {
    if (item % 2 !== 0) {
        return true;
    } else {
        return false;
    }
}

const even_numbers = numbers.filter(filter_even_number_handler);
const odd_numbers = numbers.filter(filter_odd_number_handler);

console.log('Even numbers: ', even_numbers);
console.log('Odd numbers: ', odd_numbers);
