# 📝 **AWESOME FOOD STORE**

# 💬 **프로젝트 설명**

> nextjs와 json-server를 이용한 프로젝트입니다. react-bootstrap으로 css 디자인을 했고, recoil을 이용하여 db.json의 data들을 전역 상태로 관리했습니다. 각 STORE를 클릭 시 모달 팝업이 생기며 맛집 이름, 사진, 설명, URL을 표시했습니다. ABOUT/STORE/NotFound 페이지별 서비스 로직은 커스텀훅으로 만들어 view와 따로 분리해서 관리했습니다.

# 🔑 **프로젝트 실행방법**

```
1. package 설치
npm i

2. 실행
npm run dev (or yarn dev)

3. (다른 터미널에서) json-server 실행
json-server -p 9000 db.json
```

# 🌈 기술 스택

- **next.js**
  - 서버 사이드 렌더링(SSR)으로 데이터 pre-reloading\
  - 페이지 기반 라우팅 시스템
- **recoil**
  - 보일러 플레이트 없이 전역 상태 관리
- **react-bootstrap**
  - 레이아웃, 버튼, 입력창 등의 템플릿 CSS 프레임워크
- **json-server**
  - json 파일을 이용하여 client 단에서 가상 server 운영

# ✅ TODO (7 / 7 완료)

- [x] 헤더 - 바디 - 푸터 형식으로 표현
- [x] 헤더에는 프로젝트이름(`AWESOME FOOD STORE`)과 메뉴(`ABOUT` + `STORE`) 표현
- [x] 푸터에는 카피라이트 추가(`@ 2020 내이름`)
- [x] ABOUT엔 간단한 프로젝트 소개 문구 표현 (정적 페이지)
- [x] STORE 리스트는 정사각형 이미지 그리드로 표현 (REST API 사용)
- [x] 하나의 아이템을 선택하면 팝업을 띄우고 맛집 이름과 사진, 설명, 홈페이지 바로가기(url이 있을 경우)를 표현
- [x] 팝업 오른쪽 위에 X버튼을 넣고 누르면 팝업이 닫힘
- [x] 정의하지 않은 url로 접근시 에러 페이지를 보여주고 5초 후 메인 페이지로 이동

# 🗂️ 폴더 구조

```
src
├── components
│   ├── Modal
│   │   └── index.jsx
│   └── layout
│       ├── Body
│       │   └── index.jsx
│       ├── Footer
│       │   └── index.jsx
│       ├── Header
│       │   └── index.jsx
│       ├── IndexPage.jsx
│       └── index.jsx
├── constant
│   └── index.js
├── hooks
│   ├── useAbout.js
│   ├── useNotFound.js
│   └── useStore.js
├── pages
│   ├── 404.jsx
│   ├── _app.jsx
│   ├── _document.jsx
│   ├── about.jsx
│   ├── api
│   │   └── hello.js
│   ├── index.jsx
│   └── store
│       └── index.jsx
├── recoil
│   └── index.js
├── styles
│   └── globals.css
└── util
    └── index.js
```
