import React, { useCallback, useEffect, useState } from "react";
import "../Styles/Popup.css";
import AdminModal from "./AdminModal";
import "../Styles/Style.css";
import Modal from "@mui/joy/Modal";

const AdminPage = () => {
  const [open, setOpen] = useState(false);

  const keyPress = useCallback(
    (e) => {
      if (e.key === "Escape" && open) {
        setOpen(false);
      }
    },
    [open, setOpen]
  );

  useEffect(() => {
    document.addEventListener("keydown", keyPress);
    return () => document.removeEventListener("keydown", keyPress);
  }, [keyPress]);

  return (
    <div className="wholesigninpage">
      <div className="popupcontainer">
        <button className="button" onClick={() => setOpen(true)}>
          Go to Login
        </button>
        <Modal open={open} onClose={() => setOpen(false)}>
          <AdminModal setOpen={setOpen} />
        </Modal>
      </div>
    </div>
  );
};

export default AdminPage;
