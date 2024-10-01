import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import "./BookDisplay.css";
import { StoreContext } from '../../context/StoreContext';
import FoodItem from '../BookItem/BookItem';

function BookDisplay({ category }) {
  const { book_list } = useContext(StoreContext);
 // Debug log

  return (
    <div>
      <div className='food-display' id='food-display'>
        <h2>Top Books</h2>
        <div className="food-display-list">
          {book_list.map((item, index) => {
            if (category === 'All' || category.toLowerCase() === item.category.toLowerCase()) {
              return (
                <FoodItem
                  key={index}
                  id={item._id}
                  name={item.name}
                  description={item.description}
                  price={item.price}
                  image={item.image}
                />
              );
            }
            return null;
          })}
        </div>
      </div>
    </div>
  );
}

// Define prop types
BookDisplay.propTypes = {
  category: PropTypes.string.isRequired,
};

export default BookDisplay;
