import styled from '@emotion/styled';
interface OptionButtonProps {
  list: string[];
}
const OptionButton = ({ list }: OptionButtonProps) => {
  return (
    <Container>
      {list.map((option, idx) => (
        <option value={option} key={idx}>
          {option}
        </option>
      ))}
    </Container>
  );
};
const Container = styled.select`
  width: 120px;
  height: 40px;
  background-color: #ae73b8;
  border-radius: 10px;
  color: #ffffff;
  font-size: 20px;
  margin-left: 20px;
`;

export default OptionButton;
