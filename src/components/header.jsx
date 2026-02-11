import { Link } from "react-router-dom"

const Header = () => {
  return (
    <nav>
        <Link to="/">
        <img src="/src/assets/logo.png" alt="Logo" className="h-10 w-10" />
        </Link>
    </nav>
  )
}

export default Header