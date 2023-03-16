for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0)
        // break;
        continue;
    console.log(i);
}

while (true) {
    let n = +prompt('숫자를 입력!!');

    if (n === 0) break;
    else if (n === 1) continue;

    alert('메롱메롱~~');
}
alert('끝났지롱');