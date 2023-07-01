//분수의 덧셈
//첫 번째 분수의 분자와 분모를 뜻하는 numer1, denom1, 
//두 번째 분수의 분자와 분모를 뜻하는 numer2, denom2가 매개변수로 주어집니다. 
//두 분수를 더한 값을 기약 분수로 나타냈을 때 분자와 분모를 순서대로 담은 배열을 return 하도록 solution 함수를 완성해보세요.

    function solution(numer1, denom1, numer2, denom2) {
        
        let numer = numer1*denom2 + numer2*denom1;
        let denom = denom1*denom2;
        let gcd = 1;
        // 하나의 분수로 만들어주기
        
        //numer와 denom을 최대공약수로 나누어줘야 기약분수를 만들 수 있음
        
        for(let i=2; i <= Math.min(numer,denom);i++){
            if(numer % i === 0 && denom % i === 0){
                // 분자와 분모를 각각 i로 나눴을 때, 나머지가 0이라면
                // 최대공약수는 i
                gcd = i;
            }
        }
        
        const arr = []
        arr.push(numer/gcd,denom/gcd)
    
        return arr

    }

    //다른 풀이 : 재귀함수를 이용해 더 깔끔하고 간단하게 정리했음

    function fnGCD(a, b){
        return (a%b)? fnGCD(b, a%b) : b;
    }
    
    function solution(denum1, num1, denum2, num2) {
        let denum = denum1*num2 + denum2*num1;
        let num = num1 * num2;
        let gcd = fnGCD(denum, num); //최대공약수
    
        return [denum/gcd, num/gcd];
    }
    