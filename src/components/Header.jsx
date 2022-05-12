import { Link } from 'react-router-dom'
import '../style/Header.scss'

function Header() {
  return (
    <nav className="shiny-header-nav">
      <Link to="/">Accueil</Link>
      <Link to="/survey/1">Questionnaire</Link>
      {/* <Link to="/results">Résultats</Link> */}
      <Link to="/freelances">Freelances</Link>
    </nav>
  )
}

export default Header
