// Q1. 승부차기에서 왼쪽방향으로 찬 선수들을 보여라.

// Q2. 승부차기 명단에서 방향만을 가져와서 출력 후,
//     골키퍼가 중앙을 막았을때 키커의 이름과, 킥의 성공여부를 출력하여라.
// ++  여러방향에서 막고싶은데ㅠ 모르겠습니다.. (할 수 없이 ;ㅋ 중앙만 막는 바보같은 키퍼로 지정)

class Kicker {
    constructor(name, age, team, direction) {
        this.name = name;
        this.age = age;
        this.team = team;
        this.direction = direction;
    }
}

const kickers = [
    new Kicker('이강인❤️', 22, 'RCD Mallorca', 'L'),
    new Kicker('조규성', 25, '전북 현대 모터스', 'C'),
    new Kicker('황희찬', 27, 'Wolverhampton Wanderers FC', 'R'),
    new Kicker('음바페', 26, 'Paris Saint-Germain FC', 'L'),
    new Kicker('손흥민', 30, 'Tottenham Hotspur', 'L'),
];

// Q1. 승부차기에서 왼쪽방향으로 찬 선수들을 보여라.
{
    const result = kickers.filter((kicker) => kicker.direction === 'L');
    console.log(result);
}

// Q2. 승부차기 명단에서 방향만을 가져와서 출력 후,
//     골키퍼가 중앙을 막았을때 키커의 이름과, 킥의 성공여부를 리스트로 출력하여라.
// ++  여러방향에서 막고싶은데ㅠ 모르겠습니다.. (할 수 없이 ;ㅋ 중앙만 막는 바보같은 키퍼로 지정)

{
    const directionArr = kickers.map((kicker) => kicker.direction);
    console.log(directionArr);

    const keeper = 'C';
    let a = []; //for문 외부에 선언

    for (let i = 0; i < directionArr.length; i++) {
        if (directionArr[i] === keeper) {
            answer = '노골';
            a.push(answer);
        } else {
            answer = '골';
            a.push(answer);
        }
    }

    // 승부차기 명단에서 이름만 가져오기.
    const result = kickers.map((kicker) => kicker.name);
    console.log(result);

    console.log(a);
}
