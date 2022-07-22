## Webpack

`npm init -y` ⇒ `npm i -D webpack webpack-cli webpack-dev-server@next` ⇒ package.json 파일에서 test 삭제 ⇒ "dev": "webpack-dev-server --mode development”, "build": "webpack --mode production” 추가 

webpack.config.js 파일 생성해 구성 옵션 직접 작성해야함

```jsx
//import
const path = require("path");

//export
module.exports = {
  // 파일을 읽어들이기 시작하는 진입점 설정
  entry: "./js/main.js",

  // 결과물(번들)을 반환하는 설정
  output: {
    path: path.resolve(__dirname, "public"), //node.js에서 요구하는 절대경로 명시
    filename: "app.js",
  },
};
```

⇒   `npm run build` 실행 시 , public폴더에 app.js라는 파일이 생성됨

```jsx
output: {
    path: path.resolve(__dirname, "public"), //node.js에서 요구하는 절대경로 명시
    filename: "main.js",
    clean: true,
  },
```

clean 없이 동작시키면 app.js 아래 main.js가 생기는데 `clean:true` 추가 후 실행시 이전에 생성되었던 파일은 지워지고 main.js만 생성된다.

 

`쓰지않으면 기본적으로 dist라는 폴더에 main.js 파일이 생기게 됨!` 

dist → main.js와 index.html을 연결 시켜주기 위해

`npm i html-webpack-plugin` 설치해준다.

설치 후 webpack.config.js 파일 맨 위에 import해준다.

```jsx
const HtmlPlugin = require("html-webpack-plugin");
```

output 아래 plugins를 넣어 index.html 파일 연결 해준다

최종 !

```jsx
//import
const path = require("path");
const HtmlPlugin = require("html-webpack-plugin");

//export
module.exports = {
  // 파일을 읽어들이기 시작하는 진입점 설정
  entry: "./js/main.js",

  // 결과물(번들)을 반환하는 설정
  output: {
    // path: path.resolve(__dirname, "dist"), //node.js에서 요구하는 절대경로 명시
    // filename: "main.js",
    clean: true,
  },

	// 번들링 후 결과물의 처리 방식 등 다양한 플러그인들을 설정
  plugins: [
    new HtmlPlugin({
      template: "./index.html",
    }),
  ],
};
```
