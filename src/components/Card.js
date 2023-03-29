/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState } from 'react';
import './card.css';
import PropTypes from 'prop-types';

const coolColors = ['teal', 'turquoise', 'navy', 'indigo', 'cobalt', 'emerald', 'mint', 'violet', 'lavender', 'steel'];

function Card({ task, deleteList, index }) {
  const [name, setName] = useState(task.taskName);
  const [description, setDescription] = useState(task.taskDescription);
  const [isEditing, setIsEditing] = useState(false);

  Card.propTypes = {
    task: PropTypes.shape({
      taskName: PropTypes.string.isRequired,
      taskDescription: PropTypes.string.isRequired,
    }).isRequired,
    deleteList: PropTypes.func.isRequired,
    index: PropTypes.number.isRequired,
  };

  const handleSave = () => {
    const updatedTask = { ...task, taskName: name, taskDescription: description };
    localStorage.setItem('storeTask', JSON.stringify(updatedTask));
    setIsEditing(false);
  };

  const handleCancel = () => {
    setIsEditing(false);
  };

  const handleDelete = () => {
    deleteList(index);
  };

  const randomColor = coolColors[Math.floor(Math.random() * coolColors.length)];

  const iconStyle = {
    color: randomColor,
  };

  return (
    <div className="card" style={{ backgroundColor: randomColor }}>
      <div className="card-body">
        {isEditing ? (
          <div>
            <input value={name} onChange={(e) => setName(e.target.value)} />
            <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
          </div>
        ) : (
          <div>
            <h5 className="btn btn-primary">{name}</h5>
            <p className="card-text">{description}</p>
          </div>
        )}
      </div>
      <div className="cards-footer">
        {isEditing ? (
          <div>

            <i className="fa fa-check" style={iconStyle} onClick={handleSave} />
            <i className="fa fa-times" style={iconStyle} onClick={handleCancel} />
          </div>

        ) : (
          <div>
            <i className="fa fa-trash" style={iconStyle} onClick={handleDelete} />
            <i className="fa fa-edit" style={iconStyle} onClick={() => setIsEditing(true)} />
          </div>
        )}
      </div>
    </div>
  );
}

export default Card;
