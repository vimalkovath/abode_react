import React from 'react';
import { Modal } from 'react-bootstrap';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

export const ClientModal = ({
  show,
  size = 'sm',
  handleSubmit,
  options,
  defaultOption = '',
  dialogClassName = 'dialog',
}) => {
  return (
    <Modal
      show={show}
      size={size}
      dialogClassName={dialogClassName}
      backdrop='static'
      keyboard={false}
      centered>
      <Modal.Body className='client-body'>
        <Dropdown
          options={options}
          onChange={handleSubmit}
          value={defaultOption}
          placeholder='Select customer'
        />
      </Modal.Body>
    </Modal>
  );
};
