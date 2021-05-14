import React from 'react';
import { StyledNav, StyledNavLink } from './navigation.styled';

const Navigation = React.forwardRef((_, ref) => (
  <StyledNav ref={ref}>
    <StyledNavLink exact to="/">
      Home
    </StyledNavLink>
    <StyledNavLink to="/basic">Basic</StyledNavLink>
    <StyledNavLink to="/footers">Footers</StyledNavLink>
    <StyledNavLink to="/sorting">Sorting</StyledNavLink>
  </StyledNav>
));

export default Navigation;
