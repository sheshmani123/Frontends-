import React, { useState, useEffect } from 'react';
import "./Home.css";
import Header from '../../components/Header/Header';
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu';
import { LoaderSvg } from '../../components/Helpers/Svg';
import BookDisplay from '../../components/BookDisplay/BookDisplay';

// Import the LoaderSvg component

const Home = () => {
    const [category, setCategory] = useState("All");
    const [isLoading, setIsLoading] = useState(true); // Add isLoading state

    useEffect(() => {
        // Simulate loading by setting isLoading to false after 4 seconds (4000 milliseconds)
        const timeout = setTimeout(() => {
            setIsLoading(false);
        }, 3000);

        // Cleanup function to clear the timeout
        return () => clearTimeout(timeout);
    }, []);

    return (
        <div>
            {/* Conditional rendering: Show LoaderSvg if isLoading is true */}
            {isLoading ? (
                <LoaderSvg/>
            ) : (
                // Once loading is finished, display the content of the home page
                <div>
                    <Header />
                    <ExploreMenu category={category} setCategory={setCategory} />
                    <BookDisplay category={category} />
                    {/* Add other components or content here */}
                </div>
            )}
        </div>
    );
}

export default Home;
