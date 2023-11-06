import { useState } from 'react';
export const useExamination = () => {
  const [page, setPage] = useState<number>(0);

  const nextPage = (page: number) => {
    if (page === 5) {
      setPage(0);
    }
    setPage(page + 1);
  };

  return { page, nextPage };
};
