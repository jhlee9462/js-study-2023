alert('난이도를 설정하세요~~~')
let difficulty = +prompt('1. 상 (기회 3) 2. 중 (기회 6) 3. 겁쟁이들의 쉼터 (기회 10)');

let tryNum;
if (difficulty === 1) tryNum = 3;
else if (difficulty === 2) tryNum = 6;
else if (difficulty === 3) tryNum = 10;
else {
    alert('1 ~ 3 이외의 숫자를 입력하셨으니 중으로 진행됩니다.');
    tryNum = 6;
}

let answer = Math.floor(Math.random() * 50 + 1);
let userNum = +prompt(`1 ~ 50 사이의 무작위 숫자를 ${tryNum}번 안에 맞춰보세요`);

while (true) {
    while (userNum < 1 || userNum > 50) {
        userNum = +prompt('1 ~ 50 사이의 숫자만 입력해 주세요');
    }

    if (userNum > answer) {
        alert('다운!!!');
    } else if (userNum < answer) {
        alert('업!!!');
    } else {
        alert('정답!!!');
        break;
    }

    alert(`기회가 ${--tryNum}번 남았습니다.`);
    if (tryNum > 0) {
        userNum = +prompt('다음 시도!');
    } else {
        alert('기회를 모두 소진했습니다. GAME OVER!!!');
        break;
    }
}