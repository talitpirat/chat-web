import React, { useEffect } from 'react'
import Message from './Message.jsx'
import useGetMessages from '../../hooks/useGetMessages'
import MessageSkeleton from '../skeletons/MessageSkeleton.jsx'

const Messages = () => {
  const { messages, loading } = useGetMessages()
  const lastMessageRef = React.useRef(null)
  useEffect(() => {
    setTimeout(()=> {
      lastMessageRef.current?.scrollIntoView({ behavior: 'smooth'});
    }, 100)
  }, [messages])
  return (
    <div className='px-4 flex-1 overflow-auto'>
      {!loading && messages.length > 0 &&
        messages.map((message) => (
          <div key={message._id}
            ref={lastMessageRef}>
            <Message message={message} />
          </div>
        ))}
      {loading && [...Array(3)].map((_, idx) => <MessageSkeleton key={idx} />)}
      {!loading && messages.length === 0 && (
        <p className='text-center text-gray-300'>Send a message to start a conversation</p>
      )}
    </div>
  )
}

export default Messages
