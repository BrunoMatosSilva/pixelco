import styled from 'styled-components';

export const Container = styled.div`
display: flex;
align-items: center;
justify-content: center;

.cardSale {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-left: 1.5rem;
    margin-top: 2rem;

     @media(max-width: 900px) {
        margin-left: 0;
        display: flex;
        align-items: center;
        justify-content: center !important;
    }

    div {
        width: 300px;
        display: flex;
        flex-direction: column;
        border: 1px solid ${({ theme }) => theme.backgroundButton};
        border-radius: 25px;
        padding: 1rem;
        margin: 1rem;

        span {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 35px;
            height: 35px;
            border-radius: 5px;
            background-color: ${({ theme }) => theme.backgroundButton};
            margin-bottom: 2rem;
        }

        p {
            margin-left: 0;
            font-size: 1rem;
            margin-bottom: 1rem;
            }  
       
            h3 {
                font-size: 1.8rem;
            }
    }
}

.cardTotal {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    margin-top: 5rem ;

    @media(max-width: 900px) {
                margin-top: 2rem;
              }

    .box{
        display: flex;
        flex-direction: row;
        align-items: center;
        width:300px;
        background: rgb(87,146,235);
        background: linear-gradient(10deg, rgba(87,146,235,1) 0%, rgba(242,74,225,1) 30%, rgba(253,67,39,1) 53%, rgba(252,176,69,1) 77%, rgba(87,146,235,1) 100%);
        border-radius: 20px;

        @media(max-width: 900px) {
                width:290px;
                margin-left: 0rem;
                margin-bottom: 2rem;
              }

        span {
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.8rem;
            color: #000;
            background: #fff;
            opacity: 0.5;
            width: 50px;
            height: 50px;
            border-radius: 5px;
            margin-right: 1rem;
            margin-top: 1rem;
            margin-bottom: 1rem;
        }

        p {
            margin-top: 1rem;
            font-size: 1rem;
            }  
       
            h3 {
                font-size: 1.5rem;
                margin-bottom: 1rem;
            }
    }
}
`;