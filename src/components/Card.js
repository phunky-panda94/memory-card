function Card(props) {
    return (
        <div className="card">
            <img alt={props.image} src={`/images/${props.image}`} onClick={props.handleClick}></img>
        </div>
    )
}

export default Card;