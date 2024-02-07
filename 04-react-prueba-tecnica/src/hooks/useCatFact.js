import { useState, useEffect } from 'react';

import { getRandomFact } from './../services/facts.js';

export const useCatFact = () => {
    const [fact, setFatch] = useState(null);

    const refreshRandomFact = async () => {
        const newFact = await getRandomFact()
        setFatch(newFact)
    }

    useEffect(() => {
        refreshRandomFact()
    },[])

    return {fact, refreshRandomFact}
}