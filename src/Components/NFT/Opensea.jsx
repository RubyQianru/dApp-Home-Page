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

  // const images = [
  //   // Front
  //   // { position: [0, 0, 1.5], rotation: [0, 0, 0], url: pexel(1103970) },
  //   // Back
  //   { position: [-0.7, 0, -0.6], rotation: [0, 0, 0], url: gallery[0].image_url },
  //   { position: [0.7, 0, -0.6], rotation: [0, 0, 0], url: gallery[1].image_url },
  //   // Left
  //   { position: [-1.75, 0, 0.25], rotation: [0, Math.PI / 2.5, 0], url: gallery[2].image_url },
  //   { position: [-2.15, 0, 1.5], rotation: [0, Math.PI / 2.5, 0], url: gallery[3].image_url },
  //   { position: [-2.55, 0, 2.75], rotation: [0, Math.PI / 2.5, 0], url: gallery[4].image_url },
  //   // Right
  //   { position: [1.75, 0, 0.25], rotation: [0, -Math.PI / 2.5, 0], url: gallery[5].image_url},
  //   { position: [2.15, 0, 1.5], rotation: [0, -Math.PI / 2.5, 0], url: gallery[6].image_url },
  //   { position: [2.55, 0, 2.75], rotation: [0, -Math.PI / 2.5, 0], url: gallery[7].image_url}
  // ]

  // Update the images array whenever the gallery state changes
  const images = gallery.map((item, index) => {
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


