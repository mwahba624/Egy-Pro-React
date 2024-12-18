// src/components/FormInput.js
import React, { useState } from "react"; // Import useState
import styles from "../FormInput.module.css"; // Assuming you use CSS modules


const Form = () => {
  // Define state for form data
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    message: "",
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add additional form submission logic here
  };

  // Return the form JSX
  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <FormInput
        label="Username"
        name="username"
        type="text"
        value={formData.username}
        onChange={handleChange}
      />
       <h2 className={styles.title}>Feedback is always appreciated</h2>
      <form onSubmit={handleSubmit} className={styles.form}>
        <FormInput
          label="Email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
        />
      </form>
       <div className={styles.inputGroup}>
          <label htmlFor="message" className={styles.label}>
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className={styles.input}
            rows="4"
            required
          />
        </div>
        <button type="submit" className={styles.submitButton}>
          Submit
        </button>
    </form>
  );
};

const FormInput = ({ label, name, type, value, onChange }) => {
  return (
    <div className={styles.inputGroup}>
      <label htmlFor={name} className={styles.label}>
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        className={styles.input}
        required
      />
    </div>
  );
};

export default Form;
