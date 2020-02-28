import React, { useEffect, useState } from 'react';
import axios from 'axios';

import CharacterCard from './CharacterCard';
import SearchForm from './SearchForm';

export default function CharacterList() {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState('');

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios.get('https://cors-anywhere.herokuapp.com/https://rickandmortyapi.com/api/character/')
    .then(res => {
      console.log(res.data.results);
      setData(res.data.results);
    })
    .catch(err => {
      console.log(err);
    })
  }, []);

  useEffect(() => {
    const characters = data.filter(char => char.name.toLowerCase().includes(query.toLowerCase()));
    setData(characters);
  }, [query]);

  const handleChange = e => {
    setQuery(e.target.value);
  }


  return (
    <section className="character-list">
      <SearchForm query={query} handleChange={handleChange} />
      <div className='grid-view'>
      {data.map((e, i) => {
        return (
          <CharacterCard key={i} src={e.image} name={e.name} status={e.status} species={e.species} origin={e.origin.name} location={e.location.name} />
        )
      })}
      </div>
    </section>
  );
}
