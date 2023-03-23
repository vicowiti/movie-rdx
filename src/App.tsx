import React from "react";
import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import Details from "./pages/Details";
import Favorites from "./pages/Favorites";
import Feedback from "./pages/Feedback";
import Home from "./pages/Home";
import MyRating from "./pages/MyRating";
import NavBar from "./components/NavBar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <div>
      <ToastContainer />
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/details/:id" element={<Details />} />
          <Route path="/myrated" element={<MyRating />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
