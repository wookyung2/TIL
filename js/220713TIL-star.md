7/12 JS 과제 및 혼자 풀이

### 3. for, while문 실습

for, while 항상 true가 나오게되면 무한루프가 나오기 때문에 주의하자!

코드 실행하고 노트북이 갑자기 소리가 엄청 크게 나면서 멈추더니 왜인가싶었는데 무한루프에 빠져서였다..^^ 무한루프일땐 바로 ‘Ctrl + w’ 로 해당 윈도우 창을 닫아주자!

1학년때 c언어 포기한 이유 중 하나가 이 별찍기 실습때문이였는데 10년 후 다시 난관에 봉착했다.

이번엔 구글의 힘을 얻어 작성했다.

차근차근 나가보자.

별찍기

1) 1단계 : 순서대로 별이 하나씩 늘어나게 찍는다

```jsx
			let star = "";
      for (let i = 0; i < 5; i++) {
        star += "*";
        console.log(star);
      } //

```
```
*
**
***
****
*****
```

여기서 많이 하는 실수가star += “*”; 이 문장을 추가안하는건데, 그렇게 되면 원하는 결과가 나오지 않고 정말 말 그대로 같은 것을 다섯번 반복하는 꼴이 된다.

2) 2단계: 순서대로 별이 두개씩 늘어나게 찍는다.

```jsx
		let star = "";
      for (let i = 0; i < 5; i++) {
        for (let j = 0; j <= i * 2; j++) {
          star += "*";
        }
        star += "\n";
      }
      console.log(star);
```

짝수일때만 실행하게 해주면 두개씩 늘어난다!

3) 3단계: 거꾸로 출력해보자 (별 다섯개~1개)

```jsx
let star = "";
      for (let i = 0; i < 5; i++) {
        for (let j = 3; j >= i - 1; j--) {
          star += "*";
        }
        star += "\n";
      }
      console.log(star);
```
```
*****

****

***

**

*
```

외부함수는 다섯번을 반복해야하기때문에 그대로 적고 내부를 수정해준다!

이 경우에는 j=0으로 초기화가 되면 안되겠지?!

4) 4단계: 앞에 공백을 넣어 삼각형이 나오게 출력해보자

```jsx
let star = "";
      for (let i = 0; i < 5; i++) {
        for (let j = 3; j >= i - 1; j--) {
          star += " ";
        }
        for (let j = 0; j <= i * 2; j++) {
          star += "*";
        }
        star += "\n";
      }
      console.log(star);
```
```
    *

   ***

  *****

 *******

*********
```
1~3단계까지 잘 이해했다면 이건 아주 쉽다!

여기서 보면 앞에 공백이 있어 삼각형 모양으로 나오는데  공백 또한 “ “  하나의 별로 생각을 하여 추가해준다. 즉 2번과 3번이 합쳐진 꼴이다. 다섯줄까지 출력했을 때, 공백은 4→3→2→1→0 순서로 출력된다.
