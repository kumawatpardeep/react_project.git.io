import Layout from '../Conponent/Layout';
import React, { useState } from 'react';
import axios from 'axios';
import '../Styles/Table.css'

const FetchData = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

//   const fetchData = () => {
    const postData = {
      // Your data to be sent in the request body
      // For example, you might have key-value pairs like 'username', 'password', etc.
    };

    // Make the POST request to the API endpoint
    axios.post('http://127.0.0.1:9000/api/event_api', postData) // Replace with your API endpoint and data
      .then(response => {
        // Handle the successful response
        setData(response.data.data);
        setError(null);
        setTimeout(() => {
          setLoading(false); // Set loading to false when the operation is complete
        }, 2000); // Clear any previous errors
      })
      .catch(error => {
        // Handle errors from the API request
        setError('Error fetching data: ' + error.message);
        setData([]);
        setTimeout(() => {
          setLoading(false); // Set loading to false when the operation is complete
        }, 2000); // Clear the data in case of an error
      });
//   };

  return (
    <Layout>
    <div>
    <div>
      {/* <button onClick={fetchData}>Fetch Data</button> */}
      {error && <p>{error}</p>}
      {/* <ul>
        {data.map(item => (
          <li key={item.id}>{item.id}{item.title}{item.description}</li>
        ))}
      </ul> */}
      <table class="table table-bordered table-hover table-class border border-dark">
    <thead>
      <tr>
        <th >SrNo</th>
        <th>Title</th>
        <th>Description</th>
        <th>Action</th>

      </tr>
    </thead>
    <tbody>
    {loading ? (
        <div className="loader"></div>
      ) : (
        <>
        {/* <p>Data is loaded!</p> */}
        {data.map(item=>(
        <tr>
        <td>{item.id}</td>
        <td>{item.title}</td>
        <td>{item.description}</td>
        <td>button</td>

      </tr>
    ))}
          </>
      )}
    
      
     
    </tbody>
  </table>
    </div>
    </div>
    </Layout>
  );
};

export default FetchData;



