import PropTypes from 'prop-types';
import { MdDelete } from 'react-icons/md';
import { FiEdit } from 'react-icons/fi';

import { IconButton } from 'components/IconButton/IconButton';
import { TableDescrCell } from './ContactItem.styled';

export const ContactItem = ({ name, id, number, removeContact, openModal }) => {
  return (
    <>
      <td>{name}</td>
      <td>{number}</td>
      <TableDescrCell>
        <IconButton onClick={() => openModal(id)}>
          <FiEdit size={20} />
        </IconButton>
      </TableDescrCell>
      <TableDescrCell>
        <IconButton onClick={removeContact}>
          <MdDelete size={20} />
        </IconButton>
      </TableDescrCell>
    </>
  );
};

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  removeContact: PropTypes.func.isRequired,
};
