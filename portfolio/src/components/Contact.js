import React from "react";

export default function Contact() {
  return (
    <section>
      <div className="content_title">
        Contact
      </div>
      <div className="content_info">
        <div>
          <div className="input_titles">
            Name
          </div>
          <input placeholder="Enter Name..."></input>
        </div>
        <div>
        <div className="input_titles">
            Email
          </div>
          <input placeholder="Enter Email..."></input>
        </div>
        <div>
        <div className="input_titles">
            Message
          </div>
          <textarea rows="20" cols="50" placeholder="Enter Message..."></textarea>
        </div>
        <div>
          <button>Submit</button>
        </div>
      </div>
    </section>
  );
};