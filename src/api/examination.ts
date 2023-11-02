interface Data {
  page: number;
  question: string;
  answer: string[];
}
export const examinationData = (page: number) => {
  const data: Data[] = [
    {
      page: 1,
      question: '나는 주로 어떤 방식으로 생각하고 결정을 내린다?',
      answer: ['감정적으로', '논리적으로'],
    },
    {
      page: 2,
      question: '새로운 사람들을 만날 때 나의 반응은?',
      answer: ['즉시 친근감을 느낀다', '처음에는 조심스럽다'],
    },
    {
      page: 3,
      question: '더 선호하는 활동은?',
      answer: ['다른 사람들과 함께하는 활동', '혼자 있는 시간'],
    },
    {
      page: 4,
      question: '나는 어떤 종류의 일을 선호하는가?',
      answer: ['계획된, 체계적인 일', '유연하고 변화가 많은 일'],
    },
    {
      page: 5,
      question: '당신의 성향은 무엇인가요?',
      answer: ['감각적으로 세상을 받아들인다', '직관적으로 세상을 받아들인다'],
    },
    {
      page: 6,
      question: '일을 시작할 때 나의 스타일은?',
      answer: [
        '일을 먼저 시작하고 계획을 세운다',
        '계획을 먼저 세우고 일을 시작한다',
      ],
    },
  ];
  return data[page];
};

