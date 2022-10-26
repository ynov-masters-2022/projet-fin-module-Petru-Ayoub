import md5 from "md5";

const BASE_URL = process.env.REACT_APP_BASE_URL;

const directFetch = async (content) => {
    
    let characterURL = `${content}`;
    
    //timestamp to generate a hash
    let ts = Date.now().toString();
    let privateKey = process.env.REACT_APP_PRIVATE_KEY;
    let publicKey = process.env.REACT_APP_PUBLIC_KEY;
    let hash = md5(ts + privateKey + publicKey);

    let url = `${characterURL}?limit=50&ts=${ts}&apikey=${publicKey}&hash=${hash}`;

  console.log("url : " + url);

  try {
    let response = await fetch(url);
    let result = await response.json();
    return result;
  } catch (err) {
    console.error(err);
    return;
  }
};

export { directFetch };
