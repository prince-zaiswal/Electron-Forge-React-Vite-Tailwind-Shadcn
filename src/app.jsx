import React from 'react'
import { Button } from './components/ui/button';
import './app.css'

function app() {
  return (
    <div className='flex place-content-center items-center h-screen '>
      <div>
      <div className=' greet-heading  animate-bounce'>Hello World From Electron forge + React + Tailwind + Vite + Shadcn</div>
       <div className='mt-3 text-center'><Button>👋 HI , I am Shadcn Button</Button></div>
       </div>
    </div>
  )
}

export default app;
