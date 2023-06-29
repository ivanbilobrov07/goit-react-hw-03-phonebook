import { TextButton } from 'components/TextButton';
import { FilterContacts } from 'components/FilterContacts';
import { PhonebookControlls } from './Controlls.styled';

export const Controlls = ({ getFilteredValue, toggleModal }) => {
  return (
    <PhonebookControlls>
      <FilterContacts getFilteredValue={getFilteredValue} />
      <TextButton type="button" onClick={toggleModal} text="Add contact" />
    </PhonebookControlls>
  );
};