interface Result {
  id: string;
  name: string;
  description: string;
  img: string;
}
export const examinationResult = (answerArr: number[]) => {
  const answer = answerArr.join('');
  console.log(answer);

  const result: Result[] = [
    {
      id: '111111',
      name: 'ISTJ',
      description: '세상에서 가장 신뢰할 수 있는 사람',
      img: 'ISTJ.jpg',
    },
    {
      id: '111112',
      name: 'ISTP',
      description: '모험을 즐기는 현실주의자',
      img: 'ISTP.jpg',
    },
    {
      id: '111121',
      name: 'ISFJ',
      description: '따뜻한 마음을 가진 보호자',
      img: 'ISFJ.jpg',
    },
    {
      id: '111122',
      name: 'ISFP',
      description: '예술가의 감성을 가진 모험가',
      img: 'ISFP.jpg',
    },
    {
      id: '111211',
      name: 'INFJ',
      description: '이상적인 세상을 꿈꾸는 보호자',
      img: 'INFJ.jpg',
    },
    {
      id: '111212',
      name: 'INFP',
      description: '화합을 추구하는 이상주의자',
      img: 'INFP.jpg',
    },
    {
      id: '111221',
      name: 'INTJ',
      description: '열정적인 내면의 이상주의자',
      img: 'INTJ.jpg',
    },
    {
      id: '111222',
      name: 'INTP',
      description: '논리적인 사색가',
      img: 'INTP.jpg',
    },
    {
      id: '112111',
      name: 'ENTJ',
      description: '세상을 이끌어가는 지도자',
      img: 'ENTJ.jpg',
    },
    {
      id: '112112',
      name: 'ENTP',
      description: '창의적인 발명가',
      img: 'ENTP.jpg',
    },
    {
      id: '112121',
      name: 'ENFJ',
      description: '따뜻한 마음을 가진 리더',
      img: 'ENFJ.jpg',
    },
    {
      id: '112122',
      name: 'ENFP',
      description: '열정적인 영감의 원천',
      img: 'ENFP.jpg',
    },
    {
      id: '112211',
      name: 'ESFJ',
      description: '따뜻한 마음을 가진 조력자',
      img: 'ESFJ.jpg',
    },
    {
      id: '112212',
      name: 'ESFP',
      description: '즐거움을 추구하는 모험가',
      img: 'ESFP.jpg',
    },
    {
      id: '112221',
      name: 'ESTP',
      description: '현실적인 모험가',
      img: 'ESTP.jpg',
    },
    {
      id: '112222',
      name: 'ESTJ',
      description: '성실한 책임감 있는 사람',
      img: 'ESTJ.jpg',
    },
    {
      id: '121111',
      name: 'ENTJ',
      description: '세상을 이끌어가는 지도자',
      img: 'ENTJ.jpg',
    },
    {
      id: '121112',
      name: 'ENTP',
      description: '창의적인 발명가',
      img: 'ENTP.jpg',
    },
    {
      id: '121121',
      name: 'ENFJ',
      description: '따뜻한 마음을 가진 리더',
      img: 'ENFJ.jpg',
    },
    {
      id: '121122',
      name: 'ENFP',
      description: '열정적인 영감의 원천',
      img: 'ENFP.jpg',
    },
    {
      id: '121211',
      name: 'ESFJ',
      description: '따뜻한 마음을 가진 조력자',
      img: 'ESFJ.jpg',
    },
    {
      id: '121212',
      name: 'ESFP',
      description: '즐거움을 추구하는 모험가',
      img: 'ESFP.jpg',
    },
    {
      id: '121221',
      name: 'ESTP',
      description: '현실적인 모험가',
      img: 'ESTP.jpg',
    },
    {
      id: '121222',
      name: 'ESTJ',
      description: '성실한 책임감 있는 사람',
      img: 'ESTJ.jpg',
    },
    {
      id: '122111',
      name: 'ENTJ',
      description: '세상을 이끌어가는 지도자',
      img: 'ENTJ.jpg',
    },
    {
      id: '122112',
      name: 'ENTP',
      description: '창의적인 발명가',
      img: 'ENTP.jpg',
    },
    {
      id: '122121',
      name: 'ENFJ',
      description: '따뜻한 마음을 가진 리더',
      img: 'ENFJ.jpg',
    },
    {
      id: '122122',
      name: 'ENFP',
      description: '열정적인 영감의 원천',
      img: 'ENFP.jpg',
    },
    {
      id: '122211',
      name: 'ESFJ',
      description: '따뜻한 마음을 가진 조력자',
      img: 'ESFJ.jpg',
    },
    {
      id: '122212',
      name: 'ESFP',
      description: '즐거움을 추구하는 모험가',
      img: 'ESFP.jpg',
    },
    {
      id: '122221',
      name: 'ESTP',
      description: '현실적인 모험가',
      img: 'ESTP.jpg',
    },
    {
      id: '122222',
      name: 'ESTJ',
      description: '성실한 책임감 있는 사람',
      img: 'ESTJ.jpg',
    },
    {
      id: '211111',
      name: 'ISTP',
      description: '모험을 즐기는 현실주의자',
      img: 'ISTP.jpg',
    },
    {
      id: '211112',
      name: 'ISFP',
      description: '예술가의 감성을 가진 모험가',
      img: 'ISFP.jpg',
    },
    {
      id: '211121',
      name: 'ISFJ',
      description: '따뜻한 마음을 가진 보호자',
      img: 'ISFJ.jpg',
    },
    {
      id: '211122',
      name: 'ISFP',
      description: '예술가의 감성을 가진 모험가',
      img: 'ISFP.jpg',
    },
    {
      id: '211211',
      name: 'INFJ',
      description: '이상적인 세상을 꿈꾸는 보호자',
      img: 'INFJ.jpg',
    },
    {
      id: '211212',
      name: 'INFP',
      description: '화합을 추구하는 이상주의자',
      img: 'INFP.jpg',
    },
    {
      id: '211221',
      name: 'INTJ',
      description: '열정적인 내면의 이상주의자',
      img: 'INTJ.jpg',
    },
    {
      id: '211222',
      name: 'INTP',
      description: '논리적인 사색가',
      img: 'INTP.jpg',
    },
    {
      id: '212111',
      name: 'ISTP',
      description: '모험을 즐기는 현실주의자',
      img: 'ISTP.jpg',
    },
    {
      id: '212112',
      name: 'ISFP',
      description: '예술가의 감성을 가진 모험가',
      img: 'ISFP.jpg',
    },
    {
      id: '212121',
      name: 'ISFJ',
      description: '따뜻한 마음을 가진 보호자',
      img: 'ISFJ.jpg',
    },
    {
      id: '212122',
      name: 'ISFP',
      description: '예술가의 감성을 가진 모험가',
      img: 'ISFP.jpg',
    },
    {
      id: '212211',
      name: 'INFJ',
      description: '이상적인 세상을 꿈꾸는 보호자',
      img: 'INFJ.jpg',
    },
    {
      id: '212212',
      name: 'INFP',
      description: '화합을 추구하는 이상주의자',
      img: 'INFP.jpg',
    },
    {
      id: '212221',
      name: 'INTJ',
      description: '열정적인 내면의 이상주의자',
      img: 'INTJ.jpg',
    },
    {
      id: '212222',
      name: 'INTP',
      description: '논리적인 사색가',
      img: 'INTP.jpg',
    },
    {
      id: '221111',
      name: 'ENTJ',
      description: '세상을 이끌어가는 지도자',
      img: 'ENTJ.jpg',
    },
    {
      id: '221112',
      name: 'ENTP',
      description: '창의적인 발명가',
      img: 'ENTP.jpg',
    },
    {
      id: '221112',
      name: 'ENTP',
      description: '창의적인 발명가',
      img: 'ENTP.jpg',
    },
    {
      id: '221121',
      name: 'ENFJ',
      description: '따뜻한 마음을 가진 리더',
      img: 'ENFJ.jpg',
    },
    {
      id: '221122',
      name: 'ENFP',
      description: '열정적인 영감의 원천',
      img: 'ENFP.jpg',
    },
    {
      id: '221211',
      name: 'ESFJ',
      description: '따뜻한 마음을 가진 조력자',
      img: 'ESFJ.jpg',
    },
    {
      id: '221212',
      name: 'ESFP',
      description: '즐거움을 추구하는 모험가',
      img: 'ESFP.jpg',
    },
    {
      id: '221221',
      name: 'ESTP',
      description: '현실적인 모험가',
      img: 'ESTP.jpg',
    },
    {
      id: '221222',
      name: 'ESTJ',
      description: '성실한 책임감 있는 사람',
      img: 'ESTJ.jpg',
    },
    {
      id: '222111',
      name: 'ISTP',
      description: '모험을 즐기는 현실주의자',
      img: 'ISTP.jpg',
    },
    {
      id: '222112',
      name: 'ISFP',
      description: '예술가의 감성을 가진 모험가',
      img: 'ISFP.jpg',
    },
    {
      id: '222121',
      name: 'ISFJ',
      description: '따뜻한 마음을 가진 보호자',
      img: 'ISFJ.jpg',
    },
    {
      id: '222122',
      name: 'ISFP',
      description: '예술가의 감성을 가진 모험가',
      img: 'ISFP.jpg',
    },
    {
      id: '222211',
      name: 'INFJ',
      description: '이상적인 세상을 꿈꾸는 보호자',
      img: 'INFJ.jpg',
    },
    {
      id: '222212',
      name: 'INFP',
      description: '화합을 추구하는 이상주의자',
      img: 'INFP.jpg',
    },
    {
      id: '222221',
      name: 'INTJ',
      description: '열정적인 내면의 이상주의자',
      img: 'INTJ.jpg',
    },
    {
      id: '222222',
      name: 'INTP',
      description: '논리적인 사색가',
      img: 'INTP.jpg',
    },
  ];

  return result.find((item) => item.id === answer);
};
