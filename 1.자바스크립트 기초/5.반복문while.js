// 10 ~ 0 카운트 다운 출력
let count = 10;

while (count >= 0) {
    console.log(count--);
} 

// 1 ~ 100 까지 홀수의 누적총합
var total = 0;
var n = 1; // 제어변수 (초기값: begin)

while (n <= 100) { // 조건식 (끝값: end)
    // 반복코드
    if (n % 2 !== 0)
        total += n;
    
    ++n;
}
console.log(total);