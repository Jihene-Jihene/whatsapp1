import { Box } from '@mui/material'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useContext } from 'react'
import { AccContext } from '../../context/Provider'
import { getConversation } from '../../services/api'
import { ChatHeader } from './ChatHeader'
import { Messages } from './Messages'


export const ChatBox = () => {
    const { person, acc } = useContext(AccContext);

    const [conversation,setConversation] = useState({})
    
    useEffect(() => {
        const getConveresationDetails = async () => {
            let data = await getConversation({
                senderId: acc.sub,
                receiverId: person.sub,
            })
           
            setConversation(data);
        }
        getConveresationDetails();
    }, [person.sub])
    return (
        <Box>
            <ChatHeader person={person} />
            <Messages person={person} conversation={conversation}/>
        </Box>
    )
}
