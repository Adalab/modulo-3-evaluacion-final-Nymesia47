import PropTypes from "prop-types";
import '../styles/CharacterDetail.scss';
import translations from "../services/translations";
import { useEffect, useState } from "react";
import { FaHeartPulse, FaSkull, FaUser, FaQuestion } from "react-icons/fa6";
import {GiGiant , GiWerewolf } from "react-icons/gi";
import {TbGhost2Filled} from "react-icons/tb";
import UrlNotExistent from "./UrlNotExistent";

function CharacterDetail({data, useCharacterImage}) {

    if(data === null) {
        return <p>Los detalles del personaje se están cargando</p>;
    }

    if (!data) {
        return <UrlNotExistent/>;
    }

    const {imgUrl, altText} = useCharacterImage(data);
    const speciesIcons = {
        "human": <FaUser/>,
        "half-giant": <GiGiant />,
        "werewolf": <GiWerewolf/>,
        "ghost": <TbGhost2Filled/>
    };

    let [status, setStatus] = useState("");
    

    useEffect(() => {
        
       
        const changesStatus = (data) => {
            if (data.alive && data.gender === "female") return "Viva";
            if (data.alive && data.gender === "male") return "Vivo";
            if (!data.alive && data.gender === "female") return "Muerta";
            if (!data.alive && data.gender === "male") return "Muerto";
            return "Desconocido";
        };
        
        setStatus(changesStatus(data));

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