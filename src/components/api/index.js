export default function imgurApi(query) {
  return {
    getImgApi: () => `https://api.imgur.com/3/image/${query}`,
    getAlbumApi: () => `https://api.imgur.com/3/album/${query}`,
  };
}
