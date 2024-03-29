import React from 'react'

export default function Textarea({setText, text}) {
  return (
    <div className='w-3/4 m-auto my-4 h-3/4'>
        <textarea value={text} className='w-full h-full p-4' placeholder='Enter Your Text' onChange={(e) => setText(e.target.value)}></textarea>
    </div>
  )
}
