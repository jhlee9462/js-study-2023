let userInfo = {
    userList: [
        {
            account: 'kim1234',
            password: 'kkk1234',
            username: '김두한'
        },
        {
            account: 'park9876',
            password: 'ppp9999',
            username: '박찬호'
        },
        {
            account: 'hong7766',
            password: 'hhh1234',
            username: '홍길동'
        }
    ]
};

while (true) {
    let inputAccount = prompt('아이디를 입력하세요');

    let idExist = 0;
    for (let i = 0; i < userInfo.userList.length; i++) {
        if (userInfo.userList[i].account === inputAccount) {
            // 0 이면 아래의 조건문에 걸리지 않으니까 + 1을 해준 값을 대입한다.
            idExist = i + 1;
        }
    }

    if (idExist) {
        let inputPassword = prompt('비밀번호를 입력하세요');

        if (userInfo.userList[idExist - 1].password === inputPassword) {
            alert(`${userInfo.userList[idExist - 1].username}님 환영합니다!`);
            break;
        } else {
            alert('비밀번호가 일치하지 않습니다.');
        }
    } else {
        alert('존재하지 않는 회원입니다.');
    }
}