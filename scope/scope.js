function counter() {
    let count = 1;
    function increase() {
        return ++count;//count = count + 1
    }

    return increase;
}

let counter2 = counter();
console.log(counter2());//2
console.log(counter2());//3
console.log(counter2());//4
console.log(counter2());//5
