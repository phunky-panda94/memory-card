import Card from './Card';

function Display(props) {
    return (
        <div className="container flex flex-row flex-wrap flex-jc-se">
            {props.images.map(image => {
                return <Card key={image} image={image} handleClick={props.handleClick}/>
            })}
        </div>
    )
}

export default Display;