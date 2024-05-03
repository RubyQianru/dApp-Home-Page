import axios from 'axios';
import React, { useEffect, useState } from 'react';
import styles from '../../../style';
import { addComma } from './HelperFunctions';
import { Skeleton } from '@mui/material';
import '../index.css'

function GlobalMarket() {
  const [volume, setVolume] = useState(0);

  useEffect(() => {

    async function fetchData() {
      const exchangeRatePromises = [
        axios.get('https://coinpaprika1.p.rapidapi.com/global', {
          headers: {
            'X-RapidAPI-Key': 'd25eb9279amshfda026b08d9a984p1ea465jsn603867ae7669',
            'X-RapidAPI-Host': 'coinpaprika1.p.rapidapi.com'
          }
        }),
      ];

      try {
        const responses = await Promise.all(exchangeRatePromises);
        setVolume(addComma(responses[0].data.market_cap_usd))
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  }, []);

  return (  
    <div className = {`${styles.paddingY} `} >
      <p className="text-xl md:text-2xl" >
        Current Global Market Value:
      </p>
        <div className={`gradientText`} >
          {volume == 0 ? <Skeleton variant="text" width={500} animation="wave"/> : `$${volume}`}
        </div>
    </div>
  );
}

export default GlobalMarket;