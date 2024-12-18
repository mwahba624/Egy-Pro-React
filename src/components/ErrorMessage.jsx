// src/components/ErrorMessage.js
import React from "react";
import styles from "../ErrorMessage.module.css"; // CSS module for styling

const ErrorMessage = ({ message, onClose }) => {
  return (
    <div className={styles.errorContainer}>
      <p>{message}</p>
      <button onClick={onClose} className={styles.closeButton}>
        X
      </button>
    </div>
  );
};

export default ErrorMessage;
