import FilterByName from "./FilterByName"
import PropTypes from "prop-types";

function Filters({setFilterName, filterName}) {

    const handleForm =(ev) => {
        ev.preventDefault()
    }

  return (
    <form onSubmit={handleForm}>
        <FilterByName setFilterName={setFilterName} filterName={filterName}/>
    </form>
  )
}

export default Filters;

Filters.propTypes = {
    setFilterName: PropTypes.func,
    filterName: PropTypes.string
}