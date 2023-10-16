import { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

export const useSearchQueryString = (props: string) => {
  const [searchValue, setSearchValue] = useState('');

  const navigate = useNavigate();
  const [searchParms] = useSearchParams();

  const q = searchParms.get('q');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const searchNavigate = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate(`/${props}?q=${searchValue}`);
  };

  return { searchValue, handleInputChange, searchNavigate, q };
};
