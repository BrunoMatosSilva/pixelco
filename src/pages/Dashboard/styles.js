import styled from 'styled-components';

export const Container = styled.div`
display: grid;
  grid-template-columns: 280px 1fr;
  grid-template-rows: 120px 1fr;
  grid-template-areas:
    "sidenav header"
    "sidenav main";
  height: 100vh;

  .header {
    grid-area: header;
  }

  .sidenav {
  grid-area: sidenav;
  background-color: ${({ theme }) => theme.backgroundSideMenu};
  }

  .main {
  grid-area: main;
  }
`;
