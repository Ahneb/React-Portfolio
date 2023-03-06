import React from 'react';

export default function Navbar() {
  return (
    <nav className='nav bg-purple flex space-between centered'>
      <a href="/" className=''>
        Site Name
      </a>
      <ul className=''>
        <li>
          <a href=''>About ME</a>
        </li>
        <li>
          <a href=''>Projects</a>
        </li>
        <li>
          <a href=''>Resume</a>
        </li>
        <li>
          <a href=''>Contact</a>
        </li>
      </ul>
    </nav>
  );
};