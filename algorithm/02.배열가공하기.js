//정수 배열 numbers가 매개변수로 주어집니다.
//numbers의 각 원소에 두배한 원소를 가진 배열을 return하도록 solution 함수를 완성해주세요.

    function solution(numbers) {
        let answer = numbers.map(x => x * 2);;
        return answer;
    }

    //다른 사람 풀이 - reduce 사용
    function solution(numbers) {
        return numbers.reduce((a, b) => [...a, b * 2], []);
    }

//---------------------------------------------------------------------------------------

//중앙값은 어떤 주어진 값들을 크기의 순서대로 정렬했을 때 가장 중앙에 위치하는 값을 의미합니다. 
//예를 들어 1, 2, 7, 10, 11의 중앙값은 7입니다.
//정수 배열 array가 매개변수로 주어질 때, 중앙값을 return 하도록 solution 함수를 완성해보세요.

    function solution(array) {
        return array.sort((a, b) => a - b)[Math.floor(array.length / 2)];
    }

    //문제를 꼼꼼히 읽자 (안 읽고 원래 배열에서 중간위치값 반환하는 거 작성함)

//---------------------------------------------------------------------------------------
//정수 n이 매개변수로 주어질 때
//n 이하의 홀수가 오름차순으로 담긴 배열을 return하도록 solution 함수를 완성해주세요.

    function solution(n) {
        //숫자 n까지의 배열 생성
        const arr = Array.from({length:n}, (_, index) => index + 1);
        
        //인수로 전달받은 콜백함수를 반복 호출, 값이 true 인 요소만 추출해 배열로 뱐환해주는 함수 Array.filter
        const answer = arr.filter(item=>item%2)
        return answer;
    }

    //다른 사람 풀이 
    const solution = (n) => 
        Array
            .from({ length: n }, (_, i) => i + 1)
            .filter(i => i % 2 !== 0)