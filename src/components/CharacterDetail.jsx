import PropTypes from "prop-types";
import translations from "../services/translations";
import { useEffect, useState } from "react";

function CharacterDetail({data, useCharacterImage}) {

    const {imgUrl, altText} = useCharacterImage(data);

    let [status, setStatus] = useState("");

    const changesStatus = (data)=> {
        if (data.alive && data.gender === "female") {
            setStatus("Viva")
        } else if (data.alive && data.gender === "male") {
            setStatus("Vivo")
        } else if (!data.alive && data.gender === "female") {
            setStatus("Muerta")
        } else if (!data.alive && data.gender === "male") {
            setStatus("Muerto")
        } else {
            setStatus("Desconocido")
        }

        return status;
    }

    useEffect(() => {
        changesStatus(data);
      }, [data]);
    
  return (
   <article>
    <img src={imgUrl} alt={altText} />
    <p>{data.name}</p>
    <p>Estatus: {status}</p>
    <p>Especie: {translations[data.species] || data.species}</p>
    <p>Género: {translations[data.gender]}</p>
    <p>Casa: {data.house}</p>

   </article>
  )
}

export default CharacterDetail;

CharacterDetail.propTypes = {
    data: PropTypes.object,
    useCharacterImage: PropTypes.func
}