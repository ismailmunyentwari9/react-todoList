import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

function Cards({ tasks, deleteList }) {
  return (
    <div className="cards">
      {tasks.map((task) => (
        <Card key={task.name} task={task} deleteList={deleteList} />

      ))}
    </div>
  );
}

Cards.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      taskName: PropTypes.string.isRequired,
      taskDescription: PropTypes.string.isRequired,
    }),
  ).isRequired,
  deleteList: PropTypes.func.isRequired,
};

export default Cards;
