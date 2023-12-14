import axios from 'axios';
import React, { useEffect, useState } from 'react';
import styles from '../../style';
import IconSvg from './IconSvg';
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
        'xrp-XRP',
        'sol-solana',
        'ada-cardano',
        'doge-dogecoin',
        'trx-tron',
        'dai-dai',
        'weth-weth',
        'pepe-pepe'
      ]

      try {
        const promise = assets.map(asset =>{
          return axios.get(`https://coinpaprika1.p.rapidapi.com/coins/${asset}/markets`, {
            headers: {
              'X-RapidAPI-Key': 'a484eec776msh455d9765b4f7a5cp1c5ad7jsn48589d43ba07',
              'X-RapidAPI-Host': 'coinpaprika1.p.rapidapi.com'
            }
          })
        })

        const responses = await Promise.all(promise);

        let fetchedList = responses.map((response, index) => {
          const svg = IconSvg[assets[index]]
          const assetName = nameCleanup(assets[index])
          const assetPrice = response.data[0].quotes.USD.price
          const share = response.data[0].adjusted_volume_24h_share
          const assetMarketSize = response.data[0].quotes.USD.volume_24h / (share/100)

          const retObject = {
            id: index,
            key: index,
            icon: svg,
            name: assetName,
            price: (assetPrice).toFixed(2),
            marketSize: (assetMarketSize).toFixed(2),
          };
        
          return retObject;
        }); 
        setPortfolio(fetchedList)
      } catch (error) {
        console.error(error)
      }
    }
    fetchExchangeRates();
  }, []);

  const columns = [
    { field: 'icon', headerName: 'ICON', width: 250, renderCell: (params) => (
      <div  dangerouslySetInnerHTML={{ __html: params.value}} />
    ), },
    { field: 'name', headerName: 'NAME',width:  400},
    { field: 'price', headerName: 'PRICE', width: 400, renderCell: (params) => addComma(params.value) },
    { field: 'marketSize', headerName: '24H VOLUME', width: 400, renderCell: (params) => addComma(params.value)},
  ];

  const rows = portfolio;

  return (
    <div className={`${styles.flexCenter} `} >

      <DataGrid
        style={{fontSize: "20px"}}
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 10},
          },
        }}
        
      />

    </div>
  );
}

export default Coinpaprika;


