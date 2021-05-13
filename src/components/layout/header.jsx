import React from 'react';
import StyledHeader from './header.styled';

const Header = ({ ref }) => (
  <StyledHeader ref={ref}>
    <p>React-Table</p>
  </StyledHeader>
);

export default Header;
