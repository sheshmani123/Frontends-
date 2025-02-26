import React, { useState, useContext } from 'react';
import './LoginPopup.css';
import { assets } from '../../assets/assets';
import { StoreContext } from '../../context/StoreContext';
import axios from "axios";

const LoginPopup = ({ setShowLogin }) => {
    const { setToken } = useContext(StoreContext);
    const [currState, setCurrState] = useState("Sign Up");
    const [data, setData] = useState({
        name: "",
        email: "",
        password: ""
    });

    const onChangeHandler = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setData(data => ({ ...data, [name]: value }));
    }

    const onLogin = async (event) => {
        event.preventDefault();
        // Using your deployed API URL
        const baseUrl = 'https://bookweb-aiuw.onrender.com/api/user';
        let newUrl;

        if (currState === "Login") {
            newUrl = `${baseUrl}/login`;
        } else {
            newUrl = `${baseUrl}/register`;
        }

        try {
            const response = await axios.post(newUrl, data);
            console.log("API response:", response.data);  // Debugging log

            if (response.data.success) {
                setToken(response.data.token);
                localStorage.setItem("token", response.data.token);
                setShowLogin(false);
            } else {
                alert(response.data.message);
            }
        } catch (error) {
            console.error("Error during API call:", error);  // Debugging log
            alert("An error occurred. Please try again.");
        }
    }

    return (
        <div className='login-popup'>
            <form onSubmit={onLogin} className="login-popup-container">
                <div className="login-popup-title">
                    <h2>{currState}</h2>
                    <img onClick={() => setShowLogin(false)} src={assets.cross_icon} alt="" />
                </div>
                <div className="login-popup-inputs">
                    {currState === "Login" ? null : (
                        <input name='name' onChange={onChangeHandler} value={data.name} type="text" placeholder='Your name' required />
                    )}
                    <input name='email' onChange={onChangeHandler} value={data.email} type="email" placeholder='Your email' required />
                    <input name='password' onChange={onChangeHandler} value={data.password} type="password" placeholder='Password' required />
                </div>
                <button type='submit' style={{ color: "black" }}>{currState === "Sign Up" ? "Create Account" : "Login"}</button>
                <div className="login-popup-condition">
                    <input type="checkbox" required />
                    <p>By continuing, I agree to the terms of use and policy.</p>
                </div>
                {currState === "Login" ? (
                    <p>Create a new account? <span style={{ color: 'black', fontWeight: 'bold' }} onClick={() => setCurrState("Sign Up")}>Click here</span></p>
                ) : (
                    <p>Already have an account? <span style={{ color: 'black', fontWeight: 'bold' }} onClick={() => setCurrState("Login")}>Login..</span></p>
                )}
            </form>
        </div>
    );
}

export default LoginPopup;
