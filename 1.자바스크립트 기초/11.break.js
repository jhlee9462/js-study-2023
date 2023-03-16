// 50000번의 루프 중 1 ~ 10 사이의 랜덤숫자중 3이 나오면 반복을 중간에 멈추고 싶다.
let random;

for (var i = 0; i < 50000; i++) {
    random = Math.floor(Math.random() * 10 + 1);

    console.log(`random ${i + 1} : ${random}`);
    if (random === 3)
        break;
}

console.log("=======================");

// 중첩 반복문에서 break
outer: for (let i = 0; i < 3; i++) {
    inner: for (let j = 0; j < 2; j ++) {
        if (j === i)
            break outer;
        console.log(`[ ${i}, ${j} ]`);
    }
}