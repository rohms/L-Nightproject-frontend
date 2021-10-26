import React, { useState } from 'react';
import "./Styles/Popup.css";
import AdminModal from './AdminModal';

const AdminPage = () => {
    const [isOpen, setIsOpen] = useState(true)
    return (
        
    <div className="wholesigninpage">
            <div className="popupcontainer">
                <h1>Admin</h1>
                {/* <button className="button" onClick={() => setIsOpen(true)} >Login</button> */}
                <AdminModal  onClose={() => setIsOpen(false)}>
                
                </AdminModal>
            </div>
            
    </div>
        
    )
}

export default AdminPage;
