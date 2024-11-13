import React from 'react'
import { LoginDialogue } from './LoginDialogue'
import { AppBar, Toolbar, styled, Box } from "@mui/material"
import { useContext } from 'react'
import { AccContext } from '../context/Provider'
import { ChatDialog } from './chat/ChatDialog'

const Header = styled(AppBar)`
height:125px;
background-color:#00A884;
box-shodow: none;`


const LoginHeader = styled(AppBar)`
height:220px;
background-color:#00a884;
box-shodow: none;`

const Component = styled(Box)`
height: 100vh;
background-color:#111b21;
`
 const Messanger = () => {
    const { acc } = useContext(AccContext)
    return (
        <Component>
            {acc ?
                <>
                    <Header>
                        <Toolbar>

                        </Toolbar>
                    </Header>
                    <ChatDialog />
                </>

                : <>

                    <LoginHeader>
                        <Toolbar>
                        </Toolbar>
                    </LoginHeader>
                    <LoginDialogue />

                </>}
        </Component>
    )
}
export default Messanger