import { useDispatch } from "react-redux"
import { page } from "../../Redux/Actions"

import Style from './Paginated.module.css'

const Paginated = () => {
    const dispatch = useDispatch()
    const pagination = (event) => {
        const name = event.target.name
        dispatch(page(name))
    }

    return(
        <div className={Style.container}>
            <button name='prev' onClick={pagination}>Anterior</button>
            <button name= 'next' onClick={pagination}>Siguiente</button>
        </div>
    )
}

export default Paginated