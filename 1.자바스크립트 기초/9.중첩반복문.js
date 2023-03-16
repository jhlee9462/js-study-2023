// 구구단 2 ~ 5 단 랜덤 출력

let dan = Math.floor(Math.random() * 4 + 2);

for (let i = 1; i < 10; i++) {
    console.log(`${dan} X ${i} = ${dan * i}`);
}

for (dan = 2; dan < 10; dan++) {
    for (let i = 1; i < 10; i++) {
        console.log(`${dan} X ${i} = ${dan * i}`);
    }
    console.log();
}