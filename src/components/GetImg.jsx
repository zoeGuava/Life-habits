function GetImg({ getImg, imgLink }) {
  return (
    <>
      <h1>get image component is here</h1>
      <button onClick={getImg}>get img</button>
      {!!imgLink ? <img src={imgLink} alt="" /> : <p>imgLink is empty</p>}
    </>
  );
}

export default GetImg;
