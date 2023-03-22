// 증감을 동시에 구현하려면 아래처럼 하면 안됨
// const increase = (() => {
//     let count = 0;
//     return () => ++count;
// })();

// const decrease = (() => {
//     let count = 0;
//     return () => --count;
// })();

// 아래처럼 하나의 함수에 두 개의 헬퍼함수를 만들어 객체에 담아서 리턴하면 된다.
// const counter = (() => {
//     let count = 0;

//     return {
//         increase: () => ++count,
//         decrease: () => --count
//     };
// })();

// const {increase, decrease} = counter; // 다음챕터에서 배울 예정

// console.log(increase());
// console.log(increase());
// console.log(decrease());    

// 콜백 클로저
const counter_ = (() => {
    let count = 0;

    return callback => count = callback(count);
})();

console.log(counter_(c => ++c));
console.log(counter_(c => c += 3));