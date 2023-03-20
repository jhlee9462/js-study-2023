/* 
Q. n의 약수의 개수를 구하기
1. 정수 n을 전달받아 n의 약수들을 출력하고 
  약수의 개수를 리턴하는 함수 calcDivisor를 정의하세요.
2. 약수의 출력은 함수 내부에서 이뤄져야 합니다.
3. 힌트) 전달받은 n을 1부터 n까지 지속적으로 나누어
   나누어 떨어졌을 시 약수의 개수 카운트를 1증가시키고 출력.
*/

function calcDivisor(n) {
    let count = 0;
    // 자기 자신을 제외하면 가장 큰 약수는 무조건 2로 나눈 값보다 작거나 같다.
    for (let i = 1; i <= Math.floor(n / 2); i++) {
        if (!(n % i)) {
            console.log(`${++count}번째 약수 : ${i}`);
        }
    }
    // 자기 자신과 1 은 무조건 해당 수의 약수이다.
    console.log(`${++count}번째 약수 : ${n}`);
    return count;
}

// 호출부
var divCount = calcDivisor(20);
console.log(`약수의 개수: ${divCount}개`);