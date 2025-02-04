import "../styles/CharacterList.scss";
import CharacterCard from "./CharacterCard"

function CharacterList({data}) {

    const html = data.map(character => <CharacterCard key={character.id} info={character}/>)
  return (
    <section className="character-list">
        {html}
    </section>
  )
}

export default CharacterList