# 오늘 배운 내용

- Shell Command / Vim Command
- Git Command ( add, commit, push)

## Shell Command
- 디렉토리 이동 : cd 디렉토리명
- 디렉토리를 만들기: mkdir 디렉토리명
- 파일 만들기: touch 파일명
- 파일 옮기기: mv 대상 목적지
- 상위 디렉토리: ..
- 복사: cp 파일명 위치/새로운 파일명
- 이름 변경: rename 대상파일명 위치/새로운파일명
- 삭제: rm
      - rm *.css : css의 모든 파일을 지워라
      - rm nav.* : nav의 이름을 가진 모든 파일을 지워라
      - rm -rf 폴더명: 폴더와 디렉토리 모두 강제로 지워라
- 텍스트 라인 취합해 shell에 출력: cat 파일명

## Vim Command

ex) vi hello.md

- normal모드(esc 누르면 이동): 입력하는 모든 알파벳이 명령어로 작용
- insert모드(i 입력): 수정모드
- 넘버링: normal mode에서 :set nu-Line number 입력
- 저장: :+wq(wirte and quit) 
        저장은 무조건 normal 모드에서만 가능하다

## git Command
- git clone 
- git add
- git commit
- git push origin main

## Commit 할 때 기억해야 할 것
- Commit은 동작 가능한 최소단위로 자주 할 것
- 제목과 내용은 한줄 띄워 분리할 것
- 제목은 50자 이내, 내용은 문장형으로 작성하여 추가 설명할 것
- 모두가 이해할 수 있는 log를 작성할 것
- Open Source Contribution시 영어가 강제되지만 그렇지 않을 경우 팀 내 사용 언어 따라 쓸 것
- 내용은 이 Commit의 구성과 의도를 충분히 작성할 것

## Conventional Commits

1. commit의 제목은 commit을 설명하는 하나의 구 나 절로 완성
2. importanceofcapitalize Improtance of Capitalize
3. prefix 꼭 달기
    - feat : 기능 개발 관련
    - fix : 오류 개선 혹은 버그 패치
    - docs : 문서화 작업
    - test : test 관련
    - conf : 환경설정 관련
    - build : 빌드 관련
    - ci : Continuous Integration 관련

## git으로 작업한 내용(ex.README.md) push 하기
```shell
$ vi README.md
$ git status
$ git add README.md
$ git commit
$ git push origin main
```

## 느낀점

 능동적으로 코딩하자
