import './card-container.styles.css'
const CardContainer = (props) => {

    const { name, id, email } = props.monster
    return (
        <div className={`card-container ${props.className}`} key={id}>
            <img
                alt={`monster ${name}`}
                src={`https://robohash.org/${id}?set=set2&size=180x180`}
            />
            <h2>{name}</h2>
            <p>{email}</p>

        </div>
    )
}

export default CardContainer;
