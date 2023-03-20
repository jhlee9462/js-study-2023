let member = ['유노윤호', '최강창민', '영웅재중', '믹키유천', '시아준수'];

while (!!member.length) {
    let deleteName = prompt('삭제할 이름을 입력하세요');

    if (member.includes(deleteName)) {
        member.splice(member.indexOf(deleteName), 1);
        alert(`남은 멤버 : ${member}`);
    } else {
        alert(`${deleteName}은 잘못된 이름입니다.`);
    }

    if (!member.length) {
        alert('모든 멤버가 삭제되었습니다.');
    }
}