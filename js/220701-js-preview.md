# Node.js

## 1. 표기법

- dash-case(kebab-case)
- snake_case
- camelCase
- ParcelCase

### dash-case(kebab-case)

```jsx
	the-quick-brown-fox-jumps-over-the-lazy-dog // html, css에서 주로 사용
```

단어와 단어 사이를 꼬챙이로 꽂아놓은 것 같다고 해서 케밥 케이스라고도 부름.

### snake_case

```jsx
	the_quick_brown_fox_jumps_over_the_lazy_dog // html, css에서 주로 사용
```

언더바(_)를 이용해 한 단어처럼 보이게 사용

### camelCase

```jsx
theQuickBrwonFoxJumpsOverTheLazyDog //소문자로 시작, js에서 주로 사용
```

### PascalCase

```jsx
TheQuickBrwonFoxJumpsOverTheLazyDog // 대문자로 시작, js에서 주로 사용
```

js에서 대부분 camelCase를 사용하지만 상황에 따라 다르게 사용 가능

---

## 2. Zero-based Numbering

: 0 기반 번호 매기기! 특수한 경우를 제외하고 **0부터 숫자를 시작**한다.

일요일~토요일 =  0~6 

## 3. 주석 Comments

단축키 ctrl+/

```jsx
// 한 줄 메모
/* 한 줄 메모 */

/**
 * 여러 줄
 * 메모1
 * 메모2
 */
```

## 4. 데이터 종류(자료형)

- String
- Number
- Boolean
- Undefined
- Null
- Object
- Array

### String(문자 데이터)

```jsx
//따옴표를 사용한다. "",'',``
let myName = "Sophie";
let email = 'gyong1540@naver.com';
let hello = `Hello ${myName}?!` // 중간에 데이터 보관 가능

console.log(myName); // Sophie
console.log(email); // gyong1540@naver.com
console.log(hello); // Hello Sophie?!
```

### Number(숫자 데이터)

```jsx
// 정수 및 부동소수점 숫자를 나타낸다. 따옴표가 있으면 문자데이터가 됨

let number = 123;
let opacity = 1.57;

console.log(number); // 123
console.log(opacity); // 1.57
```

### Boolean (불린 데이터)

```jsx
// true, false 두 가지 값밖에 없는 논리 데이터

let checked = true;
let isShow = false;

console.log(checked); // true
conseol.log(isShow); // false
```

### Undefined

```jsx
// 값이 할당되지 않은 상태

let undef;
let obj = { abc: 123 };

console.log(undef); // undefined
console.log(obj.abc); // 123
console.log(obj.xyz); // undefined
```

### Null

```jsx
// 어떤 값이 "**의도적**"으로 비어있음을 의미한다.

let empty= null;

console.log(empty); // null
```

### Object(객체 데이터)

```jsx
// 여러 데이터를 **Key:Value 형태**로 저장한다. **{}**

let user = {
	// Key: Value,
	name: 'Sophie',
	age: 85,
	isValied: true
};

console.log(user.name); // Sophie
console.log(user.age); // 85
console.log(user.isValied); // true
```

### Array(배열 데이터)

```jsx
// 여러 데이터를 순차적으로 저장한다. **[]**

let fruits = ['Apple', 'Banana', 'Cherry'];

console.log(fruits[0]); // Apple
console.log(fruits[1]); // Banana
console.log(fruits[2]); // Cherry
```

## 5. 변수

: 데이터를 저장하고 참조(사용)하는 데이터의 이름

- var : 권장x
- let : 재사용이 가능. 변수 선언!
- const

```jsx
let
// 재사용 가능, 변수 선언
// 값(데이터)의 재할당 **가능**

const
// 값(데이터)의 재할당 **불가**
```

## 6. 예약어

: 특별한 의미를 가지고 있어, **변수나 함수 이름 등으로 사용할 수 없는** 단어

- Reserved Word

