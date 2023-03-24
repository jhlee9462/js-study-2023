// 변수 정의, 함수 정의만
// 단독으로 외부함수 호출 X

let x = 'foo';
// console.log(x);

function add(x, y) {
    return x + y;
}

// 여기서 정의된 변수와 함수를 내보내기
export { x, add };