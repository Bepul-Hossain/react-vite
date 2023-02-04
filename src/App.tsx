import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import SONGS from './data';
import Search from './components/Search'


function App() {
  // const [count, setCount] = useState(0)
  let songsSortByName = SONGS;
  songsSortByName.sort(function (a, b) {
    var x = a.name.toLowerCase();
    var y = b.name.toLowerCase();
    return x < y ? -1 : x > y ? 1 : 0;
  });

  const [userSearchText, setUserSearchText] = useState("");
  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    setUserSearchText(e.target.value);
  }

  return (
    <div className="App">
      <Search textChange={handleChange} userSearchText={userSearchText}/>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
