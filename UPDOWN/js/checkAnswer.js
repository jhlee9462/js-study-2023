function correctAnswer($target) {
    // 1. finish 아이디 박스에 class 'show' 부여
    const $finish = document.getElementById('finish');
    $finish.classList.add('show');

    // 2. #numbers 클릭 이벤트 해제
    document.getElementById('numbers').onclick = null;

    // 3. 정답 icon 에 id="move" 부여
    $target.setAttribute('id', 'move');
}

function caseUpORDown($target, {location, changeAmount, selectedCase, otherCase}) {
    // 1. #begin의 숫자값이 클릭값 +1 로 변경
    document.getElementById(location).textContent = +$target.dataset.iconNumber + changeAmount;

    // 2. #down의 selected를 제거, #up에 selected 추가
    document.getElementById(otherCase).classList.remove('selected');
    document.getElementById(selectedCase).classList.add('selected');

    // 3. 자기 자신 아이콘 포함 이전형제들 모두 삭제
    const $numbers = document.getElementById('numbers');

    let $delTarget = $target;
    while ($delTarget) {
        let $nextTarget;
        if (selectedCase === 'up')
            $nextTarget = $delTarget.previousElementSibling;
        else
            $nextTarget = $delTarget.nextElementSibling;
        $numbers.removeChild($delTarget);
        $delTarget = $nextTarget;
    }
}

export { correctAnswer, caseUpORDown };