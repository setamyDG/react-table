import styled, { css } from 'styled-components';
import { NavLink } from 'react-router-dom';

const StyledNav = styled.nav`
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12), 0px 1px 3px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-flow: column;
  align-items: center;
  z-index: 2000;
`;

const baseLinkStyles = css`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 16px;
  margin-top: 100px;
  color: black;
  border-right: 3px solid transparent;
`;

const activeClassName = 'active';

const StyledNavLink = styled(NavLink).attrs({ activeClassName })`
  &.${activeClassName} {
    color: ${({ theme }) => theme.colors.blue01};
    border-right: 3px solid ${({ theme }) => theme.colors.blue01};

    path {
      fill: ${({ theme }) => theme.colors.blue01};
    }
  }

  path {
    transition: 0.5s;
  }

  &:hover {
    path {
      fill: ${({ theme }) => theme.colors.blue01};
    }
  }

  ${baseLinkStyles}
`;

// const Hyperlink = styled.a`
//   ${baseLinkStyles}
// `;

export { StyledNav, StyledNavLink };
