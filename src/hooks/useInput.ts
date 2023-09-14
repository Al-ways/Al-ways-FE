import { useState } from "react";

export const useInput = (
  initialValue: string,
  submitAction: (el: string) => void
) => {
  const [value, setValue] = useState(initialValue);
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setValue("");
    submitAction(value);
  };
  return { value, onChange, handleSubmit };
};
