import React, { useState } from "react";

const Contact = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const { name, email, phone, website, message } = data;

  const changeHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();

    setData("");

    if (!name) {
      alert("Please Enter username");
    }
    if (!email) {
      alert("Please Enter email");
    }
    if (phone <= 4) {
      alert("Password must be minimum 4 numbers");
    }
    if (!website) {
      alert("Password must be minimum 4 numbers");
    }
    if (!message) {
      alert("message must be 300 charecters");
    }
  };
  return (
    <div className="contact" id="contact">
      <h1>Get In Touch</h1>
      <div className="form-group">
        <div className="form-row1">
          <div>
            <label>Name</label>
            <br />
            <input
              type="text"
              name="name"
              value={name}
              className="name"
              onChange={changeHandler}
            />
          </div>
          <div>
            <label>Email</label>
            <br />
            <input
              type="email"
              name="email"
              value={email}
              className="email"
              onChange={changeHandler}
            />
          </div>
          <div>
            <label>Phone</label>
            <br />
            <input
              type="phone"
              name="phone"
              value={phone}
              className="phone"
              onChange={changeHandler}
            />
          </div>
        </div>
        <div>
          <label>Website</label>
          <br />
          <input
            type="text"
            name="website"
            value={website}
            className="website"
            onChange={changeHandler}
          />
        </div>
        <div>
          <label>Message</label>
          <br />
          <textarea
            type="text"
            name="message"
            value={message}
            className="message"
            onChange={changeHandler}
          />
        </div>
        <button type="button" className="form-button" onClick={submitHandler}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default Contact;
