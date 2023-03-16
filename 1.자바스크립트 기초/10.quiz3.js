let height = prompt('정사각형을 그립니다.\n높이는 얼마입니까?');
let result = '';

for (let i = 0; i < height; i++) {
    for (let j = 0; j < height; j++) {
        result += '* ';
    }
    result += '\n';
}

alert(result);