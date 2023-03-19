import React from 'react';
import PropTypes from 'prop-types';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const Toast = ({ msg }) => {
  const notify = () => toast("Wow")
  return (
    <ToastContainer
    position="top-center"
    autoClose={5000}
    hideProgressBar={true}
    newestOnTop={false}
    closeOnClick={true}
    rtl={false}
    pauseOnFocusLoss
    draggable={true}
    pauseOnHover={true}
    theme="colored" />
  )
}

// Toast.propTypes = {
//   msg: PropTypes.string.isRequired
// };

export default Toast;