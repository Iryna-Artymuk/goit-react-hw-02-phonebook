import { AiOutlineClose } from 'react-icons/ai';
import {
  StyledCloseButton,
  StyledList,
  ContactInfo,
  Item,
} from './StyledContactList';

const ContactList = ({ contactsData, deleteContact }) => {
  return (
    <StyledList>
      {contactsData.map(({ id, name, phoneNumber }) => (
        <Item key={id}>
          <ContactInfo>
            <span>{name} : </span>
            <span>{phoneNumber}</span>
          </ContactInfo>

          <StyledCloseButton
            onClick={() => deleteContact(id)}
          >
            <AiOutlineClose />
          </StyledCloseButton>
        </Item>
      ))}
    </StyledList>
  );
};

export default ContactList;
