// 문자 타입으로 변환
let a = 10, b = 20;
let result = String(a) + String(b);
console.log(result);

result = a.toString() + b.toString();
console.log(result);

// 숫자 타입으로 변환
let m = '10', n = '5.15';
result = Number(m) + Number(n);
console.log(result);

result = parseInt(m) + parseFloat(n);

Boolean('hello');
Boolean('');
Boolean(0);

!!'hello';
!!'';
!!0;

