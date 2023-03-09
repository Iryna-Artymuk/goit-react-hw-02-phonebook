import styled from '@emotion/styled';
import { Form as CustomForm } from 'formik';
// import { ErrorMessage as CustomErrorMessage } from 'formik';

const StyledForm = styled(CustomForm)`
  padding: 20px;
  width: 70%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  justify-content: center;

  box-shadow: 0.3em 0.3em 0.3em 0.3em
    rgba(0.4, 0.4, 0.4, 0.4);
  border-radius: 10px;
  background: rgba(241, 101, 231, 0.8);

  button {
    width: 150px;
    height: 50px;
    background-color: blueviolet;
    border-radius: 10px;
    font-size: 18px;
    color: aliceblue;
  }

  input {
    display: flex;
    width: 300px;
    gap: 5px;
    justify-content: center;
    align-items: center;

    font-size: inherit;
    height: 40px;

    padding: 10px 20px;
    border-radius: 10px;
    top: 0;
    transition: all 300ms ease-in-out;
    /* box-shadow: 0.3em 0.3em rgba(0.4, 0.4, 0.4, 0.4); */
    background: wheat;
  }
`;

const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 5px;
  font-size: 16px;
`;
export { StyledForm, Label };
