import { ReactNode } from 'react';
import { Root } from '../styles/MainContainer.styles';
interface Props {
  children?: ReactNode;
}
const MainContainer = ({ children }: Props) => {
  return <Root>{children}</Root>;
};
export default MainContainer;
