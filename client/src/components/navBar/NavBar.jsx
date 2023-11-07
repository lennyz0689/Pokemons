import SearchBar from "../searchBar/SearchBar"
import Style from './NavBar.module.css'
import { Link } from "react-router-dom"

const NavBar = () => {
    return (
        <div>
            <nav className={Style.menu}>
                <ul>
                    <Link to='/home'><span>Home </span></Link>
                    <Link to='/form'><span>Agregar</span></Link>
                </ul>
                <SearchBar />
            </nav>
        </div>
    )
}

export default NavBar