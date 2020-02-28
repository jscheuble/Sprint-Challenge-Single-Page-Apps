import React from "react";

export default function CharacterCard(props) {
  return (
    <div>
      <img src={props.src} alt='rick and morty'/>
      <p>Name: {props.name}</p>
      <p>Status: {props.status} </p>
      <p>Species: {props.species} </p>
      <p>Origin: {props.origin}</p>
      <p>Locaiton: {props.location} </p>
    </div>
  );
}
