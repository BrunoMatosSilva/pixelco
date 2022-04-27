import styled from 'styled-components';

export const Container = styled.div`
display: flex;
flex-direction: row !important;
align-items: center;
justify-content: center;
margin-top: 1rem;
gap: 5rem;

        @media(max-width: 900px) {
              flex-direction: column !important;
        }

section {
    border-radius: 22px;
    background: rgb(30,51,89);
    background: linear-gradient(180deg, rgba(30,51,89,1) 0%, rgba(119,74,75,1) 100%);
    padding: 1rem;
    margin-bottom: 2rem;

    div {
        .iconChart {
            color: #4BDE97;
            font-size: 1.8rem;
        }
        h4 {
            padding-top: 1rem;
            font-size: 1.2rem;
        }
        p {
            padding-top: 1rem;
            color: ${({ theme }) => theme.textSubtitle};

            .totalVisits {
                color: #4BDE97; 

                > svg {
                color: #4BDE97;
            }
            }
        }

        .iconEnvelope {
            color: #9A1264;
            font-size: 1.8rem;
        }
        h4 {
            padding-top: 1rem;
            font-size: 1.2rem;
        }
        p {
            padding-top: 1rem;
            color: ${({ theme }) => theme.textSubtitle};

            .totalForms {
                color: #9A1264; 

                > svg {
                color: #9A1264;
            }
            }
        }
        .iconTree {
            color: #DBDE4B;
            font-size: 1.8rem;
        }
        h4 {
            padding-top: 1rem;
            font-size: 1.2rem;
        }
        p {
            padding-top: 1rem;
            color: ${({ theme }) => theme.textSubtitle};

            .totalPlanted {
                color: #DBDE4B; 

                > svg {
                color: #DBDE4B;
            }
            }
        }
    }
}
`;