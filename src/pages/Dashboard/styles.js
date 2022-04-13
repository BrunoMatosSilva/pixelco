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
    div {
      color: ${({ theme }) => theme.text};
      display: grid;
      grid-template-columns: 280px 1fr;
      grid-template-rows: 120px 1fr;
      grid-template-areas:
      "sales visitors"
      "sales statics";

      .sales {
        grid-area: sales;
        background-color: ${({ theme }) => theme.backgroundSideMenu};
      }

      .visitors {
      grid-area: visitors;
      background-color: ${({ theme }) => theme.backgroundSideMenu};
      }

      .statics {
      grid-area: statics;
      background-color: ${({ theme }) => theme.backgroundSideMenu};
      }
     }
    }
`;
