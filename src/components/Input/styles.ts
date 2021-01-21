import styled from 'styled-components';

export const Container = styled.div`
  background: #232129;
  border-radius: 10px;
  border: 2px solid #232129;
  padding: 16px;
  width: 100%;
  color: #666370;

  display: flex;
  align-items: center;

  input {
    color: #f4ede8;
    flex: 1;
    background: transparent;
    border: 0;

    &::placeholder {
      color: #666370;
    }
  }

  svg {
    margin-right: 16px;
  }

  & + div {
    margin-top: 8px;
  }
`;
