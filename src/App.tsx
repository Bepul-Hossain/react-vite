import React, { useState } from 'react'
import Item from './data/dataTypes';
import SONGS_DATA from './data/data';



const App =():JSX.Element=> {
  const [query, setQuery] = useState('');
  const [result, setResult] = useState<Item[] | undefined>();

  const inputHandler=(event: React.ChangeEvent<HTMLInputElement>)=>{
    setQuery(event.target.value);
  }
  const search=()=>{
    const foundItems = SONGS_DATA.filter((item)=>
      item?.name?.toLowerCase().includes(query.toLowerCase())
    )
    setResult(foundItems)
  }
  console.log(result)
  return (
    <div>
      <div>
      <input
      value={query}
      onChange = {inputHandler}
      placeholder = "Search"
      />
      <button onClick={search}>Search</button>
      </div>
      <div>
      {
        result && result.length>0?(
          result.map((item)=>(
            <li key={item.name}>{item.name}</li>
          ))
        ):(<h2>No Item found</h2>)
      }
      </div>
    </div>
  )
}

export default App
