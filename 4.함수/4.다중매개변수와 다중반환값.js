// multi parameter: 매개변수가 n개인 경우

// 집합 자료구조를 매개변수로 사용
// [배열, 객체]

// n개의 정수를 전달하면 해당 정수의 총합을 구해주는 함수

// 스프레드 (ES6)
function addAll(...numbers) {
    let total = 0;

    for (let n of numbers) {
        total += n;
    }
    return total;
}

addAll(10, 20, 30, 40, 50);

// 함수의 리턴값은 언제나 하나!
// 2개의 정수를 전달하면 덧셈, 뺄샘, 곱셈, 나눗셈의 결과를 리턴받고 싶다면
function operateAll(n1, n2) {
    return {
        plus: addAll(n1, n2),
        minus: n1 - n2,
        multiply: n1 * n2,
        divide: n1 / n2
    };
}

let result = operateAll(10, 5);
console.log(result[plus]);