import { Component } from 'react';
import { Global } from '@emotion/react';
import { emotionReset } from './Global/Global.styled';
import { StyledSection } from './Section/StyledSection';
import ContactList from './ContactList/ContatLst';
import ContactsForm from './ContactForm/Form';
import Filter from './Filter/Filter';

export class App extends Component {
  state = {
    contacts: [
      {
        id: 'id-1',
        name: 'Rosie Simpson',
        phoneNumber: '459-12-56',
      },
      {
        id: 'id-2',
        name: 'Hermione Kline',
        phoneNumber: '443-89-12',
      },
      {
        id: 'id-3',
        name: 'Eden Clements',
        phoneNumber: '645-17-79',
      },
      {
        id: 'id-4',
        name: 'Annie Copeland',
        phoneNumber: '227-91-26',
      },
    ],
    filterValue: '',
  };

  addContact = newContact => {
    this.setState(prevState => {
      return {
        contacts: [newContact, ...prevState.contacts],
      };
    });
  };

  deleteContact = id => {
    this.setState(PrevState => ({
      contacts: PrevState.contacts.filter(
        contact => contact.id !== id
      ),
    }));
  };

  handelFilterChange = event => {
    this.setState({
      filterValue: event.currentTarget.value,
    });
  };

  render() {
    const normalizeFilterValue =
      this.state.filterValue.toLowerCase();
    const FilteredContacts = this.state.contacts.filter(
      contact =>
        contact.name
          .toLowerCase()
          .includes(normalizeFilterValue)
    );

    return (
      <StyledSection title="Phonebook">
        <ContactsForm addContact={this.addContact} />
        <Global styles={emotionReset} />

        <ContactList
          contactsData={FilteredContacts}
          deleteContact={this.deleteContact}
        ></ContactList>
        <Filter
          value={this.state.filterValue}
          handelFilterChange={this.handelFilterChange}
        />
      </StyledSection>
    );
  }
}
