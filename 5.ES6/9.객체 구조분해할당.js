const emp = {
    empName: '빡빡이',
    age : 29,
    hireDate: '2014-01-01',
    birthDay: '1995-12-31'
};

// const { empName, age, birthDay } = emp;

// console.log(`${empName}님의 나이는 ${age}살이고 생일은 ${birthDay}입니다.`);

const { empName: en, age: a, birthDay: bd } = emp;

console.log(`${en}님의 나이는 ${a}살이고 생일은 ${bd}입니다.`);

const { birthDay, age, ...rest } = emp;

console.log(birthDay);
console.log(age);
console.log(rest);

// 객체 안전 복사 : 스프레드
const copyEmp = {
    ...emp,
    address: '서울시',
    hobbies: ['놀고먹기', '낮잠'],
    empName: '망둥어'
};

console.log(copyEmp);