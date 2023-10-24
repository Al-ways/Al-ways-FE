// 점수에 따라 별 갯수를 반환해주는 함수
export const getStars = (rating: number) => {
  let stars = '';

  if (rating >= 4.5) stars = '★★★★★';
  else if (rating >= 4 && rating < 4.5) stars = '★★★★☆';
  else if (rating >= 3.5 && rating < 4) stars = '★★★★';
  else if (rating >= 3 && rating < 3.5) stars = ' ★★★☆ ';
  else if (rating >= 2.5 && rating < 3) stars = ' ★★☆ ';
  else if (rating >= 2 && rating < 2.5) stars = ' ★★ ';
  else if (rating >= 1.5 && rating < 2) stars = ' ★☆ ';
  else if (rating < 1.5) stars = ' ★ ';

  return stars;
};
