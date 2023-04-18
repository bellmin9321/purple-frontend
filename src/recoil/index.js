import { atom, RecoilEnv } from 'recoil';
RecoilEnv.RECOIL_DUPLICATE_ATOM_KEY_CHECKING_ENABLED = false;

export const todos = [
  '헤더 - 바디 - 푸터 형식으로 표현',
  '헤더에는 프로젝트이름(AWESOME FOOD STORE)과 메뉴(ABOUT + STORE) 표현',
  '푸터에는 카피라이트 추가(@ 2020 내이름)',
  'ABOUT엔 간단한 프로젝트 소개 문구 표현 (정적 페이지)',
  'STORE 리스트는 정사각형 이미지 그리드로 표현 (REST API 사용)',
  '하나의 아이템을 선택하면 팝업을 띄우고 맛집 이름과 사진, 설명, 홈페이지 바로가기(url이 있을 경우)를 표현',
  '정의하지 않은 url로 접근시 에러 페이지를 보여주고 5초 후 메인 페이지로 이동',
];

export const techStacks = [
  'NextJS',
  'React-Bootstrap',
  'axios',
  'recoil',
  'json-server',
];

export const storesState = atom({
  key: 'stores',
  default: [],
});

export const selectedStore = atom({
  key: 'selectedStore',
  default: {},
});

export const modalState = atom({
  key: 'showModal',
  default: false,
});
