import './App.css';
import Display from './components/Display';
import { useEffect, useState } from 'react';

function App() {
    
    let levelOne = [
        'image1.jpg',
        'image2.jpg',
        'image3.jpg'
    ]

    const [selected, setSelected] = useState(new Map());
    const [level, setLevel] = useState(1);
    const [score, setScore] = useState(0);
    const [topScore, setTopScore] = useState(score);
    const [images, setImages] = useState(levelOne);

    useEffect(() => {
        setImages(shuffleImages(images));
        if (score > topScore) {
            setTopScore(score);
        }
    }, [score, topScore, images])

    useEffect(() => {
        if (score == level + 2) {
            setLevel(level + 1);
            setImages(images.concat(`image${level + 3}.jpg`));
        }
    }, [score, level, images])

    function shuffleImages(images) {

        let temp;
        let randomIndex;

        // loop through images
        for (let i = 0; i < images.length; i++) {

            randomIndex = Math.floor(Math.random() * (images.length - 1))
            temp = images[i]
            images[i] = images[randomIndex]
            images[randomIndex] = temp

        }

        return images

    }

    function handleClick(event) {

        // if image chosen is in selected, update scores, reset selected and display 'Game Over'
        if (selected.get(event.target.alt) !== undefined) {
            // TODO: create overlay to display 'Game Over'
            window.alert('Game over!');
            setSelected(new Map());
            setLevel(1);
            setScore(0);
            setImages(levelOne);
        // else, add image to selected, increment score and shuffle images
        } else {
            setSelected(new Map(selected.set(event.target.alt,1)));
            setScore(score + 1);
        }
        
    }

    return (
        <div className="flex flex-col flex-ai-c">
            <h1>Test your memory!</h1>
            <div className="container flex flex-row flex-jc-se">
                <h2>Level: {level}</h2>
                <h2>Score: {score}</h2>
                <h2>Top Score: {topScore}</h2>
            </div>
            <h3>Select an image that you haven't selected before</h3>
            <Display images={images} handleClick={handleClick}/>
        </div>
    );
}

export default App;
