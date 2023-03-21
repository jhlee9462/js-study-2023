// 함수 선언문 방식
// function multi(n1, n2) {
//     return n1 * n2;
// }

// 함수 표현식
// const multi = function (n1, n2) {
//     return n1 * n2;
// };

// 화살표 함수
// 중괄호 안의 내용이 한줄이면 중괄호 생략 가능 & return 문이면 return 도 생략 가능
const multi = (n1, n2) => n1 * n2;

const r1 = multi(10, 3);
console.log(`r1 : ${r1}`);

// function sayHello() {
//     console.log('안녕하세요');
// }

// const sayHello = function () {
//     console.log('안녕하세요');
// };

const sayHello = () => console.log('안녕하세요');

sayHello();

const kim = {
  name: '김철수',
  age: 30,
  greeting: sayHello,
  dance: () => console.log('춤을 신나게 춥니다.')
};

kim.dance();

// 정수 1개를 전달하면 해당 정수의 제곱값을 리턴하는 화살표함수 pow 작성해보세요.
const pow = number => number ** 2;

console.log(pow(56));

// 함수 선언문과 함수 표현식(화살표 함수 포함)의 차이
console.log('==========================');

console.log(sub(20, 10));

// 함수 선언문은 호이스팅된다.
function sub(n1, n2) {
  return n1 - n2;
}

// 표현식은 불가.
// console.log(divide(30, 6));

const divide = (n1, n2) => n1 / n2;

console.log(divide(30, 6));