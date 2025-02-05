import PropTypes from "prop-types";

function CharacterDetail({data}) {
   
    
  return (
   <article>
    <img src={data.image} alt="" />
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
    data: PropTypes.object
}