// Đầu của array, đuôi của array
/**
 * đầu: 11
 * đuôi: 55
 */
const ages = [11, 22, 33, 44, 55];
console.log('1. Push method');
console.log('Before: ', ages);
ages.push(66);
console.log('After: ', ages);
console.log('-------------------');

console.log('2. Unshift method');
console.log('Before: ', ages);
ages.unshift(0);
console.log('After: ', ages);
console.log('-------------------');

console.log('3. Pop method');
console.log('Before: ', ages);
ages.pop();
console.log('After: ', ages);
console.log('-------------------');

console.log('4. Shift method');
console.log('Before: ', ages);
ages.shift();
console.log('After: ', ages);
