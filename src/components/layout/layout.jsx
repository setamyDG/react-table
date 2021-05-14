import React, { useEffect, useRef, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import PropTypes from 'prop-types';
import { GlobalStyle } from '../../style/GlobalStyle';
import theme from '../../style/theme';
import { StyledMain } from './layout.styled';
import Header from './header';
// import Footer from './footer';
import Navigation from './navigation';

const Layout = ({ children }) => {
  const headerRef = useRef(null);
  const navigationRef = useRef(null);

  const [headerHeight, setHeaderHeight] = useState(0);
  const [navWidth, setNavigationWidth] = useState(0);

  useEffect(() => {
    setHeaderHeight(headerRef.current?.offsetHeight || 0);
    setNavigationWidth(navigationRef.current?.offsetWidth || 0);
  }, []);

  return (
    <ThemeProvider ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header ref={headerRef} />
      <Navigation ref={navigationRef} />
      <StyledMain headerHeight={headerHeight} navWidth={navWidth}>
        {children}
      </StyledMain>
    </ThemeProvider>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
