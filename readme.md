### 백엔드 사용방법.

1. mongoDB 아이디를 만들어주세요.

2. backend 폴더의 최상위 루트에서 .env를 만들어주세요

3. 본인의 mongoDB를 계정을 연결해주세요 (backend > app.ts > startDabase 부분을 본인 mongoDB로 연결해주세요)

4. npm i로 다운을받고, npm start를 시작하고 콘솔에 `listening at PORT ${this.PORT}`가 출력되는지 확인해보세요.

안된다면 몽고디비 연결 코드가 틀렸을거에요. 다시 한번 확인해봐보세요. env파일에는 PORT와 DB_PASSWORD 입력해주시면 됩니다.

### 프론트 엔드

1. npm i로 다운받으시고 npm start하면 됩니다.

대강 연습용으로 만들었어요. 리팩토링을 안한 상태이니 그냥 이렇게 흘러가는구나 정도만 아시면 좋을것 같고 추가적으로 괜찮은 의견있다면 얘기해주세요!!!
