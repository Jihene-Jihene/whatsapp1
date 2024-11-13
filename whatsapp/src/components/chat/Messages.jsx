import { Box, styled } from '@mui/material'
import React, { useContext, useState, useEffect, useRef } from 'react'
import { Footer } from './Footer'
import { AccContext } from "../../context/Provider"
import { getMessage, newMessage } from '../../services/api'
import { SingleMessage } from './SingleMessage'
import { Socket } from 'socket.io-client'


const Wrapper = styled(Box)`
    background-image: url(${'https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png'});
    background-size: 50%;


`
//.example::-webkit-scrollbar {
// display: none;
//}

const Component = styled(Box)`
    height : 80vh;
    overflow-y: scroll;
     
`
// ::-webkit-scrollbar {
//     display: none;
// }
const Container = styled(Box)`
padding: 1px 80px;
`
export const Messages = ({ person, conversation }) => {
    const [value, setValue] = useState("")
    const [message, setMessages] = useState([]);

    // we put this is context to reuse it at multiple places.

    // const [messageFlag, setMessageFlag] = useState(false)
    const [file, setFile] = useState('')
    const [image, setImage] = useState('')
    const scrollRef = useRef();
    const [incomingMessage, setIncomingMessage] = useState(null)
    const { acc, socket, messageFlag, setMessageFlag } = useContext(AccContext);

    useEffect(() => {
        socket.current.on("getMessage", data => {
            setIncomingMessage({
                ...data,
                // createdAt: Date.now(),

            })
        })
    }, [])


    const sendText = async (e) => {
        const code = e.keycode || e.which;
        if(value == "") return;
        if (code == 13) {
            let msg = {}
            if (!file) {


                msg = {
                    senderId: acc.sub,
                    receiverId: person.sub,
                    conversationId: conversation._id,
                    type: "text",
                    text: value,
                }
            } else {
                msg = {
                    senderId: acc.sub,
                    receiverId: person.sub,
                    conversationId: conversation._id,
                    type: "file",
                    text: image,
                }
            }
            socket.current.emit("sendMessages", msg)
            await newMessage(msg);

            setValue("");
            setFile('')
            setImage('')
            setMessageFlag(p => !p)
        }
    }
    useEffect(() => {
        const getMessageDetails = async () => {
            let data = await getMessage(conversation._id);
            setMessages(data)

        }
        // because calling one undefined call or dont have any messages. 
        conversation?._id && getMessageDetails();
    }, [person?._id, conversation?._id, messageFlag])

    useEffect(() => {
        scrollRef.current?.scrollIntoView({ transition: "smooth" })
    }, [message]);

    useEffect(() => {
        incomingMessage && conversation?.members?.includes(incomingMessage.senderId) &&
            setMessages(prev => [...prev, incomingMessage])
    }, [incomingMessage, conversation])
    return (
        <Wrapper>
            <Component>
                {message && message.map(el => (
                    <Container ref={scrollRef}>
                        <SingleMessage message={el} key={el.senderId} />
                    </Container>
                ))}
            </Component>
            <Footer
            
                sendText={sendText}
                setValue={setValue}
                value={value}
                file={file}
                setFile={setFile}
                setImage={setImage}
            />
        </Wrapper>
    )
}
