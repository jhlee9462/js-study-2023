while (true) {
    let chips = 50;
    alert('블랙잭 프로그램에 오신 것을 환영합니다.\n카드 풀이 아니라 단순 숫자의 랜덤 조합으로 메이드 시킵니다.');

    each: while (chips > 0) {
        let bet = +prompt(`배팅할 칩의 갯수를 입력해 주세요.\n현재 칩 개수 : ${chips} 개`);

        if (bet > chips) {
            alert('현재 칩보다 많은 수를 입력하셨습니다.');
            continue;
        }

        chips -= bet;
        alert(`남은 칩 개수 : ${chips} 개`);

        let dealer = 0;
        let user = 0;

        do {
            dealer += Math.floor(Math.random() * 10 + 1);
            user += Math.floor(Math.random() * 10 + 1);
            if (dealer > 21) {
                alert('승리하셨습니다.');
                chips += bet * 2;
                continue each;
            } else if (user > 21) {
                alert('패배하셨습니다.');
                continue each;
            }
        } while (confirm(`딜러 : ${dealer}\n당신 : ${user}\nstrike 하시겠습니까?`));

        while (dealer < user) {
            dealer += Math.floor(Math.random() * 10 + 1);
        }

        if (dealer > 21) {
            alert('승리하셨습니다.');
            chips += bet * 2;
        } else {
            alert('패배하셨습니다.');
        }

    } // end of each game

    if (!confirm('칩이 모두 떨어져 파산하셨습니다. 처음부터 다시 하시겠습니까?')) {
        alert('잘 먹었습니다 꺼억~');
        break;
    }
} // end of whole game