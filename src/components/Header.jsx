import logo from '../images/harry-potter-logo-movie-gold-sticker.jpg';
import '../styles/Header.scss';

function Header() {
  return (
    <header>
      <img src={logo} alt="Harry Potter title logo" className="logo"/>
    </header>
  )
}

export default Header