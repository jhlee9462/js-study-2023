const userList = [{
    account: 'abc1234',
    userName: '대길이',
    job: '추노',
    address: '서울',
    hobby: ['수영', '축구', '테니스']
  },
  {
    account: 'banana',
    userName: '빠나나',
    job: '과일',
    address: '서울',
    hobby: ['푸드파이터', '축구']
  },
  {
    account: 'park1234',
    userName: '주차왕',
    job: '발렛파킹',
    address: '경기',
    hobby: ['족구', '축구', '테니스', '영화감상']
  },
  {
    account: 'fire',
    userName: '불꽃남자카리스마',
    job: '게이머',
    address: '서울',
    hobby: ['독서']
  }
];

// 회원목록에서 회원정보를 출력하는 함수
function alertUserInfo(wannaSay) {
  for (const user of userList) {
    wannaSay(user);
  }
}

// alertUserInfo(user => alert(`제 이름은 ${user.account}이고요 직업은 ${user.job}입니다.`));

// 배열 고차 함수
// forEach() : 배열의 요소를 반복하면서 하나씩 꺼내줌
userList.forEach(user => console.log(`안녕하세요 저는 ${user.userName}입니다. 제가 사는 곳은 ${user.address}입니다.`));

const numbers = [10, 20, 30, 40];

let total = 0;
numbers.forEach(number => total += number);
console.log(`total : ${total}`);

// 취미가 딱 2개인 회원들만 필터링
const twoHobbyUsers = [];
userList.forEach(user => {
  if (user.hobby.length === 2) {
    twoHobbyUsers.push(user);
  }
});

console.log(twoHobbyUsers);

// 특정 필터조건에 의해 필터링하는 함수
function filterUser(condition) {
  const filteredUsers = [];
  userList.forEach(
    user => {
      if (condition(user)) {
        filteredUsers.push(user);
      }
    }
  );
  console.log(filteredUsers);

  return filteredUsers;
}

filterUser(user => user.address === '서울');

// 배열 고차함수 filter()
// 특정 조건에 의해 필터링된 배열을 반환
console.log('=================');

const numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const evenNumbers = numberArray.filter(n => n % 2 === 0);
console.log(evenNumbers);

const fruitUser = userList.filter(u => u.job === '과일');
console.log(fruitUser);

// 배열 고차함수 map()
// 특정 배열에서 특정 조건에 맞는 값들만 따로 모아서 매핑한 배열을 반환
const twoTimes = numbers.map(n => n ** 2);
console.log(twoTimes);

const userNames = userList.map(u => u.userName);
console.log(userNames);

function myMap(callback) {
  const mappedNumbers = [];
  for (const number of numbers) {
    mappedNumbers.push(callback(number));
  }
  return mappedNumbers;
}

// userList에서 원하는 프로퍼티 값을 매핑하는 함수
function myMap2(callback) {
  const mappedUsers = [];
  for (const user of userList) {
    mappedUsers.push(callback(user));
  }
  return mappedUsers;
}

const userNames2 = myMap2(u => u.userName);
console.log(userNames2);

// 객체를 리턴할 때는 소괄호로 묶어줘야 한다.
const userInfos = myMap(u => ({
  userName: u.userName,
  userAddress: u.address
}));

const appleBasket = [{
    color: 'green',
    sweet: 13
  },
  {
    color: 'red',
    sweet: 14
  },
  {
    color: 'red',
    sweet: 11
  },
  {
    color: 'green',
    sweet: 6
  },
  {
    color: 'green',
    sweet: 7
  },
  {
    color: 'green',
    sweet: 9
  },
];

// 사과중 녹색이면서 당도가 9이상인 사과만 선별하여 이 사과는 xxx색이며 당도가 xxx입니다. 라는 문자열이 모여있는 배열을 리턴하세요.

appleBasket
  .filter(apple => apple.color === 'green' && apple.sweet >= 9)
  .map(apple => `이 사과는 ${apple.color}색이며 당도가 ${apple.sweet}입니다.`)
  .forEach(m => console.log(m));

// userList에서 서울사는 user들의 첫번째 취미만 배열에 모아서 리턴
userList
  .filter(u => u.address === '서울')
  .map(u => ({
    fisrtHobby: u.hobby[0],
    name: u.userName
  }))
  .forEach(info =>
    console.log(`${info.name}회원의 첫번째 취미는 ${info.fisrtHobby}입니다.`));