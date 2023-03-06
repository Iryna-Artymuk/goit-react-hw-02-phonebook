import styled from '@emotion/styled';

const StyledFilterWrapper = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  justify-content: center;
  padding: 20px;
  margin-bottom: 30px;
  box-shadow: 0.3em 0.3em 0.3em 0.3em
    rgba(0.4, 0.4, 0.4, 0.4);
  border-radius: 10px;
  background: rgba(241, 101, 231, 0.8);

  input {
    display: flex;
    width: 100%;
    gap: 5px;
    justify-content: center;
    align-items: center;
    height: 40px;

    font-size: inherit;
    padding: 10px 20px;
    border-radius: 10px;
    top: 0;
    transition: all 300ms ease-in-out;
    box-shadow: 0.3em 0.3em rgba(0.4, 0.4, 0.4, 0.4);
    background: wheat;
    margin-top: 8px;
  }
`;

export { StyledFilterWrapper };
