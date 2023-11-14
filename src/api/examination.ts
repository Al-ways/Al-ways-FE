import ISTJ from '../assets/mbti/ISTJ.png';
import ISFJ from '../assets/mbti/ISFJ.png';
import INFJ from '../assets/mbti/INFJ.png';
import INTJ from '../assets/mbti/INTJ.png';
import ISTP from '../assets/mbti/ISTP.png';
import ISFP from '../assets/mbti/ISFP.png';
import INFP from '../assets/mbti/INFP.png';
import INTP from '../assets/mbti/INTP.png';
import ESTJ from '../assets/mbti/ESTJ.png';
import ESTP from '../assets/mbti/ESTP.png';
import ESFJ from '../assets/mbti/ESFJ.png';
import ESFP from '../assets/mbti/ESFP.png';
import ENFJ from '../assets/mbti/ENFJ.png';
import ENFP from '../assets/mbti/ENFP.png';
import ENTJ from '../assets/mbti/ENTJ.png';
import ENTP from '../assets/mbti/ENTP.png';

interface Data {
  page: number;
  question: string;
  answer: string[];
}
interface MbtiData {
  name: string;
  id: string[];
}
interface MbtiType {
  name: string;
  decription: string[];
  img: string;
}

// 설문 결과에 따른 MBTI
const MbtiDatas: MbtiData[] = [
  { name: 'ISTJ', id: ['111111'] },
  { name: 'ISTP', id: ['111112', '211111', '212111', '222111'] },
  { name: 'ISFJ', id: ['111121', '211121', '212121', '222121'] },
  {
    name: 'ISFP',
    id: ['111122', '211112', '211122', '212112', '212122', '222112', '222122'],
  },
  { name: 'INFJ', id: ['111211', '211211', '212211', '222211'] },
  { name: 'INFP', id: ['111212', '211212', '212212', '222212'] },
  { name: 'INTJ', id: ['111221', '211221', '212221', '222221'] },
  { name: 'INTP', id: ['111222', '211222', '212222', '222222'] },
  { name: 'ESTJ', id: ['112222', '121222', '122222'] },
  { name: 'ESTP', id: ['112221', '121221', '122221', '221221'] },
  { name: 'ESFJ', id: ['112211', '121211', '122211', '221211'] },
  { name: 'ESFP', id: ['112212', '121212', '122212', '221212'] },
  { name: 'ENFJ', id: ['112121', '121121', '122121', '221121'] },
  { name: 'ENFP', id: ['112122', '121122', '122122', '221122'] },
  { name: 'ENTJ', id: ['112111', '121111', '122111', '221111'] },
  { name: 'ENTP', id: ['112112', '121112', '122112', '221112', '221112'] },
];
// answerArr을 받아서 해당하는 MBTI name을 반환하는 함수
export const filterMbti = (answerArr: number[]) => {
  const answer = answerArr.join('');
  return MbtiDatas.filter((item) => item.id.includes(answer))[0].name;
};
// page 마다 질문과 답변을 반환하는 함수
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

