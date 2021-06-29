// 변수의 범위(Scope)
// 1. 자바스크립트는 어휘에서 범위를 알 수 있는 정적 범위이다.(Lexical Scope) 이다.
// 2. EC6 이전에는 자바스크립트에는 자바와 같은 Block Sscope은 
// 3. EC6 이전에는 함수 범위(Function Scope)만 지원 했었다.
// function 의 {} 안에서 변수 앞에 var 키워드를 하면 함수 범위를 가지게 된다

// EC6 에서는
// 새롭게 Block Scope를 가지게 하는
// 1.let 변수
// 2.const : 상수
// 두 키워드를 지원한다.

var i = 10;
var f = () => {
    var i = 20;
    j = 100;
    console.log(i);
    i = j - 1;
}

{    
     let x = 100;
     const PI = 3.14;
     x = 100;
     // 상수이기 때문에 오류
    //  PI = 0;
}




f();
console.log(i);
console.log(j);
