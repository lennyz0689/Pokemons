import { useDispatch, useSelector } from "react-redux"
import CardContainer from "../../components/cardContainer/CardContainer"
import { useEffect } from "react"
import { cleanCard, getPokemon, getTypes } from "../../Redux/Actions"
import Paginated from "../../components/paginated/Paginated"
import OrderButton from "../../components/orderButton/orderButton"

const Home = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(cleanCard())
        dispatch(getPokemon())
        dispatch(getTypes())
    }, [])


    return (
        <>
            <OrderButton />
            <CardContainer />
            <Paginated />
        </>
    )
}

export default Home