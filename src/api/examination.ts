interface Data {
  page: number;
  question: string;
  answer: string[];
}

export const examination = (page: number): Data => {
  const data: Data[] = [
    { page: 1, question: '1', answer: ['1', '2'] },
    { page: 2, question: '2', answer: ['1', '2'] },
    { page: 3, question: '3', answer: ['1', '2'] },
    { page: 4, question: '4', answer: ['1', '2'] },
    { page: 5, question: '5', answer: ['1', '2'] },
    { page: 6, question: '6', answer: ['1', '2'] },
    {
      page: 7,
      question: '7',
      answer: ['맥주', '소주', '위스키', '칵테일', '전통주', '막걸리'],
    },
  ];
  return data[page];
};
