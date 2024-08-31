import { createContext, useEffect, useState } from "react";

export const NewsContext = createContext();

const NewsContextProvider = (props) => {
    const [news, setAllNews] = useState([]);

    const fetchAllNews = async() =>{

        const options ={
            method : 'GET',
            headers : {accept : 'application/json'}
        }

        fetch(`https://cryptopanic.com/api/free/v1/posts/?auth_token=12b5b6168390d9c380631274b6f2e47427ae15bf&public=true&page=1&filter=important`, options)
        .then(response => response.json())
        .then(response => setAllNews(response))
        .catch(err => console.log(err));

    }

    useEffect(()=>{
        fetchAllNews();
    },[])

    const contextValue = {
        news
    };
    
    return(
        <NewsContext.Provider value={contextValue}>
            {props.children}
        </NewsContext.Provider>
    ); 
}

export default NewsContextProvider;