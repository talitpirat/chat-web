import React from 'react'
import useConversation from '../zustand/useConversation'
import toast from 'react-hot-toast';

const useSendMessage = () => {
  const [loading, setLoading] = React.useState(false)
  const {messages, setMessages,selectedConversation} = useConversation();

  const sendMessage = async (message) => {
    setLoading(true)
    try {
        const res = await fetch(`/api/messages/send/${selectedConversation._id}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ message }),
        })
        const data = await res.json()
        if(data.err) {
            throw new Error(data.err)
        }
        setMessages([...messages, data]);
    } catch (error) {
        toast.error(error.message)
    }finally {
        setLoading(false)
    }
  }
    return {loading, sendMessage}

}

export default useSendMessage