import '../styles/App.scss';
import {Route, Routes}  from "react-router-dom";
import { useEffect, useState } from 'react';
import Header from './Header';
import api from '../services/api';
import CharacterList from './CharacterList';


function App() {

  const [charactersList, setCharacterList] = useState([]);

  useEffect(()=> {
    api('Gryffindor').then((data)=> {
      setCharacterList(data)
    })
  }, [])
  
  return (
    <>
      <Routes>
        <Route path = "/" element={
          <>
            <Header/>
            <CharacterList data={charactersList} />
          </>
        } />
      </Routes>
    </>
  
  );
}

export default App
