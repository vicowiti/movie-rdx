import React from "react";
import { BsCameraReelsFill } from "react-icons/bs";
type Props = {};

const NavBar = (props: Props) => {
  return (
    <div className="shadow-md w-full  top-0 left-0 mb-2">
      <div className="md:flex bg-white py:4">
        <div>
          <span>
            <BsCameraReelsFill />
          </span>
          V-Reel
        </div>
      </div>
    </div>
  );
};

export default NavBar;
