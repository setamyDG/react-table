import styled from 'styled-components';

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 50px;
`;

const StyledMain = styled.main`
  margin-top: ${({ headerHeight }) => headerHeight}px;
  margin-bottom: ${({ footerHeight }) => footerHeight}px;
`;

export { StyledContainer, StyledMain };
