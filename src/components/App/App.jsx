import { Component } from 'react';
import { nanoid } from 'nanoid';

import { ContactForm } from 'components/ContactForm';
import { ContactList } from 'components/ContactList';
import { Controlls } from 'components/Controlls';
import { Message } from 'components/Message';
import { Container, Title, FormModal } from './App.styled';

const LS_KEY = 'contacts';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
    isModalShown: false,
  };

  componentDidMount = () => {
    const contacts = JSON.parse(localStorage.getItem(LS_KEY));

    if (contacts) {
      this.setState({ contacts });
    }
  };

  componentDidUpdate(_, prevState) {
    const prevContacts = prevState.contacts;
    const nextContacts = this.state.contacts;

    if (prevContacts !== nextContacts) {
      localStorage.setItem(LS_KEY, JSON.stringify(nextContacts));
    }
  }

  getFilteredValue = filterValue => {
    this.setState({ filter: filterValue });
  };

  getFilteredContacts = () => {
    const { contacts, filter } = this.state;

    return contacts.filter(({ name }) => name.toLowerCase().includes(filter));
  };

  findContactByName = nameValue => {
    return this.state.contacts.find(({ name }) => name === nameValue);
  };

  findContactByNumber = numberValue => {
    return this.state.contacts.find(({ number }) => numberValue === number);
  };

  addContact = data => {
    const id = nanoid();

    this.setState(({ contacts }) => ({
      contacts: [...contacts, { ...data, id }],
    }));

    this.toggleModal();
  };

  editContact = data => {
    this.setState(({ contacts }) => ({
      contacts: contacts.map(item => (item.id === data.id ? data : item)),
    }));
  };

  removeContact = idValue => {
    this.setState(({ contacts }) => ({
      contacts: contacts.filter(({ id }) => id !== idValue),
    }));
  };

  toggleModal = () => {
    this.setState(({ isModalShown }) => ({ isModalShown: !isModalShown }));
  };

  render() {
    const { isModalShown } = this.state;
    const contacts = this.getFilteredContacts();

    return (
      <Container>
        <Title>Phonebook</Title>
        <div>
          <Controlls
            getFilteredValue={this.getFilteredValue}
            toggleModal={this.toggleModal}
          />

          {isModalShown && (
            <FormModal onClose={this.toggleModal}>
              <ContactForm
                handleContactChange={this.addContact}
                findContactByName={this.findContactByName}
                findContactByNumber={this.findContactByNumber}
              />
            </FormModal>
          )}
          {contacts.length ? (
            <ContactList
              removeContact={this.removeContact}
              contacts={contacts}
              editContact={this.editContact}
            />
          ) : (
            <Message text="There are no contacts here" />
          )}
        </div>
      </Container>
    );
  }
}
