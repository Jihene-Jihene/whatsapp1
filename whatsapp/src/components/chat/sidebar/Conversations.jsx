import { Box, Typography, styled } from "@mui/material";
import React, { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { emptyProfilePicture } from "../../../constants/links";
import { AccContext } from "../../../context/Provider";
import { getConversation, setConversation } from "../../../services/api";
import { formateDate } from "../../../Utils/common-utils";

const Component = styled(Box)`
  display: flex;
  height: 45px;
  padding: 13px;
  cursor: pointer;
`;
const Image = styled("img")({
  width: 50,
  height: 50,
  borderRadius: "50%",
  padding: "0 14px",
});
const Container = styled(Box)`
  display: flex;
`;
const TimeStamp = styled(Box)`
  margin-left: auto;
  font-size: 12px;
  color: #00000099;
  margin-right: 20px;
`;
const Text = styled(Box)`
  font-size: 14px;
  color: #00000099;
`;
export const Conversations = ({ user }) => {
  const { setPerson, acc, messageFlag } = useContext(AccContext);
  const [message, setMessage] = useState({});
  useEffect(() => {
    const getConversationDetails = async () => {
      const data = await getConversation({
        senderId: acc.sub,
        receiverId: user.sub,
      });
      setMessage({ text: data?.message, createdAt: data?.updatedAt });
    };
    getConversationDetails();
  }, [messageFlag]);

  const getUser = async () => {
    await setPerson(user);
    await setConversation({ senderId: acc.sub, receiverId: user.sub });
  };
  const url = user.picture || emptyProfilePicture;
  return (
    <Component onClick={() => getUser()}>
      <Box>
        <Image src={url} alt="Pic" />
      </Box>
      <Box style={{ width: "100%" }}>
        <Container>
          <Typography>{user.name}</Typography>
          {message?.text && (
            <TimeStamp>{formateDate(message?.createdAt)}</TimeStamp>
          )}
        </Container>
        <Box>
          <Text>
            {message?.text?.includes("localhost") ? "media" : message.text}
          </Text>
        </Box>
      </Box>
    </Component>
  );
};
