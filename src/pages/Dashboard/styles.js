import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
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
    div {
      color: ${({ theme }) => theme.text};
      display: grid;
      grid-template-columns: 1fr;
      grid-template-areas:
      "sales visitors"
      "sales statics";

      @media(max-width: 900px) {
        display: flex;
        flex-direction: column;
            }

      .sales {
        grid-area: sales;

        div {
          display: flex;
          flex-direction: column;

          section {
            display: flex;
            flex-direction: row;
            justify-content: space-between;

            h2 {
              margin-left: 2.8rem;
              font-size: 1.5rem;

              @media(max-width: 900px) {
                margin-left: 1rem;
              }
            }

            .buttonDash {
              display: flex;
              align-items: center;
              justify-content: center;
              border: 1px solid ${({ theme }) => theme.backgroundButton};
              height: 15px;
              margin-top:0.5rem;
              margin-right: 3rem;
              padding-bottom: 0.7rem;
              padding-right: 0.5rem;
              padding-left: 0.5rem;
              border-radius: 10px;

              @media(max-width: 900px) {
                margin-right: 1rem;
              }
            }
          }

          .subtitle {
            margin-left: 2.8rem;
            margin-top: 0.5rem;
            font-size: 0.8rem;
            color: ${({ theme }) => theme.icon};

            @media(max-width: 900px) {
                margin-left: 1rem;
              }
          }
        }
      }

      .visitors {
        @media(max-width: 900px) {
          display: none;
        }

      grid-area: visitors;
      div {
        display: flex;
        flex-direction: column;

          section {
            width: 100%;
            display: flex;
            flex-direction: row;
            justify-content: space-between;

            h2 {
              margin-left: 2.8rem;
              font-size: 1.5rem;
            }

            .buttonDash {
              display: flex;
              align-items: center;
              justify-content: center;
              border: 1px solid ${({ theme }) => theme.backgroundButton};
              height: 15px;
              margin-top:0.5rem;
              margin-right: 3rem;
              padding-bottom: 0.7rem;
              padding-right: 0.5rem;
              padding-left: 0.5rem;
              border-radius: 10px;
            }
          }

          .subtitle {
            margin-left: 2.8rem;
            margin-top: 0.5rem;
            font-size: 0.8rem;
            color: ${({ theme }) => theme.icon};
          }
        }
      }

      .statics {
      grid-area: statics;
      div {
          display: flex;
          flex-direction: column;

          section {
            display: flex;
            flex-direction: row;
            justify-content: space-between;

            h2 {
              margin-left: 2.8rem;
              font-size: 1.5rem;
              @media(max-width: 900px) {
                margin-left: 1rem;
              }
            }

            .buttonDash {
              display: flex;
              align-items: center;
              justify-content: center;
              border: 1px solid ${({ theme }) => theme.backgroundButton};
              height: 15px;
              margin-top:0.5rem;
              margin-right: 3rem;
              padding-bottom: 0.7rem;
              padding-right: 0.5rem;
              padding-left: 0.5rem;
              border-radius: 10px;

              @media(max-width: 900px) {
                margin-right: 1rem;
              }
            }
          }

          .subtitle {
            margin-left: 2.8rem;
            margin-top: 0.5rem;
            font-size: 0.8rem;
            color: ${({ theme }) => theme.icon};
          }
        }
      }
     }
    }
`;
