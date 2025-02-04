import '../styles/App.scss';
import {Route, Routes}  from "react-router-dom";
import { useEffect, useState } from 'react';
import Header from './Header';
import api from '../services/api';


function App() {

  const [charactersList, setCharacterList] = useState([]);

  useEffect(()=> {
    api().then((data)=> {
      setCharacterList(data)
    })
  }, [])
  
  return (
    <>
      <Routes>
        <Route path = "/" element={
          <>
            <Header/>
          </>
        } />
      </Routes>
    </>
  
  );
}

export default App
