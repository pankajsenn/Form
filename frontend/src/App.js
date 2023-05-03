import React from 'react';
import './App.css';
import Form from './Components/Form/Form';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Display from './Components/DisplayUsers/Display';
function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Form/>}/>
    <Route path='/DisplayUser' element={<Display/>}/>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
