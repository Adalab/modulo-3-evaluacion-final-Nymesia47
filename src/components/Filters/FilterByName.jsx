import PropTypes from "prop-types";

function FilterByName({setFilterName, filterName}) {

    const handleInput = (ev) => {
        setFilterName(ev.target.value);
    }

  return (
    <div>
      <label htmlFor="searchName" className="filter-form-label">Busca por personaje: </label>
      <input type="text" value={filterName} id="searchName" className="filter-form-input" onChange={handleInput} />
    </div>
     
    
  )
}

export default FilterByName;

FilterByName.propTypes = {
    setFilterName: PropTypes.func,
    filterName: PropTypes.string
}