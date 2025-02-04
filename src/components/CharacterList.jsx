import "../styles/CharacterList.scss";
import CharacterCard from "./CharacterCard"
import PropTypes from "prop-types";


function CharacterList({data}) {

    const html = data.map(character => <CharacterCard key={character.id} info={character}/>)
  return (
    <section className="character-list">
        {html}
    </section>
  )
}

export default CharacterList;

CharacterList.propTypes = {
  data: PropTypes.array
}