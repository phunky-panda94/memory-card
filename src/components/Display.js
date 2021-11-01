import Card from "./Card";

function Display(props) {
    return (
        <div className="container flex flex-row flex-wrap flex-jc-se">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
        </div>
    )
}

export default Display;