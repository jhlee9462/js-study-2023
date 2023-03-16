alert('즐겁게 문제를 푸시다가 지겨우면 0을 입력하세요');

let difficulty = +prompt('난이도를 설정합니다. 1. 상 (1 ~ 100) 2. 중 (1 ~ 50) 3. 하 (1 ~ 20)');

let maxNum;
if (difficulty === 1) {
    maxNum = 100;
} else if (difficulty === 2) {
    maxNum = 50;
} else if (difficulty === 3) {
    maxNum = 20;
} else {
    alert('1 ~ 3 이외의 숫자를 입력하셨으니 중 난이도로 선택됩니다.');
    maxNum = 50;
}

let userNum;
let quizNum = 1;
let correctNum = 0;
while (true) {

    let firstNum = Math.floor(Math.random() * maxNum + 1);
    let secNum = Math.floor(Math.random() * maxNum + 1);
    let operator = Math.floor(Math.random() * 3 + 1);
    let operString;

    let answer;
    switch (operator) {
        case 1:
            answer = firstNum + secNum;
            operString = '+';
            break;
        case 2:
            operString = '-';

            while (firstNum === secNum) {
                secNum = Math.floor(Math.random() * maxNum + 1);
            }

            if (firstNum < secNum) {
                let temp = firstNum;
                firstNum = secNum;
                secNum = temp;
            }

            answer = firstNum - secNum;
            break;
        default:
            answer = firstNum * secNum;
            operString = 'X';
    }

    userNum = +prompt(`Q${quizNum}. ${firstNum} ${operString} ${secNum} = ??`);
    if (userNum === 0) {
        // 마지막 입력 0 은 틀린횟수에서 제외하기 위해 +1을 해줌.
        alert(`게임을 종료합니다.\n정답횟수 : ${correctNum}회, 틀린횟수 : ${quizNum - correctNum + 1}`);
        break;
    } else if (userNum === answer) {
        alert('정답입니다!');
        ++correctNum;
    } else {
        alert('틀렸어요~');
    }

    ++quizNum;
}