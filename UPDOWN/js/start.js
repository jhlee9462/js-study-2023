import gameData from "./gameData.js";
import {
    correctAnswer,
    caseUpORDown
} from "./checkAnswer.js";

// 정의부
export default function gameStart(iconCount) {

    const $numbers = document.getElementById('numbers');

    // 구슬을 100개 만들어야 함.
    const makeIcon = (idx) => {
        const $newIcon = document.createElement('div');
        $newIcon.classList.add('icon');
        $newIcon.textContent = idx;
        $newIcon.dataset.iconNumber = idx;

        $numbers.appendChild($newIcon);
    };

    for (let i = 0; i < iconCount; i++) {
        makeIcon(i + 1);
    }

    // 클릭 이벤트 부여하기
    $numbers.onclick = e => {
        if (!e.target.matches('#numbers .icon')) return;

        // console.log(`${e.target.dataset.iconNumber}번 구슬 클릭함`);

        // 사용자가 클릭한 아이콘의 숫자를 answer에 저장
        gameData.answer = +e.target.dataset.iconNumber;
        console.log(gameData);

        // 정답 검증 함수
        checkNumber(e.target);
    };
}

// 정답을 검증하는 함수
function checkNumber($target) {
    const {
        secret,
        answer
    } = gameData;


    // 실제정답이랑 선택값을 비교
    if (secret === answer) { // 정답인 경우
        correctAnswer($target);
    } else {
        let caseResult;

        if (secret > answer) { // UP인 경우
            caseResult = {
                location: 'begin',
                changeAmount: 1,
                selectedCase: 'up',
                otherCase: 'down'
            };
        } else { // DOWN인 경우        
            caseResult = {
                location: 'end',
                changeAmount: -1,
                selectedCase: 'down',
                otherCase: 'up'
            };
        }
        caseUpORDown($target, caseResult);
    }
}