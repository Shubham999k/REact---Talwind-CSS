import { useState } from "react";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Name :", name);
    console.log("Email :", email);
    console.log("Password :", password);
  };

  return (
    <>
      <div className="d-flex justify-content-center">
        <div className="border p-3 w-50 mt-5 bg-light shadow rounded">
          <h1 className="text-center">Create Account</h1>

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

            <label>Password</label>
            <input
              type="password"
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <br />

            <div className="float-end">
              <button type="submit" className="btn btn-success">
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Register;