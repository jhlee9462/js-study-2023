// 함수 정의 - 만든다
function happyGreeting(yourName) {
    console.log(`${yourName}님 안녕하세요! 방가방가!`);
    console.log('오늘도 즐거운 하루되세요~~');
}

// 함수 호출 - 사용한다.
happyGreeting('뽀로로');

happyGreeting('삐리리');

function makeLine() {
    console.log('=======================');
}

for (let i = 0; i < 5; i++) {
    makeLine();
}

// 원의 넓이를 자주 구한다. 원주율 x 반지름 ^ 2
function calcAreaCircle(r) {
    return Math.PI * r ** 2;
}