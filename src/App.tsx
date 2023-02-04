import React, { useState } from 'react'
import Item from './data/dataTypes';
import SONGS_DATA from './data/data';

import Songs from './components/Songs'
import Search from './components/Search';
import { Input } from './components/Input';


const App =():JSX.Element=> {
  // const [result, setResult] = useState<Item[] | undefined>();

  const [query, setQuery] = useState('');
  const inputHandleChange=(event: React.ChangeEvent<HTMLInputElement>)=>{
    setQuery(event.target.value);
    console.log(query)
  }

  return (
    <div>
      <Search query={query} inputHandleChange = {inputHandleChange}/>
      <Songs data ={SONGS_DATA} query={query}/>
    </div>
  )
}

export default App
