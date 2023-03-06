import { AiOutlineClose } from 'react-icons/ai';
import {
  StyledCloseButton,
  StyledList,
  ContactInfo,
} from './StyledContactList';

const ContactList = ({ contactsData, deleteContact }) => {
  return (
    <StyledList>
      {contactsData.map(({ id, name, phone_number }) => (
        <li key={id}>
          <ContactInfo>
            <div>
              <span>{name} : </span>
              <span>{phone_number}</span>
            </div>

            <StyledCloseButton
              onClick={() => deleteContact(id)}
            >
              <AiOutlineClose />
            </StyledCloseButton>
          </ContactInfo>
        </li>
      ))}
    </StyledList>
  );
};

export default ContactList;
