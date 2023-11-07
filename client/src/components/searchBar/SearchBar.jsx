import Style from './SearchBar.module.css'

const SearchBar = () => {
    return(
        <>
        <form action=""></form>
        <input type="text" placeholder='Buscar Pokemon' className={Style.buscar}/>
        <button className={Style.buscarButton}>Buscar</button>
        </>
    )
}

export default SearchBar