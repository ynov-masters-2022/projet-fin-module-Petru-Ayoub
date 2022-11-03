import md5 from "md5";

const BASE_URL = process.env.REACT_APP_BASE_URL;

const fetchData = async (content, id, offset) => {

  let characterURL = `${BASE_URL}/${content}`;
  let contentId = "";
  contentId = typeof id !== 'undefined' ? "/" + id : "";


  //timestamp to generate a hash
  let ts = Date.now().toString();
  let privateKey = process.env.REACT_APP_PRIVATE_KEY;
  let publicKey = process.env.REACT_APP_PUBLIC_KEY;
  let hash = md5(ts + privateKey + publicKey);

  let url = `${characterURL}${contentId}?limit=50&offset=${offset}&ts=${ts}&apikey=${publicKey}&hash=${hash}`;

  console.log(url)

  try {
    let response = await fetch(url);
    let result = await response.json();
    console.log("fetch form data")
    return result;
  } catch (err) {
    console.error(err);
    return;
  }
};

export { fetchData };
