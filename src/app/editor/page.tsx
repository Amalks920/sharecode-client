"use client"

import { MdEditor } from 'md-editor-rt'
import React, { useState } from 'react'
import 'md-editor-rt/lib/style.css';

const page = () => {

  const [text, setText] = useState('# Hello Editor');

  return (
    <div className='border-2 border-black flex justify-center items-center h-fit'>
       
      <div className='border-2 border-black w-full h-[92vh]'>
      <MdEditor pageFullscreen={true} theme='dark' modelValue={text} onChange={setText} />
        </div> 
    </div>
  )
}

export default page
