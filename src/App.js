import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Comp1 from './Comp1';
import Comp2 from './Comp2';

function App() {
    const [num, setNum] = useState(true);
  return (
    <div className="App">
      {
        num ? <Comp1 /> : <><Comp2 /></>
      }
      <button onClick={() => setNum(prev => !prev)}>Click to move to other comp</button>
    </div>
  );
}

export default App;
