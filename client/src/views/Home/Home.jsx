import { useDispatch, useSelector } from "react-redux"
import CardContainer from "../../components/cardContainer/CardContainer"
import NavBar from "../../components/navBar/NavBar"
import { useEffect } from "react"
import { getPokemon } from "../../Redux/Actions"

const Home = () => {

    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getPokemon())
    },[dispatch])


    return (
        <>
            <NavBar />
            <CardContainer/>
        </>
    )
}

export default Home