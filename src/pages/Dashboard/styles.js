import styled from 'styled-components';

export const Container = styled.div`
display: grid;
  grid-template-columns: 240px 1fr;
  grid-template-rows: 80px 1fr;
  grid-template-areas:
    "sidenav header"
    "sidenav main";
  height: 100vh;

  .header {
    grid-area: header;
    background-color: #648ca6;
  }

  .sidenav {
  grid-area: sidenav;
  background-color: #394263;
  }

  .main {
  grid-area: main;
  background-color: #8fd4d9;
  }
`;
