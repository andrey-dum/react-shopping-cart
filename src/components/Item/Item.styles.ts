import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  width: 100%;
  border: 1px solid lightblue;
  border-radius: 6px;
  height: 100%;

  button {
    border-radius: 0 0 6px 6px;
  }

  img {
    max-height: 250px;
    object-fit: cover;
    border-radius: 6px 6px 0 0;
  }

  div {
    font-family: Arial, Helvetica, sans-serif;
    padding: 1rem;
    height: 100%;
  }
`;