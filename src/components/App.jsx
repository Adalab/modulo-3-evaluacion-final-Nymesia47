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
  const [filterHouse, setFilterHouse] = useState("Gryffindor");

  useEffect(()=> {
    api(filterHouse).then((data)=> {
      setCharacterList(data)
    })
  }, [filterHouse]);

  const filterCharacters = charactersList
  .filter((character)=> character.name.toLowerCase().includes(filterName))
  
  return (
    <>
      <Routes>
        <Route path = "/" element={
          <>
            <Header/>
            <Filters setFilterName={setFilterName} 
            filterName={filterName}
            filterHouse={filterHouse}
            setFilterHouse={setFilterHouse}/>
            <CharacterList data={filterCharacters} />
          </>
        } />
      </Routes>
    </>
  
  );
}

export default App
