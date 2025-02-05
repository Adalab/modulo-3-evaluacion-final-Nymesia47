import PropTypes from "prop-types";
import translations from "../services/translations";

function CharacterDetail({data, useCharacterImage}) {

    const {imgUrl, altText} = useCharacterImage(data);
    
  return (
   <article>
    <img src={imgUrl} alt={altText} />
    <p>{data.name}</p>
    <p>Estatus: {data.alive}</p>
    <p>Especie: {translations[data.species]}</p>
    <p>Genero: {translations[data.gender]}</p>
    <p>Casa: {data.house}</p>

   </article>
  )
}

export default CharacterDetail;

CharacterDetail.propTypes = {
    data: PropTypes.object,
    useCharacterImage: PropTypes.func
}