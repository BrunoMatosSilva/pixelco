import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;

    div {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;

        .title {

            strong{
                font-weight: bold;
            }
        }
        .config {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 1rem;

            button {
                background: none;
                border: none;
            }

            img {
                width: 64px;
                height: 64px;
                border-radius: 50%;
            }
        }
    }
`;