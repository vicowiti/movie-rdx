import React from "react";

type Props = {};

const Spinner = (props: Props) => {
  return (
    <div className="flex justify-center">
      <div className="spinner rounded-full border-4 border-gray-300 border-t-4 border-t-blue-600 h-12 w-12"></div>
    </div>
  );
};

export default Spinner;
