# alert, prompt, confirm을 이용한 상호작용
브라우저 환경에서 사용되는 최소한의 사용자 인터페이스 기능들

## alert
-메시지를 보여줍니다.<br>
-이처럼 메세지가 있는 작은 창은 모달창(modal window)라고 부른다.
```js
alert("Hello");
```

## prompt
-사용자에게 텍스트를 입력하라는 메시지를 띄워줌과 동시에, 입력 필드를 함께 제공합니다. <br>
-확인을 누르면 prompt 함수는 사용자가 입력한 문자열을 반환하고, 취소 또는 Esc를 누르면 null을 반환합니다.
```js
let age = prompt('나이를 입력해주세요.', 100);
alert(`당신의 나이는 ${age}살 입니다.`);        // 당신의 나이는 100살입니다.
```
   - title : 사용자에게 보여줄 문자열
   - default : 사용자에게 보여줄 문자열


## confirm
-함수는 매개변수로 받은 question(질문)과 확인 및 취소 버튼이 있는 모달 창을 보여줍니다.<br>
-사용자가 확인버튼를 누르면 true, 그 외의 경우는 false를 반환합니다.
```js
let isBoss = confirm("당신이 주인인가요?");
alert( isBoss );        // 확인 버튼을 눌렀다면 true가 출력됩니다.
```