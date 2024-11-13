import React from 'react';
import Project from '../components/Project';

export default function Portfolio() {
  return (
    <section style={{ padding: '40px', maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
      <h1 style={{ fontSize: '2.0em', fontWeight: '700', marginBottom: '20px', color: '#333' }}>My Projects</h1>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
        <Project title="Employee Tracker" description="A database that keeps track of relationships between employees and managers is beneficial to management." link="https://github.com/mwahba624/EGY-Tracker" />
        <Project title="Weather Dashboard" description="The Weather Dashboard application provides a user-friendly way to view current and future weather conditions for various cities." link="https://github.com/mwahba624/WEATHER" />
        <Project title="Readme Generator" description="Generate a professional Readme file" link="https://github.com/mwahba624/READMEGENERATOR" />
        <Project title="Vehicle Builder" description="The Vehicle Builder CLI application is a command-line tool built with TypeScript, allowing users to create and interact with different types of vehicles." link="https://github.com/mwahba624/EGY-Vehicle" />
      </div>
    </section>
  );
}
