import PropTypes from "prop-types";

function CharacterDetail({data}) {
    
  return (
   <article>
    <img src={data.image} alt="" />
    <p>{data.name}</p>
    <p>Status: {data.alive}</p>
    <p>Species: {data.species}</p>
    <p>Gender: {data.gender}</p>
    <p>House: {data.house}</p>

   </article>
  )
}

export default CharacterDetail;

CharacterDetail.propTypes = {
    data: PropTypes.object
}