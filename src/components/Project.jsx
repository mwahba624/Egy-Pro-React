import React from 'react';
export default function Project({ title, description, link }) {
  return (
    <div className="">
      <h2 className="">{title}</h2>
      <p className="">{description}</p>
      <a
        href={link}
        className=""
        target="_blank"
        rel="noopener noreferrer"
      >
        View Project
      </a>
    </div>
  );
}