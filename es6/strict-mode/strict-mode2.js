// "use strict"

// 1.
// fullName = 'Nguyen Van A'; // Tạo ra biến fullName ở phạm vi global

// function testFun() {
//     age = 20; // Tạo ra biến age ở phạm vi global
// }

// testFun();

// console.log(fullName);
// console.log(age);


// 2. - Báo lỗi khi gán lại giá trị cho thuộc tính có writable: false
// const student = {
//     fullName: 'Nguyen Van B'
// }

// student = Object.freeze({
//     fullName: 'Nguyen Van B'
// })

// Object.defineProperty(student, 'fullName', {
//     value: 'Nguyen Van B',
//     writable: true,
//     writable: false,
// });

// 3. - Báo lỗi khi hàm có tham số trùng tên
// function sum(a, a) {

// }

// 4. - Khai báo hàm trong "code block" thì hàm sẽ thuộc phạm vi "code block"
// {
//     function sum(a, b) {

//     }
// }
// console.log(sum(1, 2));

// 5. - Không đặt tên biến, tên hàm bằng một số tự khóa nhạy cảm của ngôn ngữ
// const class = 10;
// const private = 20;