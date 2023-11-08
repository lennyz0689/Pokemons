import { useSelector } from "react-redux"
import Card from "../../components/card/Card"


const Search = () => {
    const pokemons = useSelector(state => state.pokemonName)
    console.log(pokemons);
    return (
        <section>
            <h1>{pokemons.map(p => p.nombre)} </h1>
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

export default Search