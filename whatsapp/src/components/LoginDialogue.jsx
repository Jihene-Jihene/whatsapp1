import React from 'react'
import { Dialog, Typography, Box, List, ListItem, styled } from '@mui/material'
import { qrCodeImage } from '../constants/links';
import { GoogleLogin } from '@react-oauth/google';
import jwt_decode from "jwt-decode";
import { useContext } from 'react';
import { AccContext } from '../context/Provider';
import { addUser } from '../services/api';
const style = {
    height: "96%",
    marginTop: "12%",
    width: "60%",
    maxWidth: "100%",
    maxHeight: "100%",
    boxShadow: "none",
    overflow: "hidden"

}
const Component = styled(Box)`
display: flex;
`
const Container = styled(Box)`
    padding:56px 0px 56px 56px
`
const QRCode = styled("img")({
    height: 264,
    width: 264,
    margin: "50px 0px 0px 50px"
})
const Title = styled(Typography)`
    font-size:2rem;
    color: #525252;
    font-weight: 200;
    font-family: inherit;
    margin-bottom: 0.2rem
`

const ListStyle = styled(List)`
 & > li {
    padding:0;
    margin-top:15px;
    font-size: 1rem;
    line-hieght: 0.2rem;
    color: 
 }
`
export const LoginDialogue = () => {
    const { setAcc } = useContext(AccContext)

    const loginSuccess = async (res) => {
        const decoded = jwt_decode(res.credential);
        setAcc(decoded);
        await addUser(decoded)

    }

    const loginError = (res) => {
        console.log("Failed", res)

    }
    return (
        <Dialog PaperProps={{ sx: style }} open={true} hideBackdrop>
            <Component>
                <Container>
                    <Title>To use WhatsApp on your computer:</Title>
                    <ListStyle>
                        <ListItem>1. Open WhatsApp on your phone</ListItem>
                        <ListItem>2. Tap Menu or Settings and selected Linked Devices</ListItem>
                        <ListItem>3. Tap on a Link a Device</ListItem>
                        <ListItem>4. Point your phone to this screen to capture the code</ListItem>
                    </ListStyle>
                </Container>
                <Box style={{ position: "relative" }}>
                    <QRCode src={qrCodeImage} alt="QR Code" />
                    <Box style={{ position: "absolute", top: "50%",right:"22%", transform: "translate(25%)" }}>

                        <GoogleLogin width='250px' auto_select  onSuccess={loginSuccess}
                            onError={loginError}

                        />
                    </Box>
                </Box>
            </Component>
        </Dialog>
    )
}
