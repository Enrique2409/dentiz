import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Home from './Principal/Home';
import Appointment from './Principal/Appointment';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/appointment" element={<Appointment />} /> 

        <Route path="*" element={<h1>Not Found</h1>} />  
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
