import { TextButton } from '../../Atoms/Buttons';

const HeaderButton = (props) => {
  return (
    <TextButton
      intent={ props.intent ?? '' }
      text={ props.text ?? '' }
    />
  );
}

export default HeaderButton;