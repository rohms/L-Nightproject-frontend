import React, { useContext, useState, forwardRef } from "react";
import "../Styles/Popup.css";
import "../Styles/Style.css";
import { AuthContext } from "../../Context/AuthContext";
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import { default as CloseIcon } from "@mui/icons-material/Close";

const validateSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is a required field"),
  password: Yup.string()
    .min(5)
    .max(20)
    .required("Password must be at least 5 characters"),
  confirmPassword: Yup.string().oneOf([Yup.ref("password"), null], "Passwords must match")
});

const AdminModal = forwardRef(({ setOpen }, ref) => {
  const { login } = useContext(AuthContext);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    login({
      email: formik.values.email,
      password: formik.values.password,
      validationSchema: { validateSchema },
    });
    if (formik.errors.email) {
      toast.error("Invalid email address");
      return;
    } else if (formik.errors.password) {
      toast.error("Password must be at least 5 characters");
      return;
    }
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validateSchema,
  });

  return (
    <div className="login--modal" tabIndex="0">
      <div className="modal-content">
        <CloseIcon onClick={() => setOpen(false)} className="closeicon" />
        <form
          className="admin-login"
          onSubmit={handleSubmit}
          noValidate
          ref={ref}
        >
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
            autoComplete="on"
            onChange={formik.handleChange}
            value={formik.values.password}
            name="password"
            placeholder="Enter password"
          />
          {formik.errors.password ? (
            <p className="error">{formik.errors.password}</p>
          ) : null}
          <button type="submit" className="button" disabled={submitting}>
            Login
          </button>
        </form>
      </div>
    </div>
  );
});

export default AdminModal;
