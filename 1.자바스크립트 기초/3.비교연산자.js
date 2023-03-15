var a = 5;
var b = '5';

console.log(a === b);

console.log(a !== b);

console.log('==========================');

console.log('0' == ''); // false
console.log(0 == ''); // true
console.log('0' == 0); // true
console.log(false == 'false'); // false
console.log(false == '0'); // true

console.log('==========================');

console.log('0' === '');
console.log(0 === '');
console.log('0' === 0);
console.log(false === 'false');
console.log(false === '0');

// 문자 대소비교
console.log('==========================');
console.log('ace' < 'ade');
console.log('cobra' < 'zebra');
console.log('cobra' < 'cobro');