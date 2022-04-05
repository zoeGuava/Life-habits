import imgurApi from '../components/api';
import { CLIENT_ID } from '../components/utils/Constants';
import { useState } from 'react';
import ImgLabel from '../components/ImgLabel';

function HomePage() {
  const imgId = 'INesDmY';
  const [imgLink, setImgLink] = useState('');

  const fetchImg = (id) => {
    return fetch(imgurApi(id).getImgApi(), {
      method: 'GET',
      headers: {
        authorization: `Client-ID ${CLIENT_ID}`,
      }
    })
  };

  async function getImg(imgId) {
    const res = await fetchImg(imgId).catch(err => console.log(err));
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
