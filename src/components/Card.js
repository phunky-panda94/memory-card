function Card(props) {
    return (
        <div className="card" onClick={props.handleClick}>
            <img src={props.image}></img>
        </div>
    )
}

export default Card;