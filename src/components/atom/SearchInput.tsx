import styled from '@emotion/styled';

interface SearchInputProps {
  value: string;
  setValue: (value: string) => void;
}
const SearchInput = ({ value, setValue }: SearchInputProps) => {
  return (
    <Container>
      <Input
        placeholder="Search"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        maxLength={30}
      />
    </Container>
  );
};
const Container = styled.div`
  width: 480px;
  height: 50px;
`;
const Input = styled.input`
  width: 420px;
  height: 50px;
  border: none;
  border-radius: 10px;
  margin-left: 20px;
  padding-left: 20px;
  background-color: #3d3d3d;
  color: #ffffff;
  font-size: 16px;
  ::placeholder {
    font-size: 16px;
    width: 400px;
  }
  :focus {
    outline: none;
  }
`;

export default SearchInput;
