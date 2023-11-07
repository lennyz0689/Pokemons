import { useSelector } from 'react-redux'
import Style from './CardContainer.module.css'
import Card from '../card/Card'
import { Link } from 'react-router-dom'

const CardContainer = () => {

    const pokemons = useSelector(state => state.allPokemons)
    return (
        <section className={Style.container}>
            {pokemons.map(p => {
                const tipos = p.tipo.map(t => t.Nombre).join(", ")
                return (
                    <Link to={`/detail/${p.id}`}>
                        <Card
                            key={p.id}
                            imagen={p.imagen}
                            nombre={p.nombre}
                            tipos={tipos}
                        />
                    </Link>
                )
            })}
        </section>
    )
}

export default CardContainer