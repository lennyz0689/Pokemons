import { useState } from 'react'
import Style from './SearchBar.module.css'
import { useDispatch } from 'react-redux'
import { cleanCard, getPokemonByName } from '../../Redux/Actions'
import { Link } from 'react-router-dom'

const SearchBar = () => {
    const dispatch = useDispatch()

    const [name, setName] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault()
        dispatch(getPokemonByName(name))

        return () => dispatch(cleanCard())
    }

    const handleChange = (event) => {
        setName(event.target.value)
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder='Buscar Pokemon' className={Style.buscar} name='name' onChange={handleChange} value={name} />
            <input type='submit' value='Buscar' className={Style.buscarButton} />
        </form>
    )
}

export default SearchBar