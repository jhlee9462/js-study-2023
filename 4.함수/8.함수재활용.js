const NOT_FOUND = -1;

// 배열의 특정 데이터의 인덱스를 구하는 함수
function myIndexOf(arr, element) {
    for (let i = 0; i < arr.length; i++) {
        if (element === arr[i]) {
            return i;
        }
    }
    return NOT_FOUND;
}

// 위 함수를 재활용했다.
function myIncludes(arr, element) {
    return myIndexOf(arr, element) !== NOT_FOUND;
}

let foodList = ['짜장면', '탕수육', '고추잡채', '족발'];
let idx = myIndexOf(foodList, '탕탕수육'); // idx : 1

console.log(idx);