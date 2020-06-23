import React, { useEffect, useState } from "react";
import axios from "axios";
import BookedCustomers from '../components/BookedInfo/BookedCustomers'
import Loading from '../components/UI/Loading'

function Customers() {
  const [fetchorders, setFetchOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    let orders = []
    console.log('1111')
    axios
      .get("https://meeting-hall-backend.herokuapp.com/customers")
      .then((response) => {
        orders = response.data.map((order,index) => {
          console.log(order)
          return <BookedCustomers key={index} order={order} />
        })
        setLoading(false)
        setFetchOrders(orders)
        console.log(orders)
        console.log(response.data)
      })
      .catch((error) => {
        setLoading(false)
        console.log(error);
      });
  }, []);

  return (
    <div>
      <h1>
        {loading ? <Loading /> : fetchorders}
        </h1>
    </div>
  );
}

export default Customers;
