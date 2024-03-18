import { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const userRef = useRef();
  const errRef = useRef();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setError("");
  }, [username, password]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8000/login", {
        username,
        password,
      });
      console.log(response);
      if (response) {
        console.log(response);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <h3>Login In</h3>
      {success ? (
        <h3>You're Successfully Logged In!</h3>
      ) : (
        <form onSubmit={handleSubmit}>
          <label htmlFor="username">UserName</label>
          <input
            type="text"
            id="username"
            ref={userRef}
            onChange={(e) => setUsername(e.target.value)}
          />

          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
          />

          <button>Login</button>
        </form>
      )}
    </div>
  );
};

export default Login;
