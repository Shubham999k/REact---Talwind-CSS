import { useState } from "react";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Name :", name);
    console.log("Email :", email);
    console.log("Message :", message);
  };

  return (
    <>
      <div className="d-flex justify-content-center">
        <div className="border p-3 w-50 mt-5 bg-light shadow rounded">
          <h1 className="text-center">Contact Us</h1>

          <form onSubmit={handleSubmit}>
            <label>Name</label>
            <input
              type="text"
              className="form-control"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <br />

            <label>Email</label>
            <input
              type="email"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <br />

            <label>Message</label>
            <textarea
              className="form-control"
              rows="4"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>

            <br />

            <div className="float-end">
              <button type="submit" className="btn btn-primary">
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Contact;