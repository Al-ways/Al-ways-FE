import Button from '../components/atom/Button';
import Img from '../components/atom/Img';
import Input from '../components/atom/Input';
const EditProfile = () => {
  return (
    <div>
      <Button width={400} height={50} border={'none'} bgc={'#d9d9d9'} br={10}>
        변경하기
      </Button>
      <Button width={160} height={50} border={'none'} bgc={'#d9d9d9'} br={10}>
        중복 체크
      </Button>
      <Input
        width={220}
        height={50}
        border={'none'}
        br={10}
        placeText={'닉네임'}
        bgc={'#d9d9d9'}
      />
    </div>
  );
};

export default EditProfile;
