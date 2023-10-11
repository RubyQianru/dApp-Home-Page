import React, { useState, useEffect } from 'react';
import styles from '../style';



import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    margin: theme.spacing(2 ),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

import axios from 'axios';
 
function CryptoAPI() {
  const [portfolio, setPortfolio] = useState([]);

  useEffect(() => {
    async function fetchExchangeRates() {
      const assets = ['BTC', 'ETH', 'XRP','PEPE','DOGE']

      const promises1 = assets.map(asset => {
        return axios.get(`https://rest.coinapi.io/v1/exchangerate/${asset}/USD?apikey=D08C9C13-EA00-4A70-8156-6ABB5C12585E`)
      })

      const responses1 = await Promise.all(promises1)

      const fetchedList = responses1.reduce((acc, response, index) => {
        acc[assets[index]] = response.data.rate
        return acc
      }, {})


      setPortfolio(fetchedList)
    }
    fetchExchangeRates()

  }, []);

  const picList = [
      BTC, ETH, XRP, PEPE, DOGE
]

  return (
    
    <div className="CryptoAPI">
     <Box sx={{ flexGrow: 1 }}>
        {Object.entries(portfolio).map(([asset, exchangeRate], index) => (
          <Grid container key={asset} className='Item' rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            <Grid item xs={6}>
            <Item>
              {asset}: {exchangeRate} 
              <img src={picList[index]} alt={`${asset}`}/>
            </Item>
            </Grid> 
          </Grid>
        ))}
      </Box>
    </div>
  );
}
export default CryptoAPI;