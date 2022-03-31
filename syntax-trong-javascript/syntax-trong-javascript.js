// Comment
/**
 *
 */

/**
 *
 */

/**
 * Function tính tổng 2 số
 * @param {Number} a
 * @param {Number} b
 * @returns {Integer}
 */
function sum(a, b) {
  // Nếu a chia hết cho 2 thì mình đổi giá trị của biến a thành 10
  if (a % 2 == 0) {
    a = 10;
  }

  return a + b; // 3
}

/**
 * Funtion chuyển đổi một string thành một con số
 * @param {String|Number} val
 * @returns {Number}
 */
function convertToNumber(val) {
  return parseInt(val) + 10;
}

// console.log(convertToNumber('2'));
// console.log(convertToNumber(10));

/**
 * Show name of the user
 * @param {String} name
 * @returns {Void}
 */
function showName(name) {
  console.log(name);
}

showName('pham dinh hung');
