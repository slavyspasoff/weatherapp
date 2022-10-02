import { ReactNode } from 'react';
import { Root } from '../styles/MainCard.styles';

interface Props {
  children?: ReactNode;
}

const MainCard = ({ children }: Props) => {
  return <Root>{children}</Root>;
};

export default MainCard;
