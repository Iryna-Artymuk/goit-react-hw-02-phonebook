import { Component } from 'react';
import { Global } from '@emotion/react';
import { emotionReset } from './Global/Global.styled';
import Section from './Section/Section';
import ContactList from './ContactList/ContatLst';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
  };

  render() {
    return (
      <Section title="goit-react-hw-02-phonebook">
        <Global styles={emotionReset} />

        <ContactList contactsData={this.state.contacts}></ContactList>
        <div
          style={{
            width: '30vw',
            height: '30vw',
            background: ' rgba(241, 101, 231, 0.8)',
          }}
        ></div>
      </Section>
    );
  }
}
