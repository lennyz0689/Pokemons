import { useState } from 'react'
import Style from './SearchBar.module.css'
import { useDispatch } from 'react-redux'
import { getPokemonByName } from '../../Redux/Actions'

const SearchBar = () => {
    const dispatch = useDispatch()

    const [name, setName] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault()
        dispatch(getPokemonByName(name))
    }

    const handleChange = (event) => {
        setName(event.target.value)
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder='Buscar Pokemon' className={Style.buscar} name='name' onChange={handleChange} value={name}/>
            <input type='submit' value='Buscar' className={Style.buscarButton} />
        </form>
    )
}

export default SearchBar