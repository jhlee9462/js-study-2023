

while (true) {
    alert('난이도를 설정하세요~~~')
    let difficulty; 
    const HIGH = 1, MIDDLE = 2, LOW = 3;

    let tryNum;
    while (true) {
        difficulty = +prompt('1. 상 (기회 3) 2. 중 (기회 6) 3. 겁쟁이들의 쉼터 (기회 10)');
        if (difficulty < HIGH || difficulty > LOW || Math.floor(difficulty) !== difficulty) {
            alert('1 ~ 3 사이의 정수를 입력해 주세요');
            continue;
        } else {
            if (difficulty === HIGH) {
                tryNum = 3;
            } else if (difficulty === MIDDLE) {
                tryNum = 6;
            } else if (difficulty === LOW) {
                tryNum = 10;
            }
            break;
        }
    }

    const INIT_TRY_NUM = tryNum;

    let minValue = 1, maxValue = 50;
    let answer = Math.floor(Math.random() * maxValue + minValue);

    
    while (true) {

        let userNum = +prompt(`${minValue} ~ ${maxValue} 사이의 무작위 숫자를 ${tryNum}번 안에 맞춰보세요`);

        if (userNum < minValue || userNum > maxValue) {
            alert(`${minValue} ~ ${maxValue} 사이의 숫자만 입력해 주세요`);
            continue;
        }

        if (userNum > answer) {
            alert('다운!!!');
            maxValue = userNum - 1;
        } else if (userNum < answer) {
            alert('업!!!');
            minValue = userNum + 1;
        } else {
            alert(`정답!!! ${INIT_TRY_NUM - tryNum + 1} 번 만에 맞추셨네요!`);
            break;
        }

        alert(`기회가 ${--tryNum}번 남았습니다.`);
        if (tryNum > 0) {
            continue;
        } else {
            alert(`기회를 모두 소진했습니다. GAME OVER!!! 정답은 ${answer} 였습니다~~`);
            break;
        }
    } // end each game loop

    if (!confirm('게임을 다시 하실래요?')) {
        alert('수고하셨습니다.')
        break;
    }
} // end all game loop