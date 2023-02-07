import React from 'react'

export default function Navbar({print}) {
    return (
        <div>
            <div className="flex flex-row align-middle justify-center bg-slate-300 h-auto p-3" >
                <p>Notes Sharing Website</p>
                <button className='bg-blue-500 text-white p-2 border-0 rounded-full' onClick={print}>Save Notes</button>
            </div>
        </div>
    )
}
