import './App.css';
import Display from './components/Display';
import { useEffect, useState } from 'react';


function App() {
    
    const [level, setLevel] = useState(1);
    const [score, setScore] = useState(0);
    const [topScore, setTopScore] = useState(score);
    const [images, setImages] = useState(() => {
        
        let images = []
        
        for (let i = 1; i < 10; i++) {
            images.push(`/images/image${i}.jpg`);
        }

        return images;

    });

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

    function handleClick() {

        setScore(score + 1);
        setImages(shuffleImages(images));
        
    }

    return (
        <div className="flex flex-col flex-ai-c">
            <h1>Test your memory!</h1>
            <div className="container flex flex-row flex-jc-se">
                <h2>Level: {level}</h2>
                <h2>Score: {score}</h2>
                <h2>Top Score: {topScore}</h2>
            </div>
            <Display images={images} handleClick={handleClick}/>
        </div>
    );
}

export default App;
