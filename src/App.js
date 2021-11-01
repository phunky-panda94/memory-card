import './App.css';
import Display from './components/Display';

function App() {
    return (
    <div className="flex flex-col flex-ai-c">
        <h1>Test your memory!</h1>
        <div className="container flex flex-row flex-jc-se">
            <h2>Level:</h2>
            <h2>Score:</h2>
        </div>
        <Display />
    </div>
    );
}

export default App;
