/**
 * number
 * string
 * object
 * array
 * any
 */

// let array:number = [1, 2, 3, 4];
// let array:string = ['string1', 'string1', 10];
// let array:object = [{}, {}, 10, 'string'];
// let array:array = [[1, 2, 3], [4, 5, 6], [], {} , 'string'];
// let array:any = [1, 'string', {}, []];

// Filter
// Map
// Sort
let array = [10, 1, 2, 6, 3, 4, 8, 5, 'hello', 'nhan', 7, 9, 'oke'];

/**
 * Convert data in array to numbers
 * @param {array} numbers
 * @returns {array}
 */
function covertNumbers(numbers) {
    // B1: Lọc array numbers và chỉ giữ lại những element nào là number
    let arrayFiltered = numbers.filter(function(element) {
        // typeof: trả ra kiểu dữ liệu của element
        if (typeof element === 'string') {
            return false;
        }
        if (typeof element === 'number') {
            return true;
        }
    });
    // B2: Sắp sếp array theo thứ tự tăng dần
    let arraySorted = arrayFiltered.sort(function(secound_element, first_element) {
        return secound_element - first_element;
    });
    // B3: Trả về array hoàn chỉnh
    return arraySorted;
}

const result = covertNumbers(array);
// innerHTML, innerText
// console.log(result);
const arrayHTML = result.map(function(element) {
    return '<li>'+ element +'</li>';
});

const arrayJoined = arrayHTML.join('');

const wrapperEl = document.querySelector('#wrapper');
wrapperEl.innerHTML = arrayJoined;
