import { createContext, useEffect, useState } from "react";

export const CoinContext = createContext();

const CoinContextProvider = (props) =>{
    
    const [allCoins, setAllCoins] = useState([]);
    const [currency, setCurrency] = useState(
        {
            name:"usd", 
            symbol : "$"
        }
    );
    const [currentPage, setCurrentPage] = useState(1);
    const fetchAllCoins = async(page) => {
        const options = {
            method: 'GET',
            headers: {accept: 'application/json', 'x-cg-demo-api-key': 'CG-8vCSQyqEeVzj9YRaibuHuH54'}
          };
          
          fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency.name}&per_page=15&page=${page}`, options)
            .then(response => response.json())
            .then(response => setAllCoins(response))
            .catch(err => console.error(err));
    }

    useEffect(()=>{
        fetchAllCoins(currentPage);
    },[currency,currentPage])

    const contextValue = {
        allCoins, currency, setCurrency, fetchAllCoins,currentPage, setCurrentPage
    };
    return(
        <CoinContext.Provider value={contextValue}>
            {props.children}
        </CoinContext.Provider>
    );
}

export default CoinContextProvider;
