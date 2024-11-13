import React from 'react';
import { FiArrowRightCircle } from 'react-icons/fi';

export default function Home() {
  return (
    <div style={styles.container}>
      <div style={styles.content}>
        <h1 style={styles.title}>Welcome to My Profile</h1>
        <p style={styles.description}>
          Hello! I’m Michael Wahba, a passionate developer skilled in creating dynamic web experiences.
          <span style={styles.highlightText}> Explore some of my work below.</span>
        </p>
        
        <div style={styles.buttonContainer}>
          <a href="/portfolio" style={styles.viewWorkButton}>
            Projects <FiArrowRightCircle style={styles.icon} />
          </a>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#f5f5f5',
  },
  content: {
    textAlign: 'center',
    maxWidth: '600px',
    padding: '40px',
    borderRadius: '8px',
    boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: '2.5em',
    fontWeight: '700',
    color: '#333',
    marginBottom: '20px',
  },
  description: {
    fontSize: '1.1em',
    color: '#666',
    lineHeight: '1.6',
    marginBottom: '30px',
  },
  highlightText: {
    fontWeight: 'bold',
    color: '#0073e6',
    backgroundColor: '#eaf4ff', // Light blue background for highlighting
    padding: '0 5px',
    borderRadius: '4px',
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'center',
    gap: '15px',
    flexWrap: 'wrap',
  },
  viewWorkButton: {
    display: 'flex',
    alignItems: 'center',
    fontSize: '1em',
    color: '#fff',
    backgroundColor: '#0073e6',
    padding: '10px 20px',
    borderRadius: '5px',
    textDecoration: 'none',
    fontWeight: 'bold',
    transition: 'background-color 0.3s ease',
  },
  icon: {
    marginLeft: '8px',
  },
};

// Add hover effect for viewWorkButton
styles.viewWorkButton[':hover'] = {
  backgroundColor: '#005bb5',
};
