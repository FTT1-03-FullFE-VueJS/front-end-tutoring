const student = {
    name: 'Nguyen Van A'
}

setTimeout(() => {
    student.name = 'Tran Thi B';
}, 2000);

setTimeout(() => {
    console.log(student);
}, 1000);

setTimeout(() => {
    console.log(student);
}, 3000);

// 0 - 1000 - 2000 - 3000
/**
 * 0: name: 'Nguyen Van A'
 * 1000: name: 'Nguyen Van A'
 * 2000: name = 'Tran Thi B';
 * 3000: name = 'Tran Thi B'
 */