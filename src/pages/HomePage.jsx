import imgurApi from '../components/api';
import { CLIENT_ID } from '../components/utils/Constants';
import { useState } from 'react';
import GetImg from '../components/GetImg';

function HomePage() {
  const imgId = 'INesDmY';
  const [imgLink, setImgLink] = useState('');

  function getImg(imgId) {
    console.log('getImg is working');
    console.log(imgId);
    fetch(imgurApi(imgId).getImgApi(), {
      headers: {
        authorization: `Client-ID ${CLIENT_ID}`,
      },
    })
      .then(response => response.text())
      .then(result => {
        console.log('result: ', result);
        console.log('response: ', JSON.parse(result));
        console.log('response.data: ', JSON.parse(result).data);
        const link = JSON.parse(result).data.link;
        setImgLink(link);
      })
      .catch(error => console.error('error', error));
  }

  return (
    <>
      <h1>HomePage is working</h1>
      <GetImg
        getImg={() => getImg(imgId)}
        imgLink={imgLink}
      />
    </>
  );
}

export default HomePage;
