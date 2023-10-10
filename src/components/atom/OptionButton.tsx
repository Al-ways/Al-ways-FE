import styled from '@emotion/styled';
import { useDispatch } from 'react-redux';
import {
  setSortOption,
  setCatagoryOption,
  setTagOption,
} from '../../redux/reducers/optionSelectSlice';
interface OptionButtonProps {
  list: string[];
  type: string;
}
const OptionButton = ({ list, type }: OptionButtonProps) => {
  const dispatch = useDispatch();

  const handleOptionChange = (
    e: React.ChangeEvent<HTMLSelectElement>,
    type: string,
  ) => {
    switch (type) {
      case 'sort':
        dispatch(setSortOption(e.target.value));
        break;
      case 'catagory':
        dispatch(setCatagoryOption(e.target.value));
        break;
      case 'tag':
        dispatch(setTagOption(e.target.value));
        break;
      default:
        break;
    }
  };

  return (
    <Container
      onChange={(e) => {
        handleOptionChange(e, type);
      }}
    >
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
