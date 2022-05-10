import styled from 'styled-components';

export const Container = styled.section`
  display: grid;
  grid-template-columns: 1fr 80%;
  grid-template-rows: 1fr;
  grid-template-areas:
  "sidenav header"
  "sidenav main";
  height: 100vh;

  @media(max-width: 900px) {
    display: inline;
    grid-template-areas:
    "header"
    "main";
  }

  .header {
    grid-area: header;
    max-height: 100px;
  }

  .sidenav {
  grid-area: sidenav;
  max-width: 300px;
  background-color: ${({ theme }) => theme.backgroundSideMenu};
  
  @media(max-width: 900px) {
    display: none;
    }
  }

  .main {

  grid-area: main;
   
    }
`;
