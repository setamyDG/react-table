import React, { useEffect, useRef, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import PropTypes from 'prop-types';
import { GlobalStyle } from '../../style/GlobalStyle';
import theme from '../../style/theme';
import { StyledContainer, StyledMain } from './layout.styled';
import Header from './header';
import Footer from './footer';

const Layout = ({ children }) => {
  const headerRef = useRef(null);
  const footerRef = useRef(null);

  const [headerHeight, setHeaderHeight] = useState(0);
  const [footerHeight, setFooterHeight] = useState(0);

  useEffect(() => {
    setHeaderHeight(headerRef.current?.offsetHeight || 0);
    setFooterHeight(footerRef.current?.offsetHeight || 0);
  }, []);

  return (
    <ThemeProvider ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header ref={headerRef} />
      <StyledContainer>
        <StyledMain headerHeight={headerHeight} footerHeight={footerHeight}>
          {children}
        </StyledMain>
      </StyledContainer>
      {/* <Footer /> */}
    </ThemeProvider>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