```jsx
let this = 'Hello'; // SyntaxError 문법에러
```

## 7. 함수

: 특정 동작(기능_을 수행하는 일부 코드의 집합(부분)

- function

```jsx
// 함수 선언
function helloFunc() {
	// 실행 코드
	console.log(1234);
}

// 함수 호출
helloFunc(); // 1234
```

```jsx
//return 사용해서 밖으로 내보냄
fuction returnFunc(){
	return 123;	
}

let a = returnFunc();

console.log(a); // 123
```

```jsx
// 함수 선언!
function sum(a,b) { // a와 b는 매개변수(Paramenters)
	return a+b;
}

//재사용!
let a = sum(1, 2); // 1과 2는 인수(Arguments)
let b = sum(7, 12);

console.log(a,b); // 3, 19
```

```jsx
// 기명(이름이 있는) 함수
// 함수 선언!
function hello(){
	console.log('Hello~');
}

// 익명(이름이 없는) 함수
// 함수 표현!
let world = function () {
	console.log('World~');
}

//함수 호출:
hello(); // Hello~
world(); // World~
```

```jsx
// 객체 데이터
const Sophie = {
	name: 'Sophie',
	age: 29,
	// 메소드(Method)
	getName: function () {
		return this.name;
	}	
};

const herName = Sophie.getName();
console.log(herName); // Sophie
// 혹은
console.log(Sophie.getName()); // Sophie
```

## 8. 조건문

: 조건의 결과(truthy, falsy)에 따라 다른 코드를 실행하는 구문

- if
- else

```jsx
let isShow = true;
let checked = false;

if (isShow) {
  console.log('Show!'); // Show!
}

if (checked) {
  console.log('checked');
}
```

```jsx
let isShow = true;

if (isShow) {
  console.log('Show!');
} else {
  console.log('Hide?');
} // Show!
```

```jsx
let isShow = false;

if (isShow) {
  console.log('Show!');
} else {
  console.log('Hide?');
} // Hide?
```

## 9. DOM API

: Document Object Model(HTML의 내용들), Application Programming Interface

```jsx
// HTML 요소(Element) 1개 검색/ 찾기
const boxEl = document.querySelector('.box');

// HTML 요소에 적용할 수 있는 메소드!
boxEl.addEventLister();

// 인수 두개 추가 가능
// 이벤트(Event, 상황)
// 핸들러(Handler, 실행할 함수) 
boxEl.addEventLister('click',function() {
	console.log('click~!');
});
```

```jsx
// HTML 요소(Element) 1개 검색/ 찾기
const boxEl = document.querySelector('.box');

// 요소의 클래스 정보 객체 활용!
boxEl.classList.add('active');
let isContains = boxEl.classList.contains('active')
console.log(isContains); // true

boxEl.classList.remove('active);
isContains = boxEl.classList.contains('active')
console.log(isContains); // false
```

```jsx
// HTML 요소(Element) **모두** 검색/찾기
const boxEls = document.querySelectorAll('.box');
console.log(boxEls);

// 찾은 요소들 반복해서 함수 실행 forEach
// 익명 함수를 인수로 추가
boxEls.forEach(function () {});

// 첫 번째 매개변수(boxEl): 반복 중인 요소.
// 두 번째 매개변수(index): 반복 중인 번호
boxEls.forEach(fuction (boxEl, index) {});

//출력!
boxEls.forEach(function (boxEl, index) {
	boxEl.classList.add(`order-${index + 1}`);
	console.log(index, boxEl);
});
```

## 10. 메소드 체이닝

: 메소드가 체인 연결된 것 처럼 붙여서 작성하는 것
```jsx
const a = 'Hello~'
// split : 문자를 인수 기준으로 쪼개서 배열로 반환
// reverse : 배열을 뒤집기
// join : 배열을 인수 기준으로 문자로 병합해 반환
const b = a.split('').reverse().join('');

console.log(a); // Hello~
console.log(b); // ~olleH
```
