import '../styles/App.scss';
import {matchPath, useLocation, Route, Routes}  from "react-router-dom";
import { useEffect, useState } from 'react';
import Header from './Header';
import api from '../services/api';
import CharacterList from './CharacterList';
import Filters from './Filters/Filters';
import CharacterDetail from './CharacterDetail';
import ButtonLink from './ButtonLink';
import UrlNotExistent from './UrlNotExistent';


function App() {

  const [charactersList, setCharacterList] = useState([]);
  const [filterName, setFilterName] = useState("");
  const [filterHouse, setFilterHouse] = useState("Gryffindor");
  const [filterCharacters, setFilterCharacters] = useState(charactersList);

  useEffect(()=> {
      api(filterHouse).then((data)=> {
        setCharacterList(data)
      }); 
  }, [filterHouse]);

  const changeFilterCharacters = ()=> {
    if (charactersList && charactersList.length > 0) {
      setFilterCharacters(charactersList.filter((character)=> character.name.toLowerCase().includes(filterName.toLowerCase())));
    } else {
      setFilterCharacters([]);
    }
  }

  useEffect(()=>{
    changeFilterCharacters();
  }, [filterName, charactersList]);

  const useCharacterImage = (info)=> {
    const imgUrl = info.image || "https://placehold.co/200x300";
    const altText = info.image ? info.name : "Imagen no disponible";
    return { imgUrl, altText };
  
  }

  const {pathname} = useLocation();
  const characterRoute = matchPath("/character/:idCharacter", pathname);
  const characterIdUrl = characterRoute ? characterRoute.params.idCharacter : null;

  const characterDetail = charactersList ? charactersList.find(character => character.id === characterIdUrl) : null ;
  
  return (
    <>
      <Routes>
        <Route path = "/" element={
          <>
            <Header/>
            <Filters setFilterName={setFilterName} 
            filterName={filterName}
            filterHouse={filterHouse}
            setFilterHouse={setFilterHouse}
            />
            <CharacterList data={filterCharacters} 
            useCharacterImage={useCharacterImage}
            filterName={filterName}
            setFilterCharacters={setFilterCharacters}
            />
          </>
        } />
        <Route path="/character/:idCharacter" element={
          <>
            <Header/>
            <ButtonLink/>
            <CharacterDetail data={characterDetail} useCharacterImage={useCharacterImage}/>
          </>} 
        />
        <Route path="*" element={ 
          <>
            <Header/>
            <ButtonLink/>
            <UrlNotExistent/>
          </>
        }
        />

      </Routes>
    </>
  
  );
}

export default App;
