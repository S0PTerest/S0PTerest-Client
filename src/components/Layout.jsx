import styled from 'styled-components';

function Layout({ children }) {
  return <Main>{children}</Main>;
}

export default Layout;

const Main = styled.main`
  margin: 0 2.4rem;
  overflow-x: hidden;
  overflow-y: hidden;
`;
