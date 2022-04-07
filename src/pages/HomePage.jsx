import imgurApi from '../components/api';
import { CLIENT_ID } from '../components/utils/Constants';
import { useState } from 'react';
import ImgLabel from '../components/ImgLabel';
import axios from 'axios';

function HomePage() {
  const imgId = 'INesDmY';
  const [imgLink, setImgLink] = useState('');

  const apiOptions = (id, method) => {
    const url = imgurApi(id)[method]();
    const options = {
      headers: {
        Authorization: `Client-ID ${CLIENT_ID}`
      }
    };
    return {url, options};
  }

  async function getImg(id) {
    try {
      const {url, options} = apiOptions(id, 'getImgApi');
      const res = await axios.get(url, options);
      const link = res.data.data.link;
      setImgLink(link); 
    } catch (error) {
      console.log(error);
    }
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
