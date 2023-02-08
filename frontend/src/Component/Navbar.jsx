import React from 'react'

export default function Navbar({ print }) {
    return (
        <div className='flex flex-row align-middle justify-between bg-slate-300 p-3' >
            <div className="col-md-4"></div>
            <div className="col-md-4 lex flex-row align-middle justify-center h-full">
                <div className="flex flex-row align-middle justify-center h-full" >
                    <span className='inline-block align-middle my-auto text-lg'>Notes Sharing Website</span>
                </div>
            </div>
            <div className="col-md-4">
                <button className='bg-blue-500 text-white p-2 border-0 rounded-full float-right' onClick={print}>Save Notes</button>
            </div>
        </div>
    )
}
