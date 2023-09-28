import React, { useState, useEffect } from 'react';
import axios from 'axios';
 
function CryptoAPI() {
  const [portfolio, setPortfolio] = useState([]);
  useEffect(() => {
    async function fetchExchangeRates() {
      const assets = ['BTC', 'ETH', 'XRP','PEPE','DOGE'];

      const promises = assets.map(asset =>
        axios.get(`https://rest.coinapi.io/v1/exchangerate/${asset}/USD?apikey=D08C9C13-EA00-4A70-8156-6ABB5C12585E`))
      const responses = await Promise.all(promises);

      const exchangeRates = responses.reduce((acc, response, index) => {
        acc[assets[index]] = response.data.rate;
        return acc;
      }, {});

    //   const urls = responses.map(response => {
    //     const path = response.data.path;
    //     const url = `https://rest.coinapi.io${path}`;
    //     return url;
    //   });
      
    //   console.log(urls);

      setPortfolio(exchangeRates);
    }
    fetchExchangeRates();
  }, []);
  
  return (
    <div className="CryptoAPI">
     <ul>
        {Object.entries(portfolio).map(([asset, exchangeRate]) => (
          <li key={asset}>{asset}: {exchangeRate}</li>
        ))}
      </ul>
    </div>
  );
}
export default CryptoAPI;