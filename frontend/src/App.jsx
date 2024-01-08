import { useEffect, useState } from 'react';
import './App.css';
import Navbar from './Component/Navbar';
import Textarea from './Component/Textarea';

function App() {

  const [text, setText] = useState('')
  const [pathName, setPathName] = useState("")
  const [newPathName, setNewPathName] = useState("")

  useEffect(() => {
    console.log(window.location.pathname)
    setPathName(window.location.pathname)
    getPathData()
  }, [])

  function print() {
    console.log(text)
    let payload = {
      text : text,
      pathName : window.location.pathname
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

  function getPathData () {
    let payload = {
      pathName : window.location.pathname
    }
    fetch('http://localhost:8000/getPathData', {
      method: "POST",
      body: JSON.stringify(payload),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(res => res.json())
    .then(res => {
      console.log(res)
      setText(res.text)
    })
    .catch(err => console.log(err))
  }

  function goToPage() {
    window.location.href = window.location.href + newPathName
  }
  
  return (
    <div className='h-screen w-full bg-slate-500'>
      <Navbar print={print} refreshNotes={getPathData} text={text} />
      {
        pathName !== "/" 
        ?
        <Textarea text={text} setText={setText} />
        :
        <>
          <h1>Please add a Path in URL</h1>
          <h1>Or</h1>
          <div className='inputField'>
            <input type="text" name="path" id="path" placeholder='pathName' value={newPathName} onChange={e => setNewPathName(e.target.value)} />
            <button disabled={!newPathName} onClick={goToPage}>Go to Page</button>
          </div>
        </>
      }
    </div>
  );
}

export default App;
