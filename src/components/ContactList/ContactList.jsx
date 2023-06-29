import PropTypes from 'prop-types';
import { Component } from 'react';

import {
  Table,
  TableRow,
  TableTitleCell,
  TableHeader,
} from './ContactList.styled';
import { FormModal } from 'components/App/App.styled';
import { ContactForm } from 'components/ContactForm';
import { ContactItem } from 'components/ContactItem';

export class ContactList extends Component {
  state = {
    isEditModalShown: false,
    editItemId: null,
  };

  componentDidUpdate(prevProps, _) {
    const prevContacts = prevProps.contacts;
    const nextContacts = this.props.contacts;

    if (prevContacts !== nextContacts) {
      this.closeModal();
    }
  }

  openModal = id => {
    this.setState({ isEditModalShown: true, editItemId: id });
  };

  closeModal = () => {
    this.setState({ isEditModalShown: false });
  };

  findContactByName = nameValue => {
    return this.props.contacts.find(contact => {
      return nameValue === contact.name && contact.id !== this.state.editItemId;
    });
  };

  findContactByNumber = numberValue => {
    return this.props.contacts.find(contact => {
      return (
        numberValue === contact.number && contact.id !== this.state.editItemId
      );
    });
  };

  render() {
    const { isEditModalShown, editItemId } = this.state;
    const { contacts, removeContact, editContact } = this.props;

    return (
      <>
        <Table>
          <TableHeader>
            <TableRow>
              <th>Names</th>
              <th>Phone Number</th>
              <TableTitleCell>Edit</TableTitleCell>
              <TableTitleCell>Delete</TableTitleCell>
            </TableRow>
          </TableHeader>
          <tbody>
            {contacts.map(({ name, number, id }) => (
              <TableRow key={id}>
                <ContactItem
                  removeContact={() => removeContact(id)}
                  id={id}
                  name={name}
                  number={number}
                  openModal={this.openModal}
                />
              </TableRow>
            ))}
          </tbody>
        </Table>
        {isEditModalShown && (
          <FormModal onClose={this.closeModal}>
            <ContactForm
              handleContactChange={editContact}
              findContactByName={this.findContactByName}
              findContactByNumber={this.findContactByNumber}
              initialValues={contacts.find(({ id }) => id === editItemId)}
            />
          </FormModal>
        )}
      </>
    );
  }
}

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  removeContact: PropTypes.func.isRequired,
};
