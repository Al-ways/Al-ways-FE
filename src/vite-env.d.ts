/// <reference types="vite/client" /> //기본적으로 들어있는 코드

interface ImportMetaEnv {
  readonly VITE_PLUGIN_KEY: string; //이부분을 수정해준다. 위에 적은 변수의 타입을 적어준다
  // 다른 환경 변수들에 대해 아래에 위에처럼 타입을 지정해준다
  readonly VITE_NAVER_KEY: string;
  readonly VITE_GEOCODE_KEY: string;
  readonly VITE_OPENWEATHERMAP_KEY: string;
  readonly VITE_BASE_URL: string;
  readonly VITE_NAVER_ID: string;
  readonly VITE_NAVER_SECRET: string;
  readonly VITE_KAKAO_MAP_KEY: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
