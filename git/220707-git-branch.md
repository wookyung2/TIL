## Branch

분기점을 생성하여 독립적으로 코드 변경할 수 있도록 도와주는 모델

`git branch` 로컬 브랜치 보기

`git branch -r` remote 가능한 브랜치 보기

`git branch -a` 모든 브랜치 보기

`git branch stem` 브랜치 생성

`git switch stem`브랜치 이동

`git merege stem` merge 브랜치

`git branch -D stem` 삭제

`git branch origin stem` 브랜치로 remote하기

`git mv [server.py](http://server.py) [main.py](http://main.py)` → 파일명 변경

`git reset HEAD {filename}` Unstaging

`git rm -f {filename}` Unstaging and Remove

`git commit --amend` 최근 커밋 수정

### Reset Commit 방법

ex) 현재 HEAD에서 직전 3개의 commit을 순서대로 거슬러 올라가 해당 내역에 대해 commit, push 수행 

```html
$ git reset --no-commit HEAD~3..
$ git commit
$ git push origin <branch>
```

잘못한 이력도 commit으로 박제하고 수정한 이력을 남겨야함
---

중간중간 Tip

- Branch naming: 내가 이 branch 에서 어떤걸 할 건지에 대한 설명을 이름으로 한다.
- Conflict 해결한 내용을 남기는 것이 정말 중요하다,
- Branch 에 대해(서브)  첫 푸쉬할때는 -u 꼭 붙여야한다.
  ex) git push -u origin <branch>
- origin 이란 나의 원격 저장주소를 간단하게 표현한 단어이다.
- pull 은 FETCH와 MERGE를 합친것과 같다.
  -> `git pull origin main` 으로 한번에 해결 할 수 있다.
- master : 사용자가 사용하게 될 소스코드가 존재한다
- develop : 개발자가 사용하는 공간이다.
- 작은 commit하나라도 `git flow feature start/finish <branch>` 필수!
