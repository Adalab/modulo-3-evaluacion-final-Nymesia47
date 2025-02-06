import { Link } from "react-router-dom"
import { IoIosArrowBack } from "react-icons/io";

function ButtonLink() {
  return (
    <Link to={"/"}>
    <button><IoIosArrowBack /> Volver</button>
    </Link>
  )
}

export default ButtonLink