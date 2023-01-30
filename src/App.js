import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';

function App() {
  const [myData, setMyData] = useState([]);
  const [isError, setIsError] = useState("");

  // using Promises
  // useEffect(() => {
  //   axios
  //     .get("https://jsonplaceholder.typicode.com/posts")
  //     .then((response) => setMyData(response.data))
  //     .catch((error) => setIsError(error.message));
  // }, []);


// using async await
  const getMyPostData = async () => {
    try {
      const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
      setMyData(res.data);
    } catch (error) {
      setIsError(error.message);
    }
  };

  // NOTE:  calling the function
  useEffect(() => {
    getMyPostData();
  }, []);
  
  
  return (
    <>
      <h1>Axios Tutorial</h1>
      {isError !== "" && <h2>{isError}</h2>}

      <div className="grid">
        {myData.map((post) => {
          const { body, id, title } = post;
          return (
            <div key={id} className="card">
              <h2>{title.slice(0, 15).toUpperCase()}</h2>
              {/* .slice ka matlab hai kay jo bhi data aaraha hai usko 15 alphabets tak restrict kardein matlab data sir 15 letters ka show hoga */}
              <p>{body.slice(0, 100)}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};
export default App;
