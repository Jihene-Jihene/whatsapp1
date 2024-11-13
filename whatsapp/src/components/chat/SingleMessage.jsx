import { Box, Typography, styled } from '@mui/material'
import React from 'react'
import { useContext } from 'react'
import { AccContext } from '../../context/Provider'
import { formateDate,downloadMedia } from '../../Utils/common-utils'
import GetAppIcon from "@mui/icons-material/GetApp";
import { iconPDF } from "../../constants/links"
const Own = styled(Box)`
  background: #dcf8c6;
  max-width: 60%;
  margin-left: auto;
  padding: 5px;
  width: fit-content;
  display: flex;
  border-radius: 10px;
  word-break: break-word;

`
const Received = styled(Box)`
  background: #FFFFFF;
  max-width: 60%;
  
  padding: 5px;
  width: fit-content;
  display: flex;
  border-radius: 10px;
  word-break: break-word;
  
`
const Time = styled(Typography)`
    font-size: 10px;
  color: #919191;
  margin-top: 6px;
  word-break: keep-all;
  margin-top: auto;
  `
const Text = styled(Typography)`
    font-size: 14px;
    padding: 0 25px 0 5px
`
export const SingleMessage = ({ message }) => {
  
  const { acc } = useContext(AccContext)
  return (
    <>
      {acc.sub == message.senderId ?
        <Own>
          {message.type == "file" ? <ImageMessage message={message} />
            : <TextMessage message={message} />}

        </Own> :
        <Received>
          {message.type == "file" ? <ImageMessage message={message} />
            : <TextMessage message={message} />}
        </Received>

      }
    </>
  )
}
const ImageMessage = ({ message }) => {
 
  return (
    <Box style={{ position: "relative" }}>
      {
        message?.text?.includes('.pdf') ?
          <Box display={'flex'}>
            <img src={iconPDF} alt="pdf" style={{ width: '80px' }} />
            <Typography fontSize={"14px"}>{message.text.split("/").pop()}</Typography>
          </Box> :
          <img style={{ width: '300px', height: '100%' }} src={message.text} alt={message.text} />
      }
      <Time style={{ position: "absolute", bottom: 0, right: 0 }}>
        <GetAppIcon 
        onClick={(e)=> downloadMedia(e,message.text)}
        style={{
          margin: 10, border: "1px solid gray", borderRadius: "50%"

        }} fontSize='small' />
        <Time>{formateDate(message.createdAt)}</Time>

      </Time>
    </Box>
  )
}


const TextMessage = ({ message }) => {
  return (
    <>
      <Text>{message.text}</Text>
      <Time>{formateDate(message.createdAt)}</Time>
    </>
  )
}