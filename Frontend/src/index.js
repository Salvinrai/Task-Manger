import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Task from './pages/Asses'
import AddTask from './components/NewTask'
import Update from './components/UpdateTask'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
       <Routes>
        <Route exact path="/" element={<App/>} />
        
        <Route path="/task" element={<Task/>} />
        <Route path="/newtask" element={<AddTask/>} />
        <Route path="/update/:id" element={<Update/>} />
      </Routes>
      </BrowserRouter>
);

reportWebVitals();
