// import React from 'react'
import Layout from '../Conponent/Layout';
import { Link } from 'react-router-dom';
import Banner from "../Images/restu.jpg";
import "../Styles/HomeStyle.css";
import React, { useState } from 'react';
import axios from 'axios';

 const Home = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

//   const fetchData = () => {
    const postData = {
      // Your data to be sent in the request body
      // For example, you might have key-value pairs like 'username', 'password', etc.
    };
   
    // Make the POST request to the API endpoint
    axios.post('http://127.0.0.1:9000/api/cms_api', postData) // Replace with your API endpoint and data
      .then(response => {
        // Handle the successful response
        setData(response.data.data);
        setError(null);
        setTimeout(() => {
          setLoading(false); // Set loading to false when the operation is complete
        }, 1000); // Clear any previous errors
        
      })
      .catch(error => {
        // Handle errors from the API request
        setError('Error fetching data: ' + error.message);
        setData([]);
        setTimeout(() => {
          setLoading(false); // Set loading to false when the operation is complete
        }, 2000); // Clear the data in case of an error
      });
  return (
    <Layout>
    <div className='home' style={{backgroundImage:`url(${Banner})`}}>
<div className="headerContainer">
{loading ? (
        <div className="loader"></div>
      ) : (
        <>
        {/* <p>Data is loaded!</p> */}
        <p>
          {data.map(item => (
            <>
            <p key={item.id}>{item.title}</p>
            <p>{item.description}</p>
            </>
          ))}
          </p>
          </>
      )}
  <Link to={"/menu"}>
  <button>ORDER NOW</button>
  </Link>
</div>
    </div>
    </Layout>
  )
}
export default Home;


