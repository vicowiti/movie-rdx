import React from "react";
import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import Details from "./pages/Details";
import Favorites from "./pages/Favorites";
import Feedback from "./pages/Feedback";
import Home from "./pages/Home";
import MyRating from "./pages/MyRating";
import { useSearchByTitleQuery } from "./features/movieSlice";

const App = () => {
  const { data } = useSearchByTitleQuery("avatar");
  console.log("data", data);

  // className="bg-gradient-to-r from-indigo-900 to-green-400"
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/details" element={<Details />} />
          <Route path="/myrated" element={<MyRating />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
