import React, { useState, useEffect } from 'react';
import Cards from './Cards';
import Popup from './Popup';

const Todolist = () => {
  const [modal, setModal] = useState(false);
  const [tasks, setTasks] = useState([]);

  const toggleModal = () => {
    setModal(!modal);
  };

  const Save = (taskObj) => {
    const tempList = [...tasks]; // create a copy of the current tasks array
    tempList.push(taskObj);
    localStorage.setItem('storeTask', JSON.stringify(tempList));
    setTasks(tempList);
  };

  const deleteList = (index) => {
    const tempList = [...tasks]; // create a copy of the current tasks array
    tempList.splice(index, 1);
    localStorage.setItem('storeTask', JSON.stringify(tempList));
    setTasks(tempList);
  };

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('storeTask'));
    if (storedTasks) {
      setTasks(storedTasks);
    }
  }, []);

  return (
    <div className="container">
      <div className="header">
        <h3>Todo List</h3>
        <button type="button" className="btn btn-primary" onClick={toggleModal}>Create Task</button>
      </div>

      <Cards tasks={tasks} deleteList={deleteList} />

      <Popup toggle={toggleModal} modal={modal} Save={Save} />
    </div>
  );
};

export default Todolist;
