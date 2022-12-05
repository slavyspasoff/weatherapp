import { type SxProps, type Theme } from '@mui/material';
import { type ReactNode } from 'react';
import { Root } from '../styles/MainCard.styles';

interface Props {
  children?: ReactNode;

  sx?: SxProps<Theme>;
}

const MainCard = ({ children, sx }: Props) => {
  return <Root sx={sx}>{children}</Root>;
};

export default MainCard;
