"use client";
import { MdEditor } from 'md-editor-rt';
import React, { useEffect, useState } from 'react';
import 'md-editor-rt/lib/style.css';
import io, { Socket } from 'socket.io-client';

const Page = ({ params }: { params: { slug: string } }) => {
  // Define the state for the text
  const [text, setText] = useState<string>('# Hello Editor');
  const [socket, setSocket] = useState<Socket | null>(null);



if(socket){
  socket.on('receive-message', (msg: string) => {
    console.log(msg, 'message at last!');
    setText(msg);
  });
}


  useEffect(() => {
    // Initialize socket and join the room only once
    const newSocket: Socket = io('http://localhost:4000');
    setSocket(newSocket);

    newSocket.emit('join_room', params.slug);

    return () => {
      // Clean up the socket connection when the component unmounts
      newSocket.disconnect();
    };
  }, [params.slug]);

  useEffect(() => {
    if (socket) {
      // Send message when `text` changes
      socket.emit('send-message', text, params.slug);
    }


  }, [text, socket, params.slug]);

  return (
    <div className='border-2 border-black flex justify-center items-center h-fit'>
      <div className='border-2 border-black w-full h-[92vh]'>
        <MdEditor pageFullscreen={true} theme='dark' modelValue={text} onChange={setText} />
      </div>
    </div>
  );
};

export default Page;

