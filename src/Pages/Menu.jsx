// import React from 'react'
import Layout from "../Conponent/Layout";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
// import { MenuList } from '../Data/Data';
import "../Styles/MenuStyle.css";
import React, { useState } from "react";
import axios from "axios";

const Zomato="https://www.zomato.com/jaipur";

const Menu = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isPurchased, setIsPurchased] = useState(false);

  //   const fetchData = () => {
  const postData = {
    // Your data to be sent in the request body
    // For example, you might have key-value pairs like 'username', 'password', etc.
  };

  // Make the POST request to the API endpoint
  axios
    .post("http://127.0.0.1:9000/api/courses_api", postData) // Replace with your API endpoint and data
    .then((response) => {
      // Handle the successful response
      setData(response.data.data);
      setError(null);
      setTimeout(() => {
        setLoading(false); // Set loading to false when the operation is complete
      }, 1000); // Clear any previous errors
    })
    .catch((error) => {
      // Handle errors from the API request
      setError("Error fetching data: " + error.message);
      setData([]);
      setTimeout(() => {
        setLoading(false); // Set loading to false when the operation is complete
      }, 1000); // Clear the data in case of an error
    });
  const handleBuyNowClick = () => {
    // Here you would typically perform the necessary actions for the purchase process.
    // This example sets the state to simulate a successful purchase.
    setIsPurchased(true);
  };
  return (
    <Layout>
      <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
        {loading ? (
          <div className="loader"></div>
        ) : (
          <>
            {data.map((item) => (
              <Card sx={{ maxWidth: "398px", display: "flex", m: 2 }}>
                <CardActionArea>
                  <CardMedia
                    sx={{ minHeight: "400px" }}
                    component={"img"}
                    src={item.image}
                    alt={item.title}
                  />
                  <CardContent>
                    <Typography variant="h5" gutterBottom component={"div"}>
                      {item.title}
                    </Typography>
                    <Typography variant="h5">{item.description}</Typography>
                  </CardContent>
                  {isPurchased ? (
                    <p>Thank you for your purchase!</p>
                  ) : (
                    <a href={Zomato}><button onClick={handleBuyNowClick} className="menuButton">
                      Buy Now
                    </button></a>
                  )}
                  {/* <button className="menuButton">Buy Now</button>z */}
                </CardActionArea>
              </Card>
            ))}
          </>
        )}
      </Box>
    </Layout>
  );
};
export default Menu;
