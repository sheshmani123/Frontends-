import React, { useContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './BookItem.css';
import { assets } from '../../assets/assets';
import { StoreContext } from '../../context/StoreContext';
import { Link, useNavigate } from 'react-router-dom';
import { UnfilledHeartIcon, FilledHeartSvg, LoaderSvg } from '../Helpers/Svg';

const BookItem = ({ id, name, price, description, image }) => {
    const { cartItem, addToCart, removeCart } = useContext(StoreContext);
    const { addToWishlist, removeFromWishlist } = useContext(StoreContext);
    const [isClicked, setIsClicked] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const storedWishlist = localStorage.getItem('wishlist');
        if (storedWishlist) {
            const parsedWishlist = JSON.parse(storedWishlist);
            if (parsedWishlist.includes(id)) {
                setIsClicked(true);
            }
        }
    }, [id]);

    const handleClick = () => {
        setIsClicked(!isClicked);
        if (!isClicked) {
            addToWishlist(id);
        } else {
            removeFromWishlist(id);
        }
    };

    const handleBuyClick = () => {
        setIsLoading(true);
        addToCart(id);
        setTimeout(() => {
            setIsLoading(false);
            navigate('/cart');
        }, 500);
    };

    useEffect(() => {
        window.scrollTo(0, 0); 
    }, []); 

    return (
        <div>
            {isLoading && <LoaderSvg className='loader' />} 
            <div className='food-item'>
                <div className="food-item-img-container">
                    <Link to={`/book/${id}`}>
                        <img src={`https://bookweb-aiuw.onrender.com/images/${image}`} alt="" className="food-item-image" />
                    </Link>
                    <div className="heart-container" onClick={handleClick}>
                        {isClicked ? <FilledHeartSvg /> : <UnfilledHeartIcon/>}
                    </div>
                    {!cartItem[id] ? (
                        <img className='add' onClick={() => addToCart(id)} src={assets.add_icon_white} alt="" />
                    ) : (
                        <div className="food-item-counter">
                            <img onClick={() => removeCart(id)} src={assets.remove_icon_red} alt="" style={{ width: '31px', height: '30px', cursor: 'pointer'}} />
                            <p>{cartItem[id]}</p>
                            <img onClick={() => addToCart(id)} src={assets.add_icon_green} alt="" style={{ width: '31px', height: '30px', cursor: 'pointer' }} />
                        </div>
                    )}
                </div>
                <div className="food-item-info">
                    <div className="food-item-name-rating">
                        <p>{name}</p>
                        <img src={assets.rating_starts} alt="" />
                    </div>
                    <p className="food-item-desc">{description}</p>
                    <p className="food-item-price">Price:${price}</p>
                    <button onClick={handleBuyClick}>Buy</button>
                </div>
            </div>
        </div>
    );
};

BookItem.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
};

export default BookItem;
