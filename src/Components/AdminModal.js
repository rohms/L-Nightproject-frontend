import React from 'react'
import "./Styles/Popup.css"
import HomePage from "./Homepage";
import { useHistory } from "react-router";
import { AuthContext } from "../Context/AuthContext";


const AdminModal = ({ open, children, onClose}) => {
    if (!open) return null

    return (

            <div className="popup">
                        <div className="astrocontainer">
                        <i class="fas fa-user-astronaut"></i>
                        </div>
                        <div className="close" onClick={onClose}><i class="far fa-times-circle" ></i></div>
                        

                    <input type="text" name="username" minLength="3" maxLength="20" placeholder="Username" />
                    <input type="email" name="email" minLength="5" maxLength="20" placeholder="Email" />
                    <input type="password" name="password" minLength="6" maxLength="30" placeholder="Password" />
                    <a href="/" className="button">Login</a>
                    {children}
                
            </div>
    )
};






export default AdminModal;
