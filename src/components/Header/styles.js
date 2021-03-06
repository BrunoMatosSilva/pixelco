import { darken } from 'polished';
import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  color: ${({ theme }) => theme.text};

    div {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;

        .logoMobile {
            display: none;
            @media(max-width: 900px) {
                display: initial;
                 img {
                     width: 30px;
                     height: 30px;
                     margin-top: 0.5rem;
                     margin-left: 1rem;
                 }
            }
        }

        .menuMobile {
            display: none;
            font-size: 1.5rem;
            @media(max-width: 900px) {
                display: initial;
                margin-top: 0.5rem;
                margin-right: 1rem;
            }
        }

        .title {

            @media(max-width: 900px) {
                display: none;
            }

            p {
                font-size: 2rem;
            }

            strong {
                font-weight: bold;
            }
        }
        .config {
            display: flex;
            align-items: center;
            justify-content: center;
            padding-right:2.5rem;
            gap: 1.5rem;

            @media(max-width: 900px) {
                margin-top: 0.5rem;
                padding-right: 0rem;
            }

            

            .business {
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: center;
                background: transparent;
                border: none;
                border-radius: 10px;
                color: #F19CFF;
                padding: 0.8rem;
                background-color: #000;
                transition: all 0.2s ;

                @media(max-width: 900px) {
                    display: none;
                }
                
                &:hover{
                    background-color: ${({ theme }) => darken(0.1, theme.backgroundButton)};
                    color: ${({ theme }) => theme.textlight};
                }

                svg {
                    font-size: 16px;

                }
                p {
                    font-size: 0.8rem;
                    text-transform: uppercase;
                    padding-left: 0.3rem;
                    
                    @media(max-width: 900px) {
                    font-size: 0.6rem;
                    }
                }
            }

            div {
                button {
                    background: transparent;
                    border: none;

                    svg {
                        font-size: 28px;
                        color: ${({ theme }) => theme.icon};
                        transition: all 0.2s ;

                        @media(max-width: 900px) {
                        font-size: 24px;
                }

                        &:hover{
                        color: ${({ theme }) => theme.textlight};
                        }
                    }
                }
            }

            img {
                width: 64px;
                height: 64px;
                border-radius: 50%;
                border: 2px solid ${({ theme }) => theme.icon} ;

                @media(max-width: 900px) {
                    width: 30px;
                    height: 30px;
                }

            }
        }
    }
`;