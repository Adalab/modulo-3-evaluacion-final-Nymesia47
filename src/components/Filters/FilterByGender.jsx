import PropTypes from "prop-types";

function FilterByGender({setFilterGender, filterGender}) {

    const handleSelectGender = (ev)=> {
      setFilterGender(ev.target.value)
    }
  
    return (
        <div>
            <label htmlFor="gender" className="filter-form-label">Selecciona un género: </label>
            <select value={filterGender} id="gender" className="filter-form-input" onChange={handleSelectGender}>
               <option value="">Seleccione</option>
               <option value="female">Mujer</option>
               <option value="male">Hombre</option>
            </select>
        </div>
    )
  }
  
  export default FilterByGender;

  FilterByGender.propTypes = {
    setFilterGender: PropTypes.func,
    filterGender: PropTypes.string
  }