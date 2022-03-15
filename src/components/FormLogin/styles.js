import { darken, lighten } from 'polished';
import styled from 'styled-components';

export const Container = styled.div`
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

    h1 {
      display: flex;
      align-items: center;
      justify-content: center;

      padding-top: 1rem;

      font-size: 1.8rem;
      color: ${({ theme }) => theme.text};
    }

    p {
      padding: 1rem;
      color: ${({ theme }) => theme.text};
      padding-bottom: 0;
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

      .password {
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
        color: ${({ theme }) => theme.text};
        background-color: ${({ theme }) => lighten(0.2, theme.background)};
        border: none;
        border-radius: 10px;
        padding: 0.5rem 1rem 0.5rem 1rem;
        transition: all 0.2s;

        &:hover {
          background-color: ${({ theme }) => theme.textlight};
        }
      }
    }

    hr {
      width: 90%;
      border: 1px solid ${({ theme }) => theme.textlight};
    }
    section {
      display: flex;
      align-items: center;
      justify-content: center;

      > button {
        margin-top: 1.5rem;
        margin-bottom: 2rem;
        display: flex;
        align-items: center;
        justify-content: center;

        border: none;
        border-radius: 10px;
        background: ${({ theme }) => darken(0.3, theme.textlight)};
        color: ${({ theme }) => theme.text};
        padding: 0.8rem 1.5rem 0.8rem 1.5rem;
        transition: all 2s;

        &:hover {
          background-color: ${({ theme }) => theme.textlight};
        }

        svg {
          font-size: 1.5rem;
          margin-right: 1rem;
        }
      }
    }
  }

  div {
    margin-top: 1rem;
    p {
      padding: 1rem;

      a {
        padding-left: 0.2rem;
        color: ${({ theme }) => theme.textlight};
        transition: all 0.2s;

        &:hover {
          color: ${({ theme }) => darken(0.2, theme.textlight)};
        }
      }
    }
  }
`;
