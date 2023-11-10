import { useSelector } from 'react-redux'
import Style from './CardContainer.module.css'
import Card from '../card/Card'
import { Link } from 'react-router-dom'

const CardContainer = () => {
    const pokemonName = useSelector(state => state.pokemonName);
    const allPokemons = useSelector(state => state.allPokemons);

    if (typeof pokemonName === 'string') {
        return (
            alert(pokemonName)
        );
    }

    let pokemons = pokemonName.length > 0 ? pokemonName : allPokemons;

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