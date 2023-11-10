import { Link } from "react-router-dom"
import style from './Landing.module.css'
import Bienvenido from '../../assets/Bienvenido.png'
const Landing = () => {
    return (
        <div>
        <section className={style.container}>
            <img src={Bienvenido} alt="" />
            <Link to='home'>
                <button>Entrar</button>
            </Link>
        </ section>
        </div>
    )
}

export default Landing