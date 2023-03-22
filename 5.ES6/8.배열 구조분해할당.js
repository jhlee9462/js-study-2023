const userNames = ['김철수', '박영희', '강감찬'];

const [kim, park, kang] = userNames;
console.log(kim);
console.log(park);
console.log(kang);

const [firstObj] = [{
    id: 1
}, {
    id: 2
}, {
    id: 3
}]
    .filter(obj => obj.id >= 2);
console.log(firstObj);

// 변수 교환하기
let first = 10, second = 20;

[first, second] = [second, first];
console.log(first);
console.log(second);

// 앞의 2개는 변수에 각각 넣고 나머지는 다시 배열로 묶고 할당
const numbers = [1, 3, 5, 7, 9, 11];

const [one, three, five, ...others] = numbers;
console.log(one);
console.log(three);
console.log(five);
console.log(others);

// 스프레드로 배열 간편복사
const foods = ['감튀', 'DQPC', '징거버거'];

// const copyFoods = foods; // 주소 복사
const copyFoods = [...foods]; // 실제 데이터 복사
console.log(copyFoods);

copyFoods = [...foods, '사이다', '쥬스']; // 추가도 간편하게 할 수 있다.