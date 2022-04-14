import React, { useState, useContext } from "react";
import "./Styles/Popup.css";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";
import "./Styles/Style.css";

const AdminModal = (props) => {
  const { login } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  let navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    login({
      email: email,
      password: password,
    });
    navigate("/");
  };
  return (
    <div className="popup">
      <div className="astrocontainer">
        <i class="fas fa-user-astronaut"></i>
      </div>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          name="email"
          value={email}
          minLength="5"
          maxLength="20"
          placeholder="Email"
        />
        <input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          name="password"
          minLength="6"
          maxLength="30"
          placeholder="Password"
        />
        <button type="submit" className="button">
          Login
        </button>
      </form>
    </div>
  );
};

export default AdminModal;
