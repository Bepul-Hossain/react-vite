import React, { useState } from 'react'
import SONGS_DATA from './data/data';

import Search from './components/Search';
import Songs from './components/Songs'


const App =():JSX.Element=> {
  // const [result, setResult] = useState<Item[] | undefined>();

  const [query, setQuery] = useState('');

  return (
    <div>
      <Search query={query} setQuery = {setQuery}/>
      <Songs data ={SONGS_DATA} query={query}/>
    </div>
  )
}

export default App
