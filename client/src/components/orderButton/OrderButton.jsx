import { useDispatch, useSelector } from "react-redux"
import { filterTipo, orderCards } from "../../Redux/Actions"
import { useState } from "react";
import Style from './OrderButton.module.css'

const OrderButton = () => {

    const [tipo, setTipo] = useState('')

    const types = useSelector(state => state.allTypes);

    const dispatch = useDispatch()

    const handleChangue = (event) => {
        const value = event.target.value

        setTipo(value)
    }

    const orders = (event) => {
        const name = event.target.name
        dispatch(orderCards(name))
    }

    return (
        <div className={Style.container}>
            <button name="AZNombre" onClick={orders}>Asc Nombre</button>
            <button name="ZANombre" onClick={orders}>Des Nombre</button>
            <button name="AZAtaque" onClick={orders}>Asc Ataque</button>
            <button name="ZAAtaque" onClick={orders}>Des Ataque</button>
            <button name="DB" onClick={orders}>DB</button>
            <button name="API" onClick={orders}>API</button>
            <select name="tipos" onChange={handleChangue}>
                {types.map(tipo => <option value={tipo.id}>{tipo.nombre}</option>)}
            </select>
        </div>
    )
}

export default OrderButton