# git, github, git flow로 협업하기

## 💫 일을 할 땐, 누구든 상관없이 `Fork` 이용하기

### 팀장

1. `New organization` 생성    


2. 팀원 초대   


3. `repository` 만들기    


4. `develop 브랜치 생성`    
    
    팀 repo 주소 clone → 팀 폴더 생성확인 / 접속 →     
    
    git branch develop → git switch develop → git push -u origin develop    


5. `Projects` 생성 (Scrum board) → 템플릿: Automated kanban with reviews  (: 코드 리뷰를 포함한 코멘트 작성 가능) → Create   


6. Preset 되어있는 카드들 삭제     


7. `Projects` 에서 팀원이 생성한 카드(Issue) 확인 후 To do 배정 
    
    (진행상황에 따라 카드 옮겨주기)   
    


8. 팀원 코드 리뷰 → `Request changes`   


9. 추가 요청사항 수정본 확인 후 `viewed` 체크 → `Approve`    


10. Merege pull request (팀원이 작성한 코드가 쌓이게 됨)   

### 팀원  


1. 초대장으로 join   


2. 팀 계정 `Issues`  추가 (할 일)
    
    ex) ## Description
    
    fizzbuzz를 보여주는 페이지를 만들겠습니다.
    
    `## Tasks 
    
    - [ ]  Declare Doctype
    - [ ]  head
    - [ ]  body

3. Fork 클릭 → Creat a new fork  → Clone위에 주소 복사    


4. git bash   

 
   [git reop 생성]


   dev에 git clone 주소 → repo 생성 확인 → repo로 들어가서 일 시작


   [본격적으로 일 시작 단계  : vi~ commit 반복]


   git flow init → git flow feature start 기능이름 

   → touch (작업파일생성)→ vi 파일 (코드작성) → git add → git status →

   git commit (제목, 내용 잘 적어주기) → 단계별로 쪼개서 작성 및 commit



   [코드 작성 마무리 후 pull request 하기]



   git flow feature finish 기능이름→ merge commit 뜨면 저장하고 나가기

   → git push -u origin develop ( 내 repo에는 develop 없기때문에 branch를 생성해줘야 한다)



   [github에서 open]



   `Pull requests` → head 본인레포 compare: `develop`  ⇒ base: 팀레포 `develop` → 제목(추후 release note가 됨) , 내용: clse #1 (내 issue번호) resolve → Ceate pull request


   [코드리뷰 확인 후 추가 작업하기]


   수정 작업 완료 → git add → git commit (추가요청이기 때문에 develop에서 바로 써도 됨) → git push origin develop 


   [두번째 팀원부터는 `꼭 pull 작업을 해 기존 merge된 최신사항 당겨받아 사용]`


   git remote (확인) → git remote -v (확인) → 팀의 repo주소 등록:

   git remote add 별명 팀repo주소 → git remote -v (팀repo주소 있는지 확인)

   → git pull 별명 develop (팀 develop 코드를 당겨받는 작업)
