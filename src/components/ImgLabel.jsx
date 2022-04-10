function ImgLabel({ getImg, imgLinks }) {
  console.log('ImgLabel imgLinks: ', imgLinks);
  return (
    <>
      <h1>get image component is here</h1>
      <p>{imgLinks}</p>
      <button onClick={getImg}>get img</button>
      {!!imgLinks ? (
        imgLinks.map((link, index) => {
          return <img src={link} alt="" key={`album_${index}`} />;
        })
      ) : (
        <p>imgLinks is empty</p>
      )}
    </>
  );
}

export default ImgLabel;
