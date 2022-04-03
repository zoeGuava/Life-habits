import { useState } from "react";

const CLIENT_ID = process.env.REACT_APP_CLIENT_ID;

function GetImg() {
  const [msg, setMsg] = useState('before getImg');
  const query = 'INesDmY';
  const url = `https://api.imgur.com/3/image/${query}`;
  const [imgLink, setImgLink] = useState('display image');

  const fetchImg = () => {
    fetch(url, {headers: {'authorization': `Client-ID ${CLIENT_ID}`}})
      .then(response => response.text())
      .then(result => {
        console.log('result: ', result);
        console.log('response: ', JSON.parse(result));
        setImgLink(JSON.parse(result).data.link);
        setMsg('after get img');
      })
      .catch(error => console.log('error', error));
  }

  return (
    <>
      <h1>GetImg components</h1>
      <p>{msg}</p>
      <button onClick={fetchImg}>GetImg</button>
      <p>img link: {imgLink}</p>
      <img src={imgLink} alt="" />
    </>
  )
}

export default GetImg;