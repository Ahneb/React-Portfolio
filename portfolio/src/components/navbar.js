import React from 'react';

import { Link, useMatch, useResolvedPath } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className='nav bg-purple flex space-between centered'>
      <Link to="/" className='txt-sz2'>
        Site Name
      </Link>
      <ul className='flex'>
        <NewLink to='/about'>About</NewLink>
        <NewLink to='/projects'>Projects</NewLink>
        <NewLink to='/contact'>Contact</NewLink>
        <NewLink to='/resume'>Resume</NewLink>
      </ul>
    </nav>
  );
};


function NewLink( { to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end:true });
  return (
    <li className={isActive ? 'active' : ''}>
      <Link to={ to }>{ children }</Link>
    </li>
  )
}