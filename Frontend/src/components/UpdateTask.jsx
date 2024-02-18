import React, { useState } from 'react';
import Navbar from './Navbar';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

function UpdateTask() {

  const [Task, setTask] = useState('')
  const [Description, SetDesc] = useState('')
  const navigate = useNavigate();
  const {id} = useParams();

  function handleSubmit(event){
    event.preventDefault(); 
    axios.put('http://localhost:8000/update/'+id,{Task,Description})
    .then(res => {
      console.log(res);
      navigate('/task');
    }).catch(err => console.log(err));
  }
  
    return (
      <>
        <Navbar />
        <div className="flex justify-center items-center h-full mt-64">
          <div className="w-4/5">
            <div className="min-h-20 flex flex-col justify-center">
              <div className="relative py-1 sm:max-w-md sm:mx-auto">
                <div className="absolute inset-0 bg-gradient-to-r from-slate-900 to-gray-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
                <div className="text-black relative px-4 py-8 bg-slate-200 shadow-lg sm:rounded-3xl sm:p-12">

                  <div className="text-center pb-4">
                    <h1 className="text-2xl">Update Task</h1>
                  </div>

                  <form onSubmit={handleSubmit}> 
                    <input
                      className="shadow mb-2 appearance-none  rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      type="text" placeholder="Task" name="Task"
                      onChange={e => setTask(e.target.value)}
                      />

                    <input
                      className="shadow mb-2 appearance-none  rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      type="text" placeholder="Description" name="Description"
                      onChange={e => SetDesc (e.target.value)}
                      />

                    <div className="flex justify-between">
                      <input
                        className="shadow text-align-center bg-slate-900 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="submit" value="Update ➤" />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }


export default UpdateTask;
