import styled from 'styled-components';

const StyledMain = styled.main`
  margin-top: ${({ headerHeight }) => headerHeight}px;
  margin-left: ${({ navWidth }) => navWidth}px;
`;

export { StyledMain };
