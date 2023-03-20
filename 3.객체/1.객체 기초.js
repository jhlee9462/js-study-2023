// 객체 리터럴(값)
var dog = {
    // 프로퍼티 작성
    name: '뽀삐',
    kind: '진돗개',
    age: 3,
    owner: {
        name: 'lee',
        age: 30
    },
    // 예약어 가능
    for: 11,
    // 문자열 키 가능
    'for waiting': 12,
    // 다양한 값들 가능
    injection: true,
    hate: null,
    // 배열 값 가능
    favorite: ['산책', '간식'],
    // 메서드
    playWithChild: function() {
        console.log(`${this.name}이(가) 아이들과 놀아줍니다.`);
    }
};

var cat = {
    // 프로퍼티 작성
    name: '콩순이',
    kind: '블랙러시안',
    age: 2,
    favorite: ['낮잠자기', '방 어지럽히기'],
    injection: true
};

dog.playWithChild();
console.log(typeof dog);

// 객체에 저장된 데이터 참조
console.log(dog.name);
console.log(cat.age);
console.log(cat.favorite);

console.log(dog.favorite[0]);

dog.favorite.push('꼬리 흔들기');
console.log(dog);

dog.favorite.slice(1).splice(1, 1);

// 프로퍼티 참조 2
console.log(dog['injection']);

// key를 변수에 저장
let fv = 'favorite';
console.log(cat[fv]);

// 프로퍼티 값 수정
dog.age = 4;
cat.favorite[1] = '실뭉치';

dog['injection'] = 'false';

// 프로퍼티 동적 추가
cat.owner = '김철수';
console.log(cat);

// 프로퍼티 삭제
delete cat.owner;
console.log(cat);

console.log('=============================');

// 프로퍼티 존재 유무 확인
// key를 반드시 문자열로 표기해야 함.

console.log('age' in cat);

// master 라는 프로퍼티가 없으면 추가해라
if (!('master' in cat)) {
    cat['master'] = '김또또';
}
console.log(cat);

console.log('=====================');

// 객체를 순회하는 반복문
// key를 반복해서 추출해줌
for (let k in dog) {
    console.log(dog[k]);
}

//객체의 중첩구조
//예시 : 게시판

var articles = {
    totalCount: 25578,  //총 게시물 수
    admin: 'abc1234', //게시판 관리자 아이디
    page: 2558, //총 페이지 수
    articleList: [ // 게시물 목록
        {
            bno: 3, //글번호
            title: '가위바위보', //글제목
            writer: '김짱껨뽀',  //작성자
            content: '다덤벼 ^^', //글내용
            viewCount: 53, //조회수
            recomm: 10, //추천수
            regDate: '21-12-07' //작성일자
        }, 
        {
            bno: 2, //글번호
            title: '노는게', //글제목
            writer: '뽀로로',  //작성자
            content: '제일조와~~~', //글내용
            viewCount: 253, //조회수
            recomm: 11, //추천수
            regDate: '21-12-06' //작성일자
        }, 
        {
            bno: 1, //글번호
            title: '아멘', //글제목
            writer: '개신교신자',  //작성자
            content: '할렐루야', //글내용
            viewCount: 23, //조회수
            recomm: 5, //추천수
            regDate: '21-12-05' //작성일자
        }
    ]
};

let bbs = articles.articleList;

for (let i in articles) {
    
}

for (let i of bbs) {

}