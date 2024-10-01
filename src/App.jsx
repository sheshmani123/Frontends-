import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/Cart";
import PlaceOrder from "./pages/PlaceOrder/PlaceOrder";
import Footer from "./components/Footer/Footer";
import LoginPopup from "./components/LoginPopup/LoginPopup";
import Verify from "./pages/Verify/Verify";
import MyOrders from "./pages/MyOrders/MyOrders";
import DetailPage from "./pages/Book_detail_page/DetailPage";
import Wish from "./pages/Wishlist/Wish";
import Privacy from "./pages/Policy/Privacy";
import About from "./pages/AboutUs/About";
import RefundPolicy from "./pages/RefundPolicy/RefundPolicy";

const App = () => {
  const [showLogin, setShowLogin] = useState(false);
  return (
    <>
      {showLogin ? <LoginPopup setShowLogin={setShowLogin} /> : <></>}
      <div className="app">
        <Navbar setShowLogin={setShowLogin} />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<PlaceOrder />} />
          <Route path="/verify" element={<Verify />} />
          <Route path="/myorders" element={<MyOrders />} />
          <Route path="/wish" element={<Wish />} />
          <Route path="/book/:id" element={<DetailPage />} />
          <Route path="/privacy-policy" element={<Privacy />} />
          <Route path="/refund-policy" element={<RefundPolicy />} />
          <Route path="/aboutUs" element={<About />} />
        </Routes>
      </div>

      <Footer />
    </>
  );
};

export default App;
