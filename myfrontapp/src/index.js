import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Headernav from './components/navbar/navbar';
import BecasNacionales from './components/Nacionales/BecasNacionales';
import BecasInteracionales from './components/Internacionales/BecasInternacionales';
import CrearBeca from './components/PublicarBeca/PublicarBeca';
import VerDetalles from './components/VerDetalles/verDetalles';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Headernav/>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/BecasNacionales' element={<BecasNacionales />} />
        <Route path='/BecasInternacionales' element={<BecasInteracionales />} />
        <Route path='/PublicarBeca' element={<CrearBeca />} />
        <Route path='/UpdateBeca/:id' element={<CrearBeca />} />
        <Route path='/VerDetalles/:id' element={<VerDetalles />} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
