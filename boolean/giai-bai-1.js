// Bai 1
var x = 10;

if (x < 0) {
  console.log('x la so am');
} else if (x === 0) {
  console.log('x la so 0');
} else if (checkInteger(x)) {
  console.log('x la so nguyen');
} else if (checkDecimal(x)) {
  console.log('x la so thap phan');
}

/**
 * Check a number is a integer
 *
 * @param {Number} x
 * @return bool
 */
function checkInteger(x) {
  if (x > 0 && (x % 2 === 0 || x % 2 === 1)) {
    return true;
  } else {
    return false;
  }
}

/**
 * Check a number is a decimal
 *
 * @param {Number} x
 * @return bool
 */
function checkDecimal(x) {
  if (x > 0 && (x % 2 !== 0 || x % 2 !== 1)) {
    return true;
  } else {
    return false;
  }
}
