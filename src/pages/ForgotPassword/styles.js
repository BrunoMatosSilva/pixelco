import { darken } from 'polished';
import styled from 'styled-components';

export const Container = styled.form`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  > div {
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background: ${({ theme }) => darken(0.1, theme.background)};
    width: 300px;
    border-radius: 10px;
    border-top: 1px solid ${({ theme }) => theme.textlight};
    border-bottom: 1px solid ${({ theme }) => theme.textlight};

    span {
      color: ${({ theme }) => theme.text};
      font-size: 0.9rem;
      padding-left: 1rem;
      padding-top: 1rem;
    }

    a {
        padding-left: 0.2rem;
        color: ${({ theme }) => theme.textlight};
        transition: all 0.2s;
        margin-bottom: 2rem;
        padding: 1rem;
        border: 1px solid ${({ theme }) => theme.backgroundButton};
        border-radius: 10px;

        &:hover {
          color: ${({ theme }) => darken(0.2, theme.textlight)};
        }
      }

    h1 {
      display: flex;
      align-items: center;
      justify-content: center;

      padding-top: 1rem;

      font-size: 1.5rem;
      color: ${({ theme }) => theme.textlight};
    }

    p {
      padding: 1rem;
      color: ${({ theme }) => theme.text};
      padding-bottom: 0;
      font-size: 0.9rem;
    }

    section {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      .email {
        margin: 1rem 1rem 0 1rem;
        padding: 1rem;
        border-radius: 10px;
        height: 2rem;

        &:hover {
          border-color: ${({ theme }) => theme.textlight};
        }

        ::placeholder {
          color: ${({ theme }) => theme.primary};
          font-size: 1rem;
        }
      }
    }

    > div {
      display: flex;
      align-items: center;
      justify-content: center;
      padding-bottom: 1rem;

      > button {
        margin-top: 1rem;
        margin-bottom: 1rem;
        height: 2.5rem;
        width: 215px;
        text-transform: uppercase;
        color: ${({ theme }) => theme.text};
        background-color: ${({ theme }) => theme.backgroundButton};
        border: none;
        border-radius: 10px;
        padding: 0.5rem 1rem 0.5rem 1rem;
        transition: all 0.2s;

        &:disabled {
      opacity: 0.2;
    }

        &:hover {
          background-color: ${({ theme }) => darken(0.1, theme.backgroundButton)};
        }
      }
    }
  }
`;