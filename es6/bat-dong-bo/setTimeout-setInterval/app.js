let countNumber2;
countNumber2 = setTimeout(function() {
    console.log('Thuc Thi Sau 5s');
}, 1000);// Thời gian thực thi function
clearTimeout(countNumber2);

let i = 1;

let countNumber1;
countNumber1 = setInterval(function() {
    if (i === 10) {
        clearInterval(countNumber1);
    }
    console.log(`Chay lan thu ${i++}`);
}, 1000);// Thời gian thực thi "LẠI" function
