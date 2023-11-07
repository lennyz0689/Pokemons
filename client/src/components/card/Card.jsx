import Style from './Card.module.css'

const Card = ({ nombre, imagen, tipos }) => {
    return (
        <div className={Style.container}>
            <div className={Style.card}>
                <h1>{nombre}</h1>
                <img className={Style.pokemon} src={imagen} alt={nombre} />
                <h4>{tipos}</h4>
            </div>
        </div>
    )
}

export default Card