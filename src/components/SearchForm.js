import React, { useState } from "react";

export default function SearchForm(props) {
 
  return (
    <section className="search-form">
      <form>
        <input type='text' name='search' value={props.query} placeholder='search &#x1F50E; by name' autoComplete='off' onChange={props.handleChange} />
      </form>
    </section>
  );
}
