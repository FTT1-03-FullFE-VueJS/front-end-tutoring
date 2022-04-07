/**
 * B1: Phân tích bài toán
 * - Xác định đầu vào (input)
 *   + Kiểu dữ liệu sẽ truyền vào là gì
 * --> a, b, c, d
 * - Xác định đầu ra (output)
 *   + Kiểu dữ liệu sẽ trả về là gì
 * --> Số lớn nhất trong 4 số đó
 */

/**
 * Show max number in the list numbers
 *
 * @param {int} a
 * @param {int} b
 * @param {int} c
 * @param {int} d
 *
 * @returns int
 */
function max(a, b, c, d) {
  let max = a;
  if (b > max) {
    max = b;
  }
  if (c > max) {
    max = c;
  }
  if (d > max) {
    max = d;
    return max;
  }

  return max;
}

max(1, 2, 3, 4);

// function max(a, b, c, d, e, f, g) {
//   let max = a; // max = 1

//   if (b > max) { // 4 > 1
//     max = b; // max = 4
//   }
//   if (c > max) { // 2 > 4
//     max = c;
//   }
//   if (d > max) { // 3 > 4
//     max = d;
//   }

//   return max; // 4
// }

// max(4, 4, 2, 3, 1, 2, 3);
// max(4, 4, 2, 3, 1, 2, 3);
// max(4, 4, 2, 3, 1, 2, 3);
// max(4, 4, 2, 3, 1, 2, 3);
