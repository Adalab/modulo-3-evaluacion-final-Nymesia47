import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import translations from "../services/translations";

function CharacterCard({info, useCharacterImage}) {

    const {imgUrl, altText} = useCharacterImage(info);


  return (
    <article>
        <Link to={`/character/${info.id}`}>
           <img src={imgUrl} alt={altText} />
           <h3>{info.name}</h3>
           <p>{translations[info.species]}</p>
        </Link>
        
    </article>
  )
}

export default CharacterCard;

CharacterCard.propTypes = {
  info: PropTypes.object,
  useCharacterImage: PropTypes.func
}