// x ~ y 까지의 총합을 구하는 함수
/*
    description: x ~ y 까지의 총합을 구하는 함수
    parameter:
        - x: 누적총합의 시작값
        - y: 누적총합의 끝값
    return: 계산된 총합
*/
function calcRangeTotal(x, y) {
    // 심심하니 반복문 안쓰고 만드러봄...
    return calcSum(y) - calcSum(x);
}

function calcSum(x) {
    return x * (x + 1) / 2
}

console.log(calcRangeTotal(1, 5));

// 인수 (argument) : 함수를 호출할 때 함수에게 전달하는 값이나 표현식

// ES6
// 매개변수의 기본값
function sayHello(language = '한국어') {
    // ES5
    // language = language || '한국어';

    if (language === '한국어')
        console.log('안녕하세요!');
    else if (language === '영어')
        console.log('hello~');
    else if (language === '중국어')
        console.log('따자하오');
    else
        console.log('크크루삥뽕~');
}

sayHello();

// 매개변수가 없는 함수
function selectRandomPet() {
    let pets = ['멍멍이', '짹짹이', '꽥꽦이', '어흥이'];

    return pets[Math.floor(Math.random() * pets.length)];
}

let randomPet = selectRandomPet();
console.log(`랜덤동물: ${randomPet}`);