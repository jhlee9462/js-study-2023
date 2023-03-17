let a = 10;
let b = a;

a = 15;

console.log(b);

var arr1 = [1, 2, 3, 4];
var arr2 = arr1;

arr1[1] = 999;
arr2[0] = 77;

console.log('arr1:', arr1);
console.log('arr2:', arr2);

let fruits = [
    '오렌지',
    '라임',
    '레몬'
]; // 배열 리터럴

let arrayLike = {
    0: '자몽',
    1: '포도',
    2: '한라봉',
    length: 3
};

console.log(typeof fruits);
console.log(fruits);

console.log(arrayLike);

console.log(`배열의 데이터 수: ${fruits.length}`);

let array = Array.from(arrayLike);

console.log(array);

console.log(`첫번째 데이터: ${fruits[0]}`);
console.log(`마지막 데이터: ${fruits[fruits.length - 1]}`);

// 배열 요소 수정
fruits[1] = '파인애플';

console.log(fruits);

// 수정시 주의사항
// fruits[4] = '초콜릿';

// console.log(fruits);

// 배열 내부데이터 전체 참조 (순회 : travis)
// 선형 탐색 : 순차적으로 확인해보면서 찾기
let target = '오렌지';
let findFlag = false;
for (let i = 0; i < fruits.length; i++) {
    if (fruits[i] === target) {
        console.log(`${target} 과일은 존재함!`);
        findFlag = true;
        break;
    }
}

if (!findFlag) {
    console.log(`${target} 이 존재하지 않음...`);
}

// for ~ of 반복문
let weekDays = ['월', '화', '수', '목', '금', '토', '일'];

console.log('===================');

for (let day of weekDays) {
    console.log(`${day}요일!`);
}