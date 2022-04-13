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

                    span {
                        font-size: 0.8rem;
                        background-color: ${({ theme }) => theme.backgroundButton};
                        padding:0.3rem 0.5rem 0.3rem 0.5rem;
                        border-radius: 50%;
                    }
                }
            }
        }
    }

    .cardBusiness {
        display: flex;
        flex-direction: column;
        justify-content: center;
        background-color: ${({ theme }) => theme.backgroundButton};
        border-radius: 10px;
        margin: 1rem;
        margin-top: 6rem;
        
        img {
            width: 174px;
            height: 184px;
            transform: translateY(-120px);
            position: absolute;
        }

        section {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            color: ${({ theme }) => theme.text};

            h3 {
                padding-top: 4rem;
                padding-bottom: 1rem;
                margin-left: 1rem ;
            }

            p {
                font-size: 0.8rem;
                font-weight: 400;
                padding-left: 1rem ;
            }

            button {
                color: ${({ theme }) => theme.text};
                padding: 0.8rem 1rem 0.8rem 1rem;
                margin-left: 1rem ;
                margin-top: 1rem;
                margin-bottom: 1rem;
                border-radius: 10px;
                border: none;
                background: rgb(87,146,235);
                background: linear-gradient(10deg, rgba(87,146,235,1) 0%, rgba(242,74,225,1) 30%, rgba(253,67,39,1) 53%, rgba(252,176,69,1) 77%, rgba(87,146,235,1) 100%);
                transition: all 0.2s ;

                &:hover{
                    background: ${({ theme }) => darken(0.1, theme.backgroundButton)};
                    color: ${({ theme }) => theme.textlight};
                }
            }
        }
    }
`;