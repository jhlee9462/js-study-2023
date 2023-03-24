import gameStart from "./start.js";

// =============================================================
// 실행부
// Java 나 C 의 main 함수 같은 느낌.
(() => {
    gameStart(+prompt('실행 횟수를 입력해 주세요'));
})();