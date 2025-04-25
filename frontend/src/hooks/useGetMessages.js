import React, { useEffect } from 'react'
import useConversation from '../zustand/useConversation'
import toast from 'react-hot-toast'

const useGetMessages = () => {
  const [loading, setLoading] = React.useState(false)
  const {messages,setMessages,selectedConversation} = useConversation()

  useEffect(()=>{
    const getMessages = async () => {
        setLoading(true)
        try {
            const res = await fetch(`/api/messages/${selectedConversation._id}`);
            const data = await res.json()
            if (data.err) {
                throw new Error(data.err)
            }
            setMessages(data)
        } catch (error) {
            toast.error(error.message)
        }finally {
            setLoading(false)
        }
    }
    if(selectedConversation?._id) getMessages()
  },[selectedConversation?._id,setMessages])

  return {loading, messages}
}

export default useGetMessages