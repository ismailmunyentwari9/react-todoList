import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Button, Modal, ModalHeader, ModalBody, ModalFooter,
} from 'reactstrap';

const Popup = ({ modal, toggle, Save }) => {
  Popup.propTypes = {
    modal: PropTypes.bool.isRequired,
    toggle: PropTypes.func.isRequired,
    Save: PropTypes.func.isRequired,
  };

  const [taskName, setName] = useState('');
  const [taskDescription, setDescription] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'taskName') {
      setName(value);
    } else {
      setDescription(value);
    }
  };

  const handleSave = () => {
    const taskObj = {};
    taskObj.taskName = taskName;
    taskObj.taskDescription = taskDescription;
    Save(taskObj);
    toggle();
  };

  return (
    <div>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>CreateList</ModalHeader>
        <ModalBody>
          <form>
            <div className="form-group">
              <input name="taskName" type="text" className="form-control" placeholder="TodoList Name" value={taskName} onChange={handleChange} />
              <textarea name="taskDescription" rows="5" className="form-control" placeholder="TodoList Description " value={taskDescription} onChange={handleChange} />
            </div>
          </form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={handleSave}>
            Save
          </Button>
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default Popup;
