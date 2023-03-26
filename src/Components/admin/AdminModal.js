import React, { useContext, useState } from "react";
import "../Styles/Popup.css";
import "../Styles/Style.css";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthContext";
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import { default as CloseIcon } from "@mui/icons-material/Close";

const AdminModal = ({ open, setOpen }) => {
  const { login } = useContext(AuthContext);
  const [submitting, setSubmitting] = useState(false);

  const validateSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is a required field"),
    password: Yup.string()
      .min(5)
      .max(20)
      .required("Password must be at least 5 characters"),
    confirmPassword: Yup.string().oneOf([Yup.ref("password"), null]),
  });

  const handleSubmit = (e) => {
    const toastError = toast.error(
      `There was an issue while logging in:  ${formik.errors.email} ${formik.errors.password}`
    );
    e.preventDefault();
    login({
      email: formik.values.email,
      password: formik.values.password,
      validationSchema: { validateSchema },
      // need to check backend for the login part, possibly the migration from heroku
    });
    if (formik.errors.email || formik.errors.password) {
      toastError();
      return;
    }
    navigate("/");
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validateSchema,
  });

  let navigate = useNavigate();

  return (
    <div className="login--modal">
      <div className="modal-content">
        <CloseIcon onClick={() => setOpen(false)} className="closeicon" />
        <form className="admin-login" onSubmit={handleSubmit} noValidate>
          <span>Login</span>
          <input
            className="form-control inp_text"
            type="email"
            name="email"
            onChange={formik.handleChange}
            value={formik.values.email}
            placeholder="Email"
            id="email"
          />
          {formik.errors.email ? (
            <p className="error">{formik.errors.email}</p>
          ) : null}
          <input
            className="form-control"
            type="password"
            onChange={formik.handleChange}
            value={formik.values.password}
            name="password"
            placeholder="Enter password"
          />
          {formik.errors.password ? (
            <p className="error">{formik.errors.password}</p>
          ) : null}
          <button
            type="submit"
            className="button"
            onClick={() => setSubmitting(true)}
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminModal;
