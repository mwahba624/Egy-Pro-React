import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { DiReact, DiHtml5, DiCss3, DiJavascript1, DiNodejs, DiPostgresql, DiGit } from 'react-icons/di'; // Technology icons
import profilePic from '../assets/Wahba.png'; // Profile picture
export default function About() {
  return (
    <div style={styles.container}>
      <div style={styles.bioContainer}>
        {/* Profile Image */}
        <img
          src={profilePic} //
          alt="Profile"
          style={styles.profileImage}
        />

        {/* Bio Text */}
        <h1 style={styles.heading}>About Me</h1>
        <p style={styles.bioText}>
          Hi, I’m Michael Wahba! I’m a student software developer with a passion for building elegant and
          efficient web applications. I am continuously learning new technologies.
        </p>

        {/* Social Links */}
        <div style={styles.socialLinks}>
          <a
            href="https://github.com/mwahba624"
            target="_blank"
            rel="noopener noreferrer"
            style={styles.iconLink}
          >
            <FaGithub size={30} /> {/* GitHub Icon */}
          </a>
          <a
            href="https://www.linkedin.com/feed/"
            target="_blank"
            rel="noopener noreferrer"
            style={styles.iconLink}
          >
            <FaLinkedin size={30} /> {/* LinkedIn Icon */}
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            style={styles.iconLink}
          >
            <FaInstagram size={30} /> {/* Instagram Icon */}
          </a>
        </div>

        {/* Technology Icons */}
        <div style={styles.techLinks}> 
          <div style={styles.techIcon}>
            <DiReact size={50} /> {/* React Icon */}
          </div>
          <div style={styles.techIcon}>
            <DiHtml5 size={50} /> {/* HTML Icon */}
          </div>
          <div style={styles.techIcon}>
            <DiCss3 size={50} /> {/* CSS Icon */}
          </div>
          <div style={styles.techIcon}>
            <DiJavascript1 size={50} /> {/* JavaScript Icon */}
          </div>
          <div style={styles.techIcon}>
            <DiNodejs size={50} /> {/* Node.js Icon */}
          </div>
          <div style={styles.techIcon}>
            <DiPostgresql size={50} /> {/* PostgreSQL Icon */}
          </div>
          <div style={styles.techIcon}>
            <DiGit size={50} /> {/* Git Icon */}
          </div>
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
    minHeight: '100vh',
    backgroundColor: '#f4f7fc',
    padding: '20px',
  },
  bioContainer: {
    backgroundColor: '#ffffff',
    borderRadius: '10px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
    padding: '30px',
    width: '100%',
    maxWidth: '800px',
    textAlign: 'center',
    transition: 'transform 0.3s ease-in-out',
  },
  profileImage: {
    width: '150px',
    height: '150px',
    borderRadius: '50%',
    objectFit: 'cover',
    objectPosition: '50% 15%',
    border: '4px solid #0072b1',
    marginBottom: '20px',
  },
  heading: {
    fontSize: '2rem',
    fontWeight: '600',
    color: '#333',
    marginBottom: '15px',
  },
  bioText: {
    fontSize: '1rem',
    color: '#555',
    lineHeight: '1.6',
    marginBottom: '20px',
  },
  socialLinks: {
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
    marginTop: '20px',
  },
  techLinks: {
    display: 'flex',
    justifyContent: 'center',
    gap: '30px',
    marginTop: '40px',
    flexWrap: 'wrap',
  },
  techIcon: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0072b1',
    borderRadius: '50%',
    padding: '15px',
    color: '#fff',
    transition: 'transform 0.3s ease, background-color 0.3s ease',
  },
  iconLink: {
    color: '#0072b1',
    textDecoration: 'none',
    transition: 'color 0.3s ease, transform 0.3s ease',
  },
};

