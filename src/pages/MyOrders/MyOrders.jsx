import React, { useContext, useState, useEffect } from "react";
import axios from "axios";
import "./MyOrders.css";
import { StoreContext } from "../../context/StoreContext";
import { assets } from "../../assets/assets";

const MyOrders = () => {
  const { token } = useContext(StoreContext);
  const [data, setData] = useState([]);

  const fetchOrders = async () => {
    try {
      const response = await axios.post(
        `https://bookweb-aiuw.onrender.com/api/order/userorders`, // Updated API URL
        {},
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setData(response.data.data);
      console.log("Fetched orders data:", response.data.data);
    } catch (error) {
      console.error("Error fetching orders:", error.response ? error.response.data : error.message);
    }
  };

  useEffect(() => {
    if (token) {
      fetchOrders();
    }
  }, [token]);

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top when the component is loaded
  }, [data]); // Trigger the scroll effect whenever data changes

  return (
    <div className="my-orders">
      <h1>My Orders</h1>
      <div className="container">
        {data.map((order, index) => (
          <div key={index} className="my-orders-order">
            <img src={assets.parcel_icon} alt="Parcel Icon" />
            <p>
              {order.items.map((item, idx) => (
                <span key={idx}>
                  {item.name} x {item.quantity}
                  {idx < order.items.length - 1 ? ", " : ""}
                </span>
              ))}
            </p>
            <p>${order.amount}.00</p>
            <p>Items: {order.items.length}</p>
            <p>
              <span>&#x25cf;</span>
              <b>{order.status}</b>
            </p>
            <button>Track Order</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyOrders;
