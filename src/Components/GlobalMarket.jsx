import axios from 'axios';
import React, { useEffect, useState } from 'react';
import styles from '../style';
import Typography from '@mui/material/Typography';

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
        // Add more axios.get() calls for other exchange rates if needed
      ];

      try {
        const responses = await Promise.all(exchangeRatePromises);
        setVolume(responses[0].data.volume_24h_usd)
        console.log(volume);
      } catch (error) {
        console.error(error);
      }
  
    }

    fetchData();
  }, []);

  return (
    <div className = {`${styles.paddingY}`}>
      <Typography variant="h5">
        Current Global Market Value:
      </Typography>
      <div className={`${styles.dataGradient}`} >
        ${volume}
      </div>
    </div>
    

  );
}

export default GlobalMarket;