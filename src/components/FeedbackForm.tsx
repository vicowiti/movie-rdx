import React, { useState } from "react";
import { toast } from "react-toastify";

type Props = {};

const FeedbackForm = (props: Props) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent): Promise<any> => {
    e.preventDefault();
    const url = "https://formspree.io/f/xayzbzwe";

    const data = {
      firstName,
      lastName,
      email,
      message,
    };

    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const result = await response.json();

    if (result?.ok === true) {
      toast.success("Feedback Received. Thank you.");
      setFirstName("");
      setLastName("");
      setEmail("");
      setMessage("");
    } else {
      toast.error("An error occurred!");
    }
  };

  return (
    <form className="w-[90vw] lg:w-[30vw]" onSubmit={handleSubmit}>
      <header>
        <h3 className="text-center font-bold text-lg">
          We'd love to hear from you!
        </h3>

        <div className="my-3">
          <input
            type="text"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="w-full rounded-md p-3 bg-[#303134]"
            required
          />
        </div>

        <div className="my-3">
          <input
            type="text"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className="w-full rounded-md p-3 bg-[#303134]"
            required
          />
        </div>

        <div className="my-3">
          <input
            type="email"
            placeholder="Email"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded-md p-3 bg-[#303134]"
          />
        </div>

        <div className="my-3">
          <textarea
            required
            placeholder="Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full rounded-md p-3 bg-[#303134]"
          ></textarea>
        </div>

        <button
          type="submit"
          className="p-2 w-full bg-[#00ced1] rounded-sm font-bold"
        >
          Submit
        </button>
      </header>
    </form>
  );
};

export default FeedbackForm;
