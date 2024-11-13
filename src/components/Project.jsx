import React from 'react';
export default function Project({ title, description, link }) {
  return (
    <div style={{
      border: '2px solid #ddd',
      borderRadius: '8px',
      padding: '20px',
      boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
    }}>
      <h2 style={{ fontSize: '1.5em', color: '#333' }}>{title}</h2>
      <p style={{ color: '#666', margin: '10px 0' }}>{description}</p>
      <a href={link} style={{ color: '#0073e6', textDecoration: 'none', fontWeight: 'bold' }} className="project-link">
        View Project
      </a>
    </div>
  );
}

const styles = {
  projectCard: {
    backgroundColor: '#fff',
    borderRadius: '8px',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
    padding: '20px',
    textAlign: 'center',
    transition: 'transform 0.3s ease',
  },
  projectTitle: {
    fontSize: '1.5em',
    fontWeight: 'bold',
    marginBottom: '10px',
    color: '#333',
  },
  projectDescription: {
    fontSize: '1rem',
    color: '#555',
    marginBottom: '20px',
  },
  viewProjectLink: {
    fontSize: '1.1rem',
    color: '#0072b1',
    textDecoration: 'none',
    padding: '10px 20px',
    backgroundColor: 'transparent',
    border: '2px solid #0072b1',
    borderRadius: '5px',
    fontWeight: 'bold',
    transition: 'all 0.3s ease',
  },
};

// Hover Effect (add this inside the viewProjectLink)
const hoverEffect = {
  ':hover': {
    backgroundColor: '#0072b1',
    color: '#fff',
    transform: 'scale(1.05)', // Slightly enlarge the card on hover
  },
};