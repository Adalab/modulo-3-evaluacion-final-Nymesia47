import '../styles/App.scss';
import {Route, Routes}  from "react-router-dom";
import { useEffect, useState } from 'react';
import Header from './Header';
import api from '../services/api';
import CharacterList from './CharacterList';
import Filters from './Filters/Filters';


function App() {

  const [charactersList, setCharacterList] = useState([]);
  const [filterName, setFilterName] = useState("");

  useEffect(()=> {
    api('Gryffindor').then((data)=> {
      setCharacterList(data)
    })
  }, []);

  const filterCharacters = charactersList
  .filter((character)=> character.name.toLowerCase().includes(filterName))
  
  return (
    <>
      <Routes>
        <Route path = "/" element={
          <>
            <Header/>
            <Filters setFilterName={setFilterName} filterName={filterName}/>
            <CharacterList data={filterCharacters} />
          </>
        } />
      </Routes>
    </>
  
  );
}

export default App
