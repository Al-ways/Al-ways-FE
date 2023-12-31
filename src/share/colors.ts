interface IColors {
  black: string;
  white: string;
  main: string;
  background: string;
  dark_gray: string;
  gray: string;
  light_gray: string;
  mint: string;
  sky: string;
  deep_sky: string;
  violet: string;
  purple: string;
  navy: string;
  night: string;
  green: string;
  red: string;
  pink: string;
  orange: string;
  yellow: string;
}

export const COLORS: IColors = {
  black: '#000000',
  white: '#ffffff',
  main: '#AE73B8', // profile box, button 등 가장 자주 쓰이는 기본색 (연보라)
  background: '#B96BC6', // background color (보라)

  dark_gray: '#3D3D3D;', // 기본 box 배경 색. 어두운 회색
  gray: '#616161', // 진한 회색, 옅은 회색 사이 기본 회색 추가 차후 변수명 및 코드 일괄 변경할 것임
  light_gray: '#D9D9D9;', // 회색을 써야하는데 배경 색과 차이를 두어야 할 때. 좀 더 가벼운 회색

  // 생성되는 card들에 뿌려줄 배경 색. (카드 색상 확인 후 수정 예정)
  mint: '#7FB7BB',
  sky: '#868ED7',
  deep_sky: '#7A8EA5',
  violet: '#8E6EEA',
  purple: '#6431A3',
  navy: '#2B324B',
  night: '#2d2465',
  green: '#1F4F51',
  red: '#C35E5F',
  pink: '#FF87A3',
  orange: '#FFBAAB',
  yellow: '#eddfce',
};

// card color
//  navy: '#2B324B',
//   red_violet: '#71387A',
//   purple: '#8E6EEA',
//   sky: '#868ED7',
//   mint: '#54ADB0',
