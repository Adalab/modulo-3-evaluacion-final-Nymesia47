import '/src/styles/filters.scss'
import FilterByHouse from "./FilterByHouse";
import FilterByName from "./FilterByName"
import PropTypes from "prop-types";

function Filters({setFilterName, filterName, filterHouse, setFilterHouse}) {

    const handleForm =(ev) => {
        ev.preventDefault()
    }

  return (
    <form onSubmit={handleForm} className="filter-form">
        <FilterByName setFilterName={setFilterName} filterName={filterName}/>
        <FilterByHouse filterHouse={filterHouse} setFilterHouse={setFilterHouse}/>
    </form>
  )
}

export default Filters;

Filters.propTypes = {
    setFilterName: PropTypes.func,
    filterName: PropTypes.string,
    filterHouse: PropTypes.string,
    setFilterHouse: PropTypes.func
}