import { useCatImg } from './hooks/useCatImg.js';
import { useCatFact } from './hooks/useCatFact.js';

import './App.css';

export const App = () => {
    
    const { fact, refreshRandomFact } = useCatFact();
    const { imgUrl } = useCatImg({fact});

    const handleClick = async () => {
        refreshRandomFact();
    }
    
    return (
        <main>
            <h1>App de gatitos</h1>
            <button onClick={handleClick}>Get new fact</button>
            {fact && <p>{fact}</p>} 
            {imgUrl && <img src={imgUrl} alt={`Image extracted using the first  rhee words for ${fact}`}/>}          
        </main>
    )
}