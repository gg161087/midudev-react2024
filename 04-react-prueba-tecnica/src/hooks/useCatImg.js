import { useState, useEffect } from 'react';

export const useCatImg = ({fact}) => {
    const [imgUrl, setImgUrl] = useState();

    const getRandomImg = async () => {  
        if (!fact) return
        const threeFirstWords = fact.split(' ', 3).join(' ') //para obtener 3 fact.split(' ', 3)                                  
            fetch(`https://cataas.com/cat/says/${threeFirstWords}?size=50&color=red`)
                .then(res =>{ 
                    const { url } = res
                    setImgUrl(url)                            
                })                       
    }

    useEffect(() => {        
        getRandomImg()
    },[fact])

    return { imgUrl }
}