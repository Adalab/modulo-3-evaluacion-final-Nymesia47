import PropTypes from "prop-types";
import '../styles/CharacterDetail.scss';
import translations from "../services/translations";
import { useEffect, useState } from "react";
import { FaHeartPulse, FaSkull, FaUser, FaQuestion } from "react-icons/fa6";
import {GiGiant , GiWerewolf } from "react-icons/gi";
import {TbGhost2Filled} from "react-icons/tb";

function CharacterDetail({data, useCharacterImage}) {

    const {imgUrl, altText} = useCharacterImage(data);
    const speciesIcons = {
        "human": <FaUser/>,
        "half-giant": <GiGiant />,
        "werewolf": <GiWerewolf/>,
        "ghost": <TbGhost2Filled/>
    };

    const [status, setStatus] = useState("");
    

    useEffect(() => {
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
        
      }, [data]);
    
  return (
   <article>
    <img src={imgUrl} alt={altText} />
    <p>{data.name}</p>
    <p>Estatus: {status}{" "}
      {data.alive ? <FaHeartPulse className="heart-icon"/> : <FaSkull />}
    </p>
    <p>Especie: {translations[data.species] || data.species}{" "}{speciesIcons[data.species] || <FaQuestion/>}</p>
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