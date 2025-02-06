import api from '../services/api';
import PropTypes from 'prop-types';

function ButtonReset({setCharacterList, setFilterName, setFilterHouse, setFilterCharacters, setFilterGender}) {

    const handleReset = ()=>{
        
        setFilterName("");
        setFilterHouse("Gryffindor");
        setFilterGender("")

        api("Gryffindor").then((data) => {
            setCharacterList(data);
            setFilterCharacters(data);
        });
    }
  return (
    <button onClick={handleReset}>Reiniciar</button>
  )
}

export default ButtonReset;

ButtonReset.propTypes = {
    setCharacterList: PropTypes.func, 
    setFilterName: PropTypes.func, 
    setFilterHouse: PropTypes.func, 
    setFilterCharacters: PropTypes.func, 
    setFilterGender: PropTypes.func

}