fullName = 'Nguyen Van A'; // 4 byte // Tạo ra biến fullName ở phạm vi global

function testFun() {
    let age = 20; // 4 byte // Tạo ra biến age ở phạm vi global
}

testFun();

console.log(fullName);
console.log(age);