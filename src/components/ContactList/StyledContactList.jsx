import styled from '@emotion/styled';

const StyledList = styled.ul`
  width: 70%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  justify-content: center;
  padding: 20px;
  box-shadow: 0.3em 0.3em 0.3em 0.3em
    rgba(0.4, 0.4, 0.4, 0.4);
  border-radius: 10px;
  background: rgba(241, 101, 231, 0.8);
`;

const ContactInfo = styled.div`
  width: 300px;
  display: flex;
  gap: 5px;
  align-items: center;

  height: 40px;
  font-family: 'Montserrat', sans-serif;

  text-align: center;

  padding: 1rem;

  border-radius: 10px;
  top: 0;
  transition: all 300ms ease-in-out;

  box-shadow: 0.3em 0.3em rgba(0.4, 0.4, 0.4, 0.4);
  background: wheat;
`;
const StyledCloseButton = styled.button`
  width: 20px;
  height: 20px;

  display: flex;
  justify-content: center;
  align-items: center;
  color: inherit;
  background-color: transparent;

  svg {
    width: 15px;
    height: 15px;
    color: inherit;
  }
`;

export { StyledCloseButton, StyledList, ContactInfo };
