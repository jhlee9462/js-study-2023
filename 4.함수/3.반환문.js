function add(n1, n2) {
    return n1 + n2; // 탈출문

    console.log('메롱');
}

// 리턴이 없는 함수 (void 함수)
function multi(n1, n2) {
    let result = n1 * n2;
    console.log(`${n1} x ${n2} = ${result}`);
}

// 리턴이 없는 함수는 변수에 담지말고, 다른함수에 인수로 전달 x
var n3 = multi(12, 23);
console.log(n3);

multi(add(4, 3), add(5, 5));

let r4 = add(multi(3, 2), 40);
console.log(`r4: ${r4}`);

// return 탈출문
function callName(nickName) {

    let prohibits = ['멍청이', '돌아이', '홍길동'];

    if (prohibits.includes(nickName)) {
        console.log('부적절한 닉네임입니다.');
        return;
    }
    
    console.log(`${nickName}님 안녕하세요!`);
}

callName('돌아이');

function stopLoop() {
    while (true) {
        flag = prompt('명령어를 입력하세요!')
        if (flag === '멈춰') {
            return;
        }
        alert(flag);
    }
    alert('수고용~');
}

stopLoop();