import React from 'react';
import styled from 'styled-components';
import '../index.css';

const Card = styled.div`
  background: #07a390;
  margin: 1%;
  font-family: 'Cairo', sans-serif;
  text-align: center;
  font-size: 17px;
`;

export default function CharacterCard(props) {
  return (
    <Card>
      <img src={props.src} alt='rick and morty'/>
      <p>Name: {props.name}</p>
      <p>Status: {props.status} </p>
      <p>Species: {props.species} </p>
      <p>Origin: {props.origin}</p>
      <p>Location: {props.location} </p>
    </Card>
  );
}