// parms에 해당하는 MBTI 결과를 반환하는 함수
export const mbtiResult = (parms: string | undefined) => {
  const MBTI: MbtiType[] = [
    {
      name: 'ISTJ',
      decription: [
        '세상에서 가장 신뢰할 수 있는 사람',
        '원리원칙 주의자 이며 계획적입니다.',
        '즉흥적인것을 피하며 약속을 무조건 이행 합니다.',
        '혼술즐 즐겨하는 부류이며 주변에 많은 사람이 있는것을 피합니다.',
        '철벽을 잘치며 외로운것을 즐깁니다.',
      ],
      img: ISTJ,
    },
    {
      name: 'ISFJ',
      decription: [
        '띠뜻한 마음을 가진 보호자',
        '원칙주의자 입니다.',
        '외로운건 싫지만 사람이 많은것을 싫어 합니다.',
        '술자리에 가는것을 좋아 하지는 않지만 막상 가면 잘어울립니다.',
        '게으른 완벽주의자라고 불리며 술약속을 잘 안잡는 편입니다.',
      ],
      img: ISFJ,
    },
    {
      name: 'INFJ',
      decription: [
        '이상적인 세상을 꿈꾸는 보호자',
        '생각이 엄청 많은 MBTI 유형 입니다.',
        '낯선 사람을 피하며 항상 같은 사람과 술을 마시는것을 좋아합니다.',
        '2인 술자를 지향 하며 은근히 술을 좋아하는 유형입니다.',
      ],
      img: INFJ,
    },
    {
      name: 'INTJ',
      decription: [
        '열정적인 내면의 이상주의자',
        '혼자가 가장 좋은 유형 입니다.',
        '술자리에 참여하여 말을 많이 하는 편입니다.',
        '이성적이며 감성적인것을 불필요하다고 생각합니다.',
      ],
      img: INTJ,
    },
    {
      name: 'ISTP',
      decription: [
        '모험을 즐기는 현실주의자',
        '혼술러 입니다.혼자가 가장 좋습니다.',
        '만사가 가장 귀찮아서 집에서만 술을 마시는 유형입니다.',
        '술약속을 잡으면 어떻게 취소할까부터 생각합니다.',
      ],
      img: ISTP,
    },
    {
      name: 'ISFP',
      decription: [
        '예술가의 감성을 가진 모험가',
        '매사에 귀찮아 하며 행동이 굉장히 느림니다.',
        '집돌이,집순이 이지만 막상 나가면 잘 노는 유형입니다.',
        '방전이 굉장히 빠르게 되기 떄문에 길게 술을 마시지 않습니다.',
      ],
      img: ISFP,
    },
    {
      name: 'INFP',
      decription: [
        '화합을 추구하는 이상주의자',
        '집 밖에 나가느순간 부터 굉장히 잘 노는 유형',
        '완벽하지 않으면 시작을 안하는 유형 입니다.',
        '연락이 굉장히 안되는 편입니다.',
        '한번 싫은것은 끝까지 싫습니다.',
      ],
      img: INFP,
    },
    {
      name: 'INTP',
      decription: [
        '논리적인 사색가',
        '자발적인 아싸입니다.',
        '혼자인게 가장 행복해 하며 자신이 가장 잘난 유형입니다.',
        '친한 친구랑만 술마시는 유형입니다.',
        '팩폭을 굉장히 잘 날려서 싸움이 일어날 확률이 높은 유형입니다.',
      ],
      img: INTP,
    },
    {
      name: 'ESTP',
      decription: [
        '현실적인 모험가',
        '만사가 귀찮기 때문에 스트레스를 적게 받는 유형입니다.',
        '사람 만나는것을 좋아하지만 게을러서 나가기 까지가 힘든 유형입니다.',
        '술자리에 참석을 술자리를 주도하는 편입니다.',
      ],
      img: ESTP,
    },
    {
      name: 'ESFP',
      decription: [
        '즐거움을 추구한하는 모험가',
        '평화주의자며 참견에 있어서는 최고인 유형입니다.',
        '인싸형이며 성격이 매우 급합니다.',
        '술자리에서 조용한것을 볼수가 없는 유형입니다.',
      ],
      img: ESFP,
    },
    {
      name: 'ENFP',
      decription: [
        '열정적인 영감의 원천',
        '리액션을 잘해줘서 술마실때 좋은 유형입니다.',
        '말하는것을 즐기기 때문에 술자리에 항상 존재 하고있는 유형입니다.',
      ],
      img: ENFP,
    },
    {
      name: 'ENTP',
      decription: [
        '창의적인 발명가',
        '독립심이 강하며 혼자서 돌아다니게 제일 편한 유형입니다.',
        '직설적이기 떄문에 술자리에서 말싸움을 할 가능성이 큼니다.',
        '좋아하는 사람하고만 술을 마십니다.',
        '나가서 노는걸 좋아하지만 집안에 있는것도 좋아하는 유형입니다.',
      ],
      img: ENTP,
    },
    {
      name: 'ESTJ',
      decription: [
        '성실한 책임감 있는 사람',
        '고집이 강하며 이성적이고 직설적입니다.',
        '리더 역활을 맡는거는 싫어하나 막상 하면 정말 장하는 유형입니다.',
        '싸워서 지는것을 싫어하기떄문에 말싸움을 하게되면 크게 싸울 확률이 있는 유형입니다.',
      ],
      img: ESTJ,
    },
    {
      name: 'ESFJ',
      decription: [
        '따뜻한 마음을 가진 조력가',
        '술자리를 가장 좋아하는 유형입니다.',
        '남 눈치를 많이 보며 생각 보다 철저한 유형입니다.',
        '처음 만나는 자리에서 가장 먼저 말을 거는 유형입니다.',
      ],
      img: ESFJ,
    },
    {
      name: 'ENFJ',
      decription: [
        '따뜻한 마음을 가진 리더',
        '굉장히 시끄러운 유형입니다.',
        '멘탈이 강하며 무리에 잘 속해 있지만 마이웨이 기질이 있는 유형입니다.',
        '센스가 있고 눈치가 빠르며 술집을 잘찾는 유형입니다.',
      ],
      img: ENFJ,
    },
    {
      name: 'ENTJ',
      decription: [
        '세상을 이끌어가는 지도자',
        '자기 자신을 믿어서 리더를 하는 유형입니다.',
        '자기애가 강하며 공감이 아닌 해결책을 제시하는 유형입니다.',
      ],
      img: ENTJ,
    },
  ];
  const returnData = MBTI.filter((item) => item.name === parms);
  return returnData;
};
