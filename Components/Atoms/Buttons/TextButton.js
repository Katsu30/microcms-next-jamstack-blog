import { Button } from "@blueprintjs/core";

const TextButton = (props) => {
  const { intent, text } = props;

  return (
    <Button
      intent={ intent ?? '' }
      text={ text ?? ''}
      minimal={ true }
      large={ true }
    />
  );
}

export default TextButton;