import { darken } from 'polished';
import styled from 'styled-components';

export const Container = styled.div`
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
align-items: center;

div {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding-top: 2.5rem;

    img {
        width: 49px;
        height: 49px;
    }

    h2 {
        padding-left: 1rem;
        color: ${({ theme }) => theme.text};
    }
}

section {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding-top: 2rem;

        ul {
            display: flex;
            flex-direction: column;
            justify-content: center;

            li {
                a {
                    display: flex;
                    align-items: center;
                    color: ${({ theme }) => theme.text};
                    border-radius: 10px;
                    gap: 1rem;
                    padding: 0.8rem 6rem 0.8rem 1.5rem;
                    margin-bottom: 1rem;
                    transition: all 0.2s ;

                    &:hover{
                    background-color: ${({ theme }) => theme.backgroundButton};
                    color: ${({ theme }) => theme.textlight};
                }
                }
            }
        }
    }
`;