import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { getPokemonById } from "../../Redux/Actions"

const Detail = () => {

    const { id } = useParams()

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getPokemonById(id))
    }, [dispatch, id])

    const pokemon = useSelector(state => state.pokemonId)

    return (
        <section>
            <div>
                <img src={pokemon.map(p=>p.imagen)} alt={pokemon.map(p=>{p.nombre})}/>
            </div>
            <h1>Esta es la vista del Detail {id}</h1>
            <h2>{pokemon.map(p=>p.nombre)}</h2>
        </section>
    )
}

export default Detail