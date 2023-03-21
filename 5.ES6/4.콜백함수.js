// 정수 n을 전달하면 1부터 n까지의 모든 짝수를 출력하는 함수
function showEvenNumber(n) {
  for (let i = 0; i <= n; i++) {
    if (i % 2 == 0)
      console.log(i);
  }
}

function showOddNumber(n) {
  for (let i = 0; i <= n; i++) {
    if (i % 2 == 1)
      console.log(i);
  }
}

function showOddOrEvenNumber(n, delim) {
  for (let i = 0; i <= n; i++) {
    if (i % 2 == delim)
      console.log(i);
  }
}

function showMultipleNumber(n, multiNumber) {
  for (let i = 0; i <= n; i++) {
    if (i % multiNumber == 0)
      console.log(i);
  }
}

function showNumber(n, callback) {
  for (let i = 0; i <= n; i++) {
    if (callback(i))
      console.log(i);
  }
}

showNumber(50, n => n % 3 === 0);

function showMessage(message, howTo) {
  // 공통기능
  document.body.style.background = 'gray';

  setTimeout(() => {
    // 개별기능
    howTo(message);

    // 공통기능
  alert('하하호호!');
  }, 500);
}

showMessage('메롱메롱', alert);