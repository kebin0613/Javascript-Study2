# CH_04
## 04-1 조건에 따라 흐름 조절하기(if, else, 삼항연산자)

if문<br>
소괄호 안의 조건이 true이면 중괄호 안의 자바스크립트 소스를 실행하고, <br> false이면 중괄호 안의 자바스크립트 소스를 무시한다.<br>

if - else문<br>
조건에 맞는지만 확인한다면 if문만 사용하고,<br> 조건에 맞을때와 맞지 않을때를 구별해야한다면 if else를 사용한다.

if - else문 표기방법
1. else문을 if문의 닫는 중괄호 다음행에 표기<br>
<pre>
if(...){
        ....
}
else{
        ....
}
</pre>

2. else문을 if문의 닫는 중괄호 바로 옆에 표기<br>
<pre>
if(...){
        ....
} else{
        ....
}
</pre>

3. if문과 else문의 명령어 1줄인 경우 중괄호 생략(1)<br>
<pre>
if(...)
        ...
else
        ....
</pre>

4. if문과 else문의 명령어 1줄인 경우 중괄호 생략(2) <br>
<pre>
if(...) ....
else    ....
</pre>

삼항 연산자 ( ? , : )<br>
- 조건이 하나이고, true, false일때 실행할 명령도 하나라면 if - else문 대신에 <br>삼항 연산자를 사용할 수 있고 간단하고 심플하다.
- ? 왼쪽에는 조건을 , : 왼쪽에는 true 일때 실행할 명령을, : 오른쪽에는 false일때 실행할 명령을 넣는다.
- <pre>(store >= 60) ? alert("통과") : alert("실패");</pre>

truthy 값과 falsy 값<br>
true로 인정할 수 있는 값을 truthy하다, 
false로 인정할 수 있는 값을 falsy하다 라고 표현합니다.


## 04-2 조건이 많을 떄 흐름 조절하기 - switch문
switch - case문<br>
- 한꺼번에 여러개의 조건을 확인할 수 있다.
- switch 오른쪽에 괄호와 함꼐 확인할 변수를 지정
- 여러가지 조건값은 case문 다음에 콜론을 붙여 지정하고, 해당값일떄 실행할 명령도 콜론 다음에 나열.
- break문을 사용해서 명령을 실행한 다음에는 완전히 switch문을 빠져나오돍 소스를 작성
- case문에 지정한 조건값과 전부 일치하지 않을때 default 명령이 실행된다. 여기선 break문을 사용 x

<pre>
let session = prompt("관심 세션을 선택해 주세요. 1-마케팅, 2-개발, 3-디자인", "1");
		
switch(session){
        case "1" : document.write("마케팅 세션은 201호에서 진행됩니다.");
		break;
	case "2" : document.write("개발 세션은203호에서 진행됩니다.");
		break;
	case "3" : document.write("디자인 세션은 >205호에서 진행됩니다.");
		break;
	default : alert("잘못 입력하셨습니다.");
}
</pre>

## 04-3 명령 반복 실행하기 - for문
for문<br>
- 값이 일정하게 커지면서 명령을 반복 실행할떄 편리한 반복문
- for문에서만 사용할 카운터 변수(기준이되는)를 선언
- for문 안에있는 소스를 실행할지 판단하는 조건을 작성 (true일시 실행, 아닐시 for문 벗어남)
- 반복 실행할 자바스크립트 소스 작성
- 증감연사자를 사용하여 카운터 변수를 조절한다.<br>
1~100까지의 합
<pre>
let sum = 0;

for(let i = 1; i <= 100; i++ ){
    sum += i;
}
document.write("1부터 100까지 더하면 " + sum);
</pre>

## 04-4 for문 반복하기 - 중첩 for문
이중 for문<br>
- 먼저 실행하는 for문을 안쪽에, 나중에 실행하는 for문을 바깥쪽에 작성한다<br>
구구단 
```
for(let i = 2; i <= 9; i++){
	document.write("<div>")
	document.write("<h3>" + i + "단</h3>");
	for(let j = 1; j <= 9; j++){
		document.write(i + "X" + j + "=" + i * j + "<br>");
	}
	document.write("</div>")
}
```

## 04-5 특정 조건에 따라 반복하기 - while문, do - while문
while문<br>
괄호 안의 조건이 만족할 떄 중괄호 안의 명령을 실행한다<br>
```
let i =0;
while (i < 10)){
        document.write("반복 조건이 true이면 반복<br>");
        i += 1; 
}
```
do - while문<br>
일단 문장을 한번 실행한 후에 조건을 확인한다.(조건이 false일지라도)
```
let i =0;
do{
        document.write("반복 조건이 true이면 반복<br>");
        i += 1;
} 
while(i < 10);
```

## 04-6 반복을 건너 뛰거나 멈추기 - break, continue문
break문<br>
반복문 실행중 break문을 만날시 반복문에서 바로 빠져나갈떄 사용<br>
```
for(i = 0; i < 10; i++){
        document.write("*");
        break;
}
```
continue문<br>
반복문 실행중 continue문을 만날시 해당 자리에서 다음문장을 건너뛰고 반복문의 맨앞으로 돌아가 다시 반복을 수행.<br>
```
for(i = 0; i < 10; i++){
        document.write("*");
        continue;
        document.write("continue문 때문에 이 문장은 건너뜁니다.);
}
```










      