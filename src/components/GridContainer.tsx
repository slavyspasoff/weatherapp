import { ReactNode } from 'react';
import { type SxProps, type Theme } from '@mui/material';
import { Root } from '../styles/GridContainer.styles';
interface Props {
  children?: ReactNode;
  sx?: SxProps<Theme>;
}
const MainContainer = ({ children, sx }: Props) => {
  return (
    <Root container spacing={3}>
      {children}
    </Root>
  );
};
export default MainContainer;
