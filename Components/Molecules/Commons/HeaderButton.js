import styled from 'styled-components';
import Link from 'next/link';
import { TextButton } from '../../Atoms/Buttons';

const HeaderButton = ( props ) => {
  const { intent, text, anchor } = props;
  return (
    <Link href={ anchor }>
      <LinkAnchorWithStyled>
        <TextButton
          intent={ intent ?? '' }
          text={ text ?? '' }
        />
      </LinkAnchorWithStyled>
    </Link>
  );
}

const LinkAnchorWithStyled = styled.a`
`;

export default HeaderButton;