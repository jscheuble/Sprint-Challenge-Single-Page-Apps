import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import '../index.css';


const Heading = styled.h1`
  font-family: 'Anton', sans-serif;
`;

export default function Header() {
  return (
    <header className='ui centered'>
      <nav>
        <Link className='nav-link' to={'/'}>Home</Link>
        <Link className='nav-link' to={'/characters'} >Characters</Link>
      </nav>
      <Heading className='ui center'>Rick &amp; Morty Fan Page</Heading>
    </header>
  );
}
