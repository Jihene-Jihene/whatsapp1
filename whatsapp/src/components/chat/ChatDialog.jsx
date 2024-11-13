import styled from '@emotion/styled'
import { Box, Dialog } from '@mui/material'
import React, { useContext } from 'react'
import { AccContext } from '../../context/Provider'
import { ChatBox } from './ChatBox'
import { EmptyChat } from './EmptyChat'
import { Sidebar } from './sidebar/Sidebar'

const style = {
    height: "95%",
    margin: "20px",
    // marginTop: "12%",
    width: "100%",
    maxWidth: "100%",
    maxHeight: "100%",
    boxShadow: "none",
    overflow: "hidden",
    borderRadius: 0

}

const Component = styled(Box)`
    display:flex;
`
const LeftComponent = styled(Box)`
    min-width: 30%
`
// 450px
const RightComponent = styled(Box)`
    width: 73%;
    min-width: 300px;
    height:100%;
    border-left: 1px solid rgba(0,0,0,0.14)
`
export const ChatDialog = ({}) => {
    const { person } = useContext(AccContext)
    return (
        <Dialog
            minwidth={"md"}
            PaperProps={{ sx: style }} open={true} hideBackdrop
        >
            <Component >

                <LeftComponent>
                    <Sidebar />
                </LeftComponent>
                <RightComponent>
                    {Object.keys(person).length ?
                        <ChatBox /> :

                        <EmptyChat />


                    }
                </RightComponent>
            </Component>
        </Dialog>
    )
}
