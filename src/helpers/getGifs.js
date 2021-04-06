export const getGif = async(category)=>{
    console.log(category);
    const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI(category) }&limit=10&api_key=LK48xrgUrOdbuqk6nAaz95PXjU2tDWzU`;
    const resp = await fetch(url);
    const {data} = await resp.json();

    const gifs = data.map( elem =>{
        return {
            id: elem.id,
            title: elem.title,
            url: elem.images?.downsized.url
        }
    } )

    return gifs;
}