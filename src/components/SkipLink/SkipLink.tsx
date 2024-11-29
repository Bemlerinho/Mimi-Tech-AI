import React from 'react';
import { styled } from '@mui/material/styles';

const StyledSkipLink = styled('a')(({ theme }) => ({
  position: 'absolute',
  left: '-999px',
  width: '1px',
  height: '1px',
  top: 'auto',
  overflow: 'hidden',
  
  '&:focus': {
    position: 'fixed',
    top: theme.spacing(2),
    left: theme.spacing(2),
    width: 'auto',
    height: 'auto',
    padding: theme.spacing(2),
    background: theme.palette.background.paper,
    color: theme.palette.text.primary,
    zIndex: theme.zIndex.tooltip,
    textDecoration: 'none',
    borderRadius: theme.shape.borderRadius,
    boxShadow: theme.shadows[4],
  },
}));

const SkipLink: React.FC = () => {
  return (
    <StyledSkipLink href="#main-content">
      Skip to main content
    </StyledSkipLink>
  );
};

export default SkipLink;
