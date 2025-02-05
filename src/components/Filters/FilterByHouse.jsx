import PropTypes from "prop-types";

function FilterByHouse({filterHouse, setFilterHouse}) {

    const handleSelect = (ev) => {
        setFilterHouse(ev.target.value)
    }
  return (
    <div>
        <label htmlFor="houseSelection">Selecciona la casa: </label>
        <select value={filterHouse} id="houseSelection" onChange={handleSelect}>
            <option value="Gryffindor">Gryffindor</option>
            <option value="Slytherin">Slytherin</option>
            <option value="Hufflepuff">Hufflepuff</option>
            <option value="Ravenclaw">Ravenclaw</option>
        </select>
    </div>
  )
}

export default FilterByHouse;

FilterByHouse.propTypes = {
    filterHouse: PropTypes.string,
    setFilterHouse: PropTypes.func   
}