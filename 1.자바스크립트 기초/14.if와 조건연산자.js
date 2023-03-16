let money = 8000;

// let food = money >= 2000 ? '라면' : '삼각김밥';
let food = money >= 5000 ? '볶음밥' : (money >= 3000 ? '라면' : '삼각김밥');

// if (money >= 2000) {
//     food = '라면';
// } else {
//     food = '삼각김밥';
// }

// if (money >= 5000) {
//     food = '볶음밥';
// } else if (money >= 3000) {
//     food = '라면';
// } else {
//     food = '삼각김밥';
// }
 
console.log(`선택한 음식 : ${food}`);