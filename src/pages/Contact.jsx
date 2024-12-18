import React, { useState } from "react";
import FormInput from "../components/FormInput";
import ErrorMessage from "../components/ErrorMessage";
import styles from "../Contact.module.css"; // Main CSS module for the Contact component

const Contact = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    message: "",
  });

  const [error, setError] = useState(null); // Initially null

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // check if any field is empty
    if (!formData.username || !formData.email || !formData.message) {
      setError(new Error("All fields are required.")); // Set error as Error object
      return;
    }

    console.log("Form submitted:", formData);
    setError(null); // Clear error on success
  };

  return (
    <div className={styles.contactContainer}>
      {error && (
        <ErrorMessage
          message={error.message}
          onClose={() => setError(null)}
        />
      )}
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
    </div>
  );
};

export default Contact;
