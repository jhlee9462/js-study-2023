let num = +prompt('양의 정수를 입력!');

if (num <= 0 || Math.floor(num) !== num) {
    alert('양의 정수 입력하라고!');
    window.location.reload();
} else {
    let string = '';
    // let i = 1;

    // while (i <= num) {
    //     if (i % 2 !== 0) {
    //         string += '+';
    //     } else {
    //         string += '-';
    //     }
    //     ++i;
    // }
    
    for (let i = 1; i <= num; ++i) {
        if (i % 2 !== 0) {
            string += '+';
        } else {
            string += '-';
        }
    }

    alert(string);
}