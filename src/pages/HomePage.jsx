import imgurApi from '../components/api';
import { CLIENT_ID } from '../components/utils/Constants';
import { useState } from 'react';
import ImgLabel from '../components/ImgLabel';
import axios from 'axios';

function HomePage() {
  // const imgId = 'INesDmY';
  const albumId = 'ABDhZzE';
  const [imgLinks, setImgLinks] = useState([]);

  const apiOptions = (id, method) => {
    const url = imgurApi(id)[method]();
    const options = {
      headers: {
        Authorization: `Client-ID ${CLIENT_ID}`,
      },
    };
    return { url, options };
  };

  // async function getImg(id) {
  //   try {
  //     const { url, options } = apiOptions(id, 'getImgApi');
  //     const res = await axios.get(url, options);
  //     const link = res.data.data.link;
  //     setImgLinks(link);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  async function getAlbum(id) {
    try {
      const { url, options } = apiOptions(id, 'getAlbumApi');
      const res = await axios.get(url, options);
      const images = res.data.data.images;
      const links = images.map(item => item.link);
      setImgLinks(links);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <h1>HomePage is working</h1>
      {/* <ImgLabel getImg={() => getImg(imgId)} imgLinks={imgLinks} /> */}
      <ImgLabel getImg={() => getAlbum(albumId)} imgLinks={imgLinks} />
    </>
  );
}

export default HomePage;
