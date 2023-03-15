let firstNum = +prompt('첫 번 째 숫자를 입력');
let secondNum = +prompt('두 번 째 숫자를 입력');

// 첫 번 째 숫자가 무조건 작다고 가정
if (firstNum > secondNum) {
    let temp = firstNum;
    firstNum = secondNum;
    secondNum = temp;
}

let num = firstNum;
let total = 0;
while (num <= secondNum) {
    total += num++;
}

alert(`${firstNum} ~ ${secondNum} 까지의 누적합: ${total}`);