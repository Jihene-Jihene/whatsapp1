import { useState, useRef, useEffect } from "react";
import { createContext } from "react";
import { io } from "socket.io-client"
export const AccContext = createContext(null);

export const AccProvider = ({ children }) => {
    const [acc, setAcc] = useState();
    const [person, setPerson] = useState({})
    const [activeUsers, setActiveUsers] = useState([]);
    const [messageFlag,setMessageFlag] = useState(false)
    const socket = useRef();
    useEffect(() => {
        socket.current = io("https://server-for-whatsapp001.onrender.com/")


    }, [])

    return (
        <AccContext.Provider value={{
            acc, setAcc, person, setPerson, socket, 
            activeUsers, setActiveUsers, 
            messageFlag,setMessageFlag
        }}>
            {children}
        </AccContext.Provider>
    )
}