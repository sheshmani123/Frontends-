import React, { useContext, useEffect } from "react";
import "./Wish.css";
import { StoreContext } from "../../context/StoreContext";
import { AnimatedHeartSvg } from "../../components/Helpers/Svg";
import { Link } from "react-router-dom"; // Import Link for navigation

const Wish = () => {
  const { wishlist, book_list } = useContext(StoreContext);
  console.log("this is the lelnegth of the wishi;list ",wishlist.length);

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top when the component is loaded
  }, []); // Empty dependency array ensures it runs only once on component mount


  return (
    <div className="heading">
      <h1>Your Wishlist</h1>

      {wishlist.length === 0 ? (
        <div className="empty-wishlist">
          <AnimatedHeartSvg />
          <p>Your wishlist is empty</p>
          <Link to="/" className="go-home-button">Go to Home</Link>
        </div>
      ) : (
        <div className="wishlist-items">
          {wishlist.map((itemId) => {
            const item = book_list.find((bookItem) => bookItem._id === itemId); // Find the corresponding item in book_list
            if (item) {
              return (
                <div key={item._id} className="wishlist-item">
                  <img
                    src={`https://bookweb-aiuw.onrender.com/images/${item.image}`} // Direct API URL
                    alt={item.name}
                    className="food-item-image"
                  />
                  <div>
                    <h3>{item.name}</h3>
                    <p>~{item.description}</p>
                    <div className="price-container">
                      <p className="price">Price: ${item.price}</p>
                    </div>
                  </div>
                </div>
              );
            }
            return null; // If item is not found, don't render anything
          })}
        </div>
      )}
    </div>
  );
};

export default Wish;
