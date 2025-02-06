import PropTypes from "prop-types";

function ButtonSort({data, setFilterCharacters}) {

    const handleSort = ()=> {
        let sortedData = [...data].sort(function (a, b){
            if (a.name < b.name) {
              return -1;
            }
            if (a.name > b.name) {
              return 1;
            } 
            return 0;
        });

        setFilterCharacters(sortedData);
    }

    
  return (
    <button onClick={handleSort}>Ordena los personajes alfabéticamente</button>
  )
}

export default ButtonSort;

ButtonSort.propTypes = {
    data: PropTypes.array,
    setFilterCharacters: PropTypes.func   
}