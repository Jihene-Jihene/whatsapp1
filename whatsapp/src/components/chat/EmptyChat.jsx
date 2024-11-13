import { Box, Typography, styled } from '@mui/material'
import React from 'react'
import { emptyChatImage } from "../../constants/links";

const Component = styled(Box)`
      background: #f8f9fa;
      padding: 30px 0;
      text-align: center;
      height: 100%;
`

const Container = styled(Box)`
    padding: 0 200px;
`;

const Image = styled("img")({
  width: 400,
  marginTop: 100
});
const Title = styled(Typography)`
  font-size: 1.8rem;
  margin: 25px 0 0 10px;
  font-family : inferit;
  font-weight:300;
  color: #41525d;
`

const Subtitle = styled(Typography)`
font-size: 1rem;

font-family : inferit;
font-weight:400;
color: #667781;
`
const SecondSubtitle = styled(Typography)`
font-size: 0.8rem;

font-family : inferit;
font-weight:200;
color: gray;
`
export const EmptyChat = () => {
  return (
    <Component>
      <Container>

        <Image src={emptyChatImage} alt="No Chats" />
        <Title>WhatsApp Web</Title>
        <Subtitle>Send and receive messages without keeping your phone online.</Subtitle>
        <Subtitle>Use WhatsApp on up to 4 linked devices and 1 phone at the same time.</Subtitle>
        <SecondSubtitle>End-to-end encrypted</SecondSubtitle>

      </Container>
    </Component>
  )
}
