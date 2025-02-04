import '../styles/App.scss';
import {Route, Routes}  from "react-router-dom";
import { useEffect, useState } from "react";

function App() {
  
  return (
    <>
      <h1>Template React</h1>
      <Routes>
        <Route to="/ruta" element={contenido_que_se_quiere_mostrar} />
      </Routes>
    </>
  
  );
}

export default App
