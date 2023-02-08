import { useState } from 'react';
import './App.css';
import Navbar from './Component/Navbar';
import Textarea from './Component/Textarea';

function App() {

  const [text, setText] = useState('')
  function print() {
    console.log(text)
    let payload = {
      text : text
    }
    fetch('http://localhost:8000/addData', {
      method: "POST",
      body: JSON.stringify(payload),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(res => res.json())
    .then(res => console.log(res))
    .catch(err => console.log(err))
  }
  
  return (
    <div className='h-screen w-full bg-slate-500'>
      <Navbar print={print} />
      <Textarea setText={setText} />
    </div>
  );
}

export default App;
