import axios from 'axios';
import React, { useEffect, useState } from 'react';
import styles from '../../style';


function Opensea() {
  const [gallery, setGallery] = useState([]);

  useEffect(() => {

    async function fetchNFT() {      

      try {
        const promise =  axios.get(`https://api.opensea.io/api/v2/chain/ethereum/account/0x850cAE094cE34C564327818631287A75d3CEe6CA/nfts`, {
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


  return (
    <div className={`${styles.flexCenter}`} >
        <div className="gallery">
            {gallery.map((image, index) => (
                <img key={index} src={image.image_url} alt={`Image ${index}`} />
            ))}
            </div>
    </div>
  );
}

export default Opensea;


