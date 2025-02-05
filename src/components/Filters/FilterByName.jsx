import PropTypes from "prop-types";

function FilterByName({setFilterName, filterName}) {

    const handleInput = (ev) => {
        setFilterName(ev.target.value);
    }

  return (
    <label htmlFor="searchName">
        Busca por personaje: <input type="text" value={filterName} id="searchName" className="filter-form-input" onChange={handleInput} />
    </label>
  )
}

export default FilterByName;

FilterByName.propTypes = {
    setFilterName: PropTypes.func,
    filterName: PropTypes.string
}