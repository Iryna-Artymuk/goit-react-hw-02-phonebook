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
        phone_number: '459-12-56',
      },
      {
        id: 'id-2',
        name: 'Hermione Kline',
        phone_number: '443-89-12',
      },
      {
        id: 'id-3',
        name: 'Eden Clements',
        phone_number: '645-17-79',
      },
      {
        id: 'id-4',
        name: 'Annie Copeland',
        phone_number: '227-91-26',
      },
    ],
    filterValue: '',
  };

  componentDidMount() {
    const contacts = localStorage.getItem('Contacts List');
    const parsedContacts = JSON.parse(contacts);

    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }

  componentDidUpdate(_, prevState) {
    const prevContacts = prevState.contacts;
    const currentContacts = this.state.contacts;

    if (prevContacts !== currentContacts) {
      localStorage.setItem(
        'Contacts List',
        JSON.stringify(currentContacts)
      );
    }
  }

  addContact = newContact => {
    const existContact = this.state.contacts.find(
      contact => contact.name === newContact.name
    );

    if (!existContact) {
      this.setState(prevState => {
        return {
          contacts: [newContact, ...prevState.contacts],
        };
      });
    } else {
      return alert(
        `contactact ${existContact.name} already in your  list`
      );
    }
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
        {FilteredContacts.length > 0 && (
          <>
            <ContactList
              contactsData={FilteredContacts}
              deleteContact={this.deleteContact}
            ></ContactList>
            <Filter
              value={this.state.filterValue}
              handelFilterChange={this.handelFilterChange}
            />
          </>
        )}
      </StyledSection>
    );
  }
}
