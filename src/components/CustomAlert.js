import React, { useEffect } from "react";
import "./CustomAlert.css";

const CustomAlert = ({ message, type, onClose, duration = 3000 }) => {
  useEffect(() => {
    // Automatically close the alert after the specified duration
    const timer = setTimeout(() => {
      onClose();
    }, duration);

    // Cleanup the timer when the component unmounts
    return () => clearTimeout(timer);
  }, [onClose, duration]);

  return (
    <div className={`custom-alert ${type}`}>
      <p>{message}</p>
    </div>
  );
};

export default CustomAlert;
