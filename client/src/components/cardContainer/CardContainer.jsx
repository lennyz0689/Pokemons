import { useSelector } from 'react-redux'
import Style from './CardContainer.module.css'
import Card from '../card/Card'
import { Link } from 'react-router-dom'

const CardContainer = () => {
    let pokemons
    if (useSelector(state => state.pokemonName).length < 1) {
        pokemons = useSelector(state => state.allPokemons)
    }else{
        pokemons = useSelector(state => state.pokemonName)
    }

    return (
        <section className={Style.container}>
            {pokemons.map(p => {
                const tipos = p.types.map(t => t.nombre).join(", ")
                return (
                    <Link to={`/detail/${p.id}`} key={p.id} >
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