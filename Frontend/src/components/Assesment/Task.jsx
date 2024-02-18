import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar';

function TodoList() {
  const [taskList, setTaskList] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/')
      .then(res => setTaskList(res.data)) 
      .catch(err => console.log(err));
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete('http://localhost:8000/tasks/' + id)
      window.location.reload()
    } catch (error) {
      console.log(error);
    }
  };

  const handleTaskStatusUpdate = async (id) => {
    try {
      await axios.put('http://localhost:8000/status/'+ id, { Completed: 1 });
      // Reload the task list after updating the status
       window.location.reload()
        }catch (error){
          console.log(error);
        }      
  };

  return (
    <>
      <Navbar />
      <div className="w-4/5 mx-auto bg-white shadow-lg rounded-lg overflow-hidden mt-40">
        <div className="w-4/5 mx-auto mt-6 flex justify-center">
          <div className="flex space-x-2">
            <span className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
              Completed
            </span>
            <span className="inline-flex items-center rounded-md bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/10">
              Pending
            </span>
          </div>
        </div>
        <div className="px-4 py-2">
          <h1 className="text-gray-800 font-bold text-2xl uppercase">To-Do List</h1>
        </div>
        <div className="flex items-center border-b-2 border-teal-500 py-2 ml-2">
          <button 
            type="submit"
            className="flex-shrink-0  hover:bg-slate-900 bg-red-900  border-red-900 hover:border-slate-700 text-sm border-4 text-white py-1 px-2 rounded"
          >
            <a href='/newtask'>Add Task</a>
          </button>
        </div>
        <ul className="divide-y divide-gray-200">
          {taskList.map((task, index) => (
            <li key={index} className="py-4 w-4/5 mx-auto">
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <input
                    id={`todo${task.ID}`}
                    name={`todo${task.ID}`}
                    type="checkbox"
                    className="h-4 w-4 text-teal-600 focus:ring-red-900 border-gray-300 rounded"
                    onClick={() => handleTaskStatusUpdate(task.ID)}
                  />
                  <label htmlFor={`todo${task.ID}`} className="ml-3 block text-gray-900">
                  
                    <span className="text-lg font-medium">{task.Title}</span>
                    <span className="text-sm font-light text-gray-500 pl-6">{task.Description}</span>
                    {task.Completed === 1 ? (
                    <span className=" ml-3 inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
                      Completed
                    </span>
                  ) : (
                    <span className="ml-3 inline-flex items-center rounded-md bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/10">
                      Pending
                    </span>
                  )}
                  </label>
                </div>
                <div>
                  <a href={`update/${task.ID}`} className="mx-2 text-sm text-gray-500 hover:text-gray-700 focus:outline-none">
                    Update
                  </a>
                  <button
                    onClick={e => handleDelete(task.ID)}
                    className="text-sm text-red-500 hover:text-red-700 focus:outline-none"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default TodoList;
