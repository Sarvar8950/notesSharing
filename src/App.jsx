import { useState } from 'react';
import './App.css';
import Navbar from './Component/Navbar';
import Textarea from './Component/Textarea';

function App() {
  
  const [text, setText] = useState('')
  function print() {
    console.log(text)
  }
  return (
    // mongodb+srv://admin:<password>@cluster0.z6yezz3.mongodb.net/?retryWrites=true&w=majority
    <div className='h-screen w-full bg-slate-500'>
      <Navbar print={print} />
      <Textarea setText={setText} />
    </div>
  );
}

export default App;
