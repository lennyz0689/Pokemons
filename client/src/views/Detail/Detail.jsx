import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { getPokemonById } from "../../Redux/Actions"
import NavBar from "../../components/navBar/NavBar"

const Detail = () => {

    const { id } = useParams()

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getPokemonById(id))
    }, [dispatch, id])

    const pokemon = useSelector(state => state.pokemonId)

    return (
        <section>
            <NavBar/>
            <div>
                <img src={pokemon.map(p => p.imagen)} alt={pokemon.map(p => { p.nombre })} />
            </div>
            <div>
                <h1>id: {id}</h1>
                <h1>{pokemon.map(p => p.nombre) }</h1>
                <span>Vida: {pokemon.map(p=>p.vida)}</span>
                <span>Ataque: {pokemon.map(p=>p.ataque)}</span>
                <span>Defensa: {pokemon.map(p=>p.defensa)}</span>
                <span>Velocidad: {pokemon.map(p=>p.velocidad)}</span>
                <span>Altura: {pokemon.map(p=>p.altura)}</span>
                <span>Peso: {pokemon.map(p=>p.peso)}</span>
                <span>Tipo: {pokemon.map(p=>p.types.map(t=>t.nombre).join(', '))}</span>
            </div>
        </section>
    )
}

export default Detail