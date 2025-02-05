import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import translations from "../services/translations";

function CharacterCard({info}) {

    const characterImage = (info)=> {
        let imgUrl = "";
        if(info.image) {
            imgUrl = info.image;
        } else {
            imgUrl = "https://placehold.co/200x300";
        }

        return imgUrl;
    }

    const imageAltText = (info) => {
        let altText = "";
        if(info.image) {
            altText = info.name;
        } else {
            altText = "Image not available";
        }

        return altText;
    }

  return (
    <article>
        <Link to={`/character/${info.id}`}>
           <img src={characterImage(info)} alt={imageAltText(info)} />
           <h3>{info.name}</h3>
           <p>{translations[info.species]}</p>
        </Link>
        
    </article>
  )
}

export default CharacterCard;

CharacterCard.propTypes = {
  info: PropTypes.object
}