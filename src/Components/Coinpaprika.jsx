import axios from 'axios';
import React, { useEffect, useState } from 'react';
import styles from '../style';
import IconSvg from './IconSvg';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import {addComma, nameCleanup} from './HelperFunctions';
import { DataGrid } from '@mui/x-data-grid';

function Coinpaprika() {
  const [portfolio, setPortfolio] = useState([]);

  useEffect(() => {

    async function fetchExchangeRates() {      
      const assets = [
        'btc-bitcoin', 
        'eth-ethereum', 
        'usdt-tether', 
        'doge-dogecoin',
        'sol-solana',
        'xrp-XRP'
      ]

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
          const assetName = nameCleanup(assets[index])
          const assetPrice = response.data[0].quotes.USD.price
          const assetMarketSize = response.data[0].quotes.USD.volume_24h
        
          return {
            id: index,
            icon: svg,
            name: assetName,
            price: Math.round(assetPrice*100)/100,
            marketSize: Math.round(assetMarketSize*100)/100
          };
        }); 
        setPortfolio(fetchedList)
      } catch (error) {
        console.error(error)
      }
    }
    fetchExchangeRates();
  }, []);

  const columns = [
    { field: 'icon', headerName: 'ICON', width: 100, renderCell: (params) => (
      <div  dangerouslySetInnerHTML={{ __html: params.value}} />
    ), },
    { field: 'name', headerName: 'NAME',width:  200},
    { field: 'price', headerName: 'PRICE', width: 200 },
    { field: 'marketSize', headerName: 'MARKET SIZE', width: 200},
  ];

  const rows = portfolio;

  return (
    <div className={`${styles.flexCenter}`}>
      {/* <ul className={`${styles.boxWidth} ` }>
      <li className={` ${styles.flexCenter} `}>
          <Typography className={` ${styles.tableTitleText} `}>ICON</Typography>
          <Typography  className={` ${styles.tableTitleText} `}>NAME</Typography>
          <Typography  className={` ${styles.tableTitleText} `}>PRICE</Typography>
          <Typography className={` ${styles.tableTitleText} `}>MARKET SIZE</Typography>
        </li>
        <Divider variant="middle" />
        {portfolio.map((asset, index) => (
          <li key={index} className={`${styles.flexCenter} `}>
            <Typography  dangerouslySetInnerHTML={{ __html: asset.icon }} className={` ${styles.tableText} `}/>
            <Typography  className={` ${styles.tableText} `}>{asset.name}</Typography>
            <Typography  className={` ${styles.tableText} `}>{asset.price}</Typography>
            <Typography  className={` ${styles.tableText} `}>{asset.marketSize}</Typography>
          </li>
        ))}
      </ul> */}

      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5},
          },
        }}
        pageSizeOptions={[5, 10]}
      />

    </div>
  );
}

export default Coinpaprika;


