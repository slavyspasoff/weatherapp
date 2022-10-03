import { ReactNode } from 'react';
import { Root } from '../styles/MainCard.styles';

interface Props {
  children?: ReactNode;
  backgroundColor?: string;
  backgroundImage?: string;
}

const MainCard = ({ children, backgroundColor, backgroundImage }: Props) => {
  return (
    <Root backgroundColor={backgroundColor} backgroundImage={backgroundImage}>
      {children}
    </Root>
  );
};

export default MainCard;
