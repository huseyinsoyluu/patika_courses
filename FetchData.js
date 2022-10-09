import axios from "axios";

async function getData(userID) {
  const { data: userData } = await axios(
    `https://jsonplaceholder.typicode.com/users/${userID}`
  );

  const { data: userPostData } = await axios(
    `https://jsonplaceholder.typicode.com/posts?userId=${userID}`
  );

  return { userData, userPostData };
}

export default getData;
