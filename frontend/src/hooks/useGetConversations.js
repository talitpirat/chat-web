import React from 'react'
import toast from 'react-hot-toast';

const useGetConversations = () => {
    const [loading, setLoading] = React.useState(false)
    const [conversations, setConversations] = React.useState([]);

    React.useEffect(() => {
        const getConversations = async () => {
            setLoading(true)
            try {
                const res = await fetch('/api/users');
                const data = await res.json();
                if (data.err) {
                    throw new Error(data.err)
                }
                setConversations(data)
            } catch (error) {
                toast.error(error.message)
            } finally {

                setLoading(false)
            }
        }
        getConversations()
    }, [])
    return { loading, conversations }
}

export default useGetConversations