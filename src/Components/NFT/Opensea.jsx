import axios from 'axios';
import React, { useEffect, useState } from 'react';
import styles from '../../style';
import { Gallery } from './Gallery'



function Opensea() {
  const [gallery, setGallery] = useState([]);

  useEffect(() => {

    async function fetchNFT() {      

      try {
        const promise =  axios.get(`https://api.opensea.io/api/v2/chain/ethereum/account/0xF68e4d63C8Ea83083d1cB9858210Cf2b03D8266B/nfts`, {
            headers: {
                accept: 'application/json', 
                'x-api-key': 'dbade0c9e3364cf29487e74831a52337'
            }
          })
        
        const responses = await Promise.all([promise]);

        let nftArr = responses[0].data.nfts

        let fetchedList = nftArr.map((item)=>{
            const retObj = {
                image_url: item.image_url,
                name: item.name,
                desciption: item.description
            }
            return retObj
        })

        setGallery(fetchedList)
      } catch (error) {
        console.error(error)
      }
    }
    fetchNFT();
  }, []);


  const images = gallery.slice(0, 8).map((item, index) => {
    let position;
    let rotation = [0,0,0];
    if (index < 3) {
      // Left
      position = [index * -0.4-1.75, 0, index * 1.25+0.25];
      rotation = [0, Math.PI / 2.5, 0]
    } else if (index < 5) {
      // Front
      position = [-0.7 + (index - 3) * 1.4, 0, -0.6];

    } else if (index < 8) {
      // Right
      index -= 5
      position = [index * 0.4+1.75, 0, index * 1.25+0.25];
      rotation = [0, -Math.PI / 2.5, 0]
    } 

    return {
      position,
      rotation,
      url: item.image_url
    };
  });

  



  return (
     <>
    <Gallery images={images} />
    </>
  );
}

export default Opensea;


