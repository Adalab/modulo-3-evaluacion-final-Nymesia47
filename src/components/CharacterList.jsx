import "../styles/CharacterList.scss";
import CharacterCard from "./CharacterCard"
import PropTypes from "prop-types";


function CharacterList({data, useCharacterImage, filterName}) {
  
  if (data && data.length > 0) {

    return (
      <section className="character-list">
        {data.map((character => <CharacterCard key={character.id} info={character} useCharacterImage={useCharacterImage}/>))}
      </section>
    );
    } else {
      return (
        <section>
          <h3>No hay ningún personaje que coincida con la palabra {filterName}</h3>
        </section>
      );
    }
}

export default CharacterList;

CharacterList.propTypes = {
  data: PropTypes.array,
  useCharacterImage: PropTypes.func,
  filterName: PropTypes.string
}