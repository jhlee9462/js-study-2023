/*
    prompt 창을 띄워 사용자에게 숫자를 입력해 달라고 요청한 후, 입력받은 값들을 배열에 순차적으로 저장합니다.
    그만이라고 입력하면 질문을 멈추고 입력했던 숫자배열과 숫자의 총함(배열 요소의 합)을 계산하여 출력하세요.
*/
let nums = [];
while (true) {
    let num = prompt(`숫자를 입력하세요.\n그만두려면 '그만'이라고 입력하세요!`);

    if (+num) {
        num = +num;
    } else if (num === '그만') {
        break;
    }

    nums.push(num);
}

let total = 0;
for (let num of nums) {
    total += num;
}

alert(`입력한 숫자 목록 [${nums}]\n입력한 숫자 총합: ${total}`);