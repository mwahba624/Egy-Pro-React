import React from 'react';
import resume from '../assets/resume/Resume-code.pdf';

export default function Resume() {
    return (
       <section className="resume-container">
        <iframe
         src={resume}
         title="Resume"
         className="resume-item"
       >
       </iframe>
       </section>

    );
}
