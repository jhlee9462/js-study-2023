// 자바스크립트의 함수는 함수를 리턴할 수 있음
/*
function calculator(n1, n2) {

    function add() {
        return n1 + n2;
    }

    return add;
}
*/
// 축약 버전
// const calculator = (n1, n2) => () => n1 + n2;
// const zzz = calculator(10, 20);
// console.log(zzz());
// console.log(typeof zzz);

// ---------------------------------------------------
// 전역변수 사용 자제
// let count = 0; // 카운팅 변수 (전역 변수)

// // 카운트를 올리는 함수
// const increase = () => ++count;

// console.log(increase());
// console.log(increase());

// count = 999;

// console.log(increase());

// -----------------------------------------------------
// 지역변수를 사용하면 변수의 값을 유지하지 못한다.
// const increase = () => {
//     let count = 0; // 지역변수
//     return ++count;
// }

// console.log(increase());
// console.log(increase());
// console.log(increase());

// ------------------------------------------------------
// 상태값 유지를 위해서는 클로저를 사용해야 한다.
// const increaseClosure = () => {
//     let count = 0; // 지역변수

//     return () => ++count;
// }

// const increase = increaseClosure();

// console.log(increase());
// console.log(increase());

// count = 999;

// console.log(increase());

// -------------------------------------------------------
// 즉시 실행 함수 : 정의와 동시에 호출
const increase = (() => {
    let count = 0;
    return () => ++count;
})();

console.log(increase());
console.log(increase());
console.log(increase());