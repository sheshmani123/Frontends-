import React, { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { LoaderSvg } from "../../components/Helpers/Svg"; // Adjust the import path as needed
import "./Verify.css";
import axios from "axios";

const Verify = () => {
  const [searchParams] = useSearchParams();
  const orderId = searchParams.get("orderId");
  const success = searchParams.get("success");

  const [isLoading, setIsLoading] = useState(true);

  const navigate = useNavigate();

  const VerifyPayment = async () => {
    console.log("Sending request to verify payment...");
    try {
      const serverUrl = "https://bookweb-aiuw.onrender.com";
      const response = await axios.post(
        `${serverUrl}/api/order/verify`,
        { success, orderId }
      );
      console.log("Response from server:", response);

      // Add a delay to keep the loader visible for approximately 10 seconds
      setTimeout(() => {
        if (response.data.success) {
          navigate("/myorders");
        } else {
          navigate("/");
        }
      }, 3000); // 10 seconds delay
    } catch (error) {
      console.error("Error verifying payment:", error);
      // Handle error, e.g., show error message to the user
      setTimeout(() => {
        navigate("/");
      }, 3000); // 10 seconds delay in case of error
    }
  };

  useEffect(() => {
    VerifyPayment();
  }, []);

  return (
    <div className={`loader-container ${!isLoading ? 'hidden' : ''}`}>
      <LoaderSvg width="100px" height="100px" />
    </div>
  );
};

export default Verify;
