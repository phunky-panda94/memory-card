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

    // shuffle images on increase in score
    useEffect(() => {
        setImages(shuffleImages(images));
    }, [score, images])

    // update topScore
    useEffect(() => {
        if (score > topScore) {
            setTopScore(score);
        }
    }, [score, topScore])

    // win
    useEffect(() => {
        if (score === 9) {
            window.alert('Congratulations! You win!');
            if (window.confirm('Want to play again?')) {
                resetGame();
            }
        }
    })

    // nextLevel if score = currentLevel * 3
    useEffect(() => {
        if (score < 9 && score === level * 3) {
            setLevel(level + 1);
        }
    }, [score, level])

    // add images when nextLevel
    useEffect(() => {
        if (level > 1) {
        
            let nextLevel = [
                `image${level * 3 - 2}.jpg`,
                `image${level * 3 - 1}.jpg`,
                `image${level * 3}.jpg`
            ]
            
            setImages(images => shuffleImages(images.concat(nextLevel)));
            
        }
    }, [level])

    function resetGame() {
        setScore(0);
        setTopScore(0);
        setLevel(1);
        setImages(levelOne);
        setSelected(new Map());
    }

    function handleClick(event) {

        // if image chosen is in selected, update scores, reset selected and display 'Game Over'
        if (selected.get(event.target.alt) !== undefined) {
            // TODO: create overlay to display 'Game Over'
            window.alert('Game over!');
            resetGame();
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

export default App;
