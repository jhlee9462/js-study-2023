let member = ['유노윤호', '최강창민', '영웅재중', '믹키유천', '시아준수'];

while (true) {
    let deleteName = prompt('수정할 멤버의 이름을 입력하세요');

    if (member.includes(deleteName)) {
        let newName = prompt(`새로운 멤버의 이름을 입력하세요`);
        member.splice(member.indexOf(deleteName), 1, newName);
        // 혹은
        // member[member.indexOf(deleteName)] = newName;
        alert(`수정완료!\n현재 멤버 : ${member}`);
        break;
    } else {
        alert(`${deleteName}은 잘못된 이름입니다.\n다시 입력하세요`);
    }
}