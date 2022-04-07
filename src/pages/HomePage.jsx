import imgurApi from '../components/api';
import { CLIENT_ID } from '../components/utils/Constants';
import { useState } from 'react';
import ImgLabel from '../components/ImgLabel';

function HomePage() {
  const imgId = 'INesDmY';
  const [imgLink, setImgLink] = useState('');

  const handleFetch = (method, id) => {
    const url = imgurApi(id).getImgApi();
    const data = {
      method: method,
      headers: {
        Authorization: `Client-ID ${CLIENT_ID}`
      }
    };
    return fetch(url, data);
  }

  async function getImg(imgId) {
    const res = await handleFetch('GET', imgId);
    console.log('res: ', res);

    const processedRes = await res.json();
    console.log('processedRes: ', processedRes);
    
    const resLink = processedRes.data.link;
    console.log('resLink: ', resLink);
    
    setImgLink(resLink);
  }

  return (
    <>
      <h1>HomePage is working</h1>
      <ImgLabel
        getImg={() => getImg(imgId)}
        imgLink={imgLink}
      />
    </>
  );
}

export default HomePage;
