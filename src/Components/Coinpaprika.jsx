import axios from 'axios';
import React, { useEffect, useState } from 'react';
import styles from '../style';
import IconSvg from './IconSvg';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';



function Coinpaprika() {
  const [portfolio, setPortfolio] = useState([]);

  useEffect(() => {

    async function fetchExchangeRates() {      
      const assets = ['btc-bitcoin', 'eth-ethereum', 'usdt-tether', 'doge-dogecoin','sol-solana','xrp-xrp']

      try {
        const promise = assets.map(asset =>{
          return axios.get(`https://coinpaprika1.p.rapidapi.com/coins/${asset}/markets`, {
            headers: {
              'X-RapidAPI-Key': 'd25eb9279amshfda026b08d9a984p1ea465jsn603867ae7669',
              'X-RapidAPI-Host': 'coinpaprika1.p.rapidapi.com'
            }
          })
        })
        const responses = await Promise.all(promise)

        const fetchedList = responses.map((response, index) => {
          const svg = IconSvg[assets[index]]
          const assetName = response.data[0].base_currency_name
          const assetPrice = response.data[0].quotes.USD.price
          const assetMarketSize = response.data[0].quotes.USD.volume_24h
        
          return {
            icon: svg,
            name: assetName,
            price: assetPrice,
            marketSize: assetMarketSize
          };
        }); 
        setPortfolio(fetchedList)
      } catch (error) {
        console.error(error)
      }
    }

    fetchExchangeRates();
  }, []);

  return (
    <div className={`${styles.flexCenter}`}>
      <ul className={`${styles.boxWidth} ` }>
      <li className={` ${styles.flexCenter} `}>
          <Typography variant="h5" className={` ${styles.tableText} `}>ICON</Typography>
          <Typography variant="h5" className={` ${styles.tableText} `}>NAME</Typography>
          <Typography variant="h5" className={` ${styles.tableText} `}>PRICE</Typography>
          <Typography variant="h5" className={` ${styles.tableText} `}>MARKET SIZE</Typography>
        </li>
        <Divider variant="middle" />
        {portfolio.map((asset, index) => (
          <li key={index} className={`${styles.flexCenter} `}>
            <Typography variant="h6" dangerouslySetInnerHTML={{ __html: asset.icon }} className={` ${styles.tableText} `}/>
            <Typography variant="h6" className={` ${styles.tableText} `}>{asset.name}</Typography>
            <Typography variant="h6" className={` ${styles.tableText} `}>{asset.price}</Typography>
            <Typography variant="h6" className={` ${styles.tableText} `}>{asset.marketSize}</Typography>
          </li>
        ))}
      </ul>

    </div>
  );
}

export default Coinpaprika;


