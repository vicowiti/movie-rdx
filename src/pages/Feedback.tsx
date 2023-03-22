import React from "react";
import FeedbackForm from "../components/FeedbackForm";

type Props = {};

const Feedback = (props: Props) => {
  return (
    <div className="flex justify-center mt-[10%] w-[100vw]">
      <FeedbackForm />
    </div>
  );
};

export default Feedback;
