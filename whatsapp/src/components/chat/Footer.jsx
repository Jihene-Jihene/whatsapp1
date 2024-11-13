import { Box, InputBase, styled } from '@mui/material'
import React from 'react'
import { EmojiEmotionsOutlined, AttachFile, Mic, ConstructionOutlined } from "@mui/icons-material"
import { useState } from 'react';
import { useEffect } from 'react';
import { uploadFile } from '../../services/api';


const Component = styled(Box)`
  display: flex;
  height: 55px;
  backgroud: #ededed;
  align-items: center;
  width: 100%;
  padding: 0 15px;
  & > * {
    margin: 5px;
    color: #919191;
  }

`;
const Search = styled(Box)`
    background-color: #fff;
    border-radius: 18px;
    width: calc( 94% - 100px);
`
const Clip = styled(AttachFile)`
    transform: rotate(40deg)
`
const InputField = styled(InputBase)`
  width : 100%;
  padding: 20px;
  height: 20px;
  padding-left: 25px;
  font-size: 14px;

`
export const Footer = ({ sendText, setValue, value, file, setFile,setImage }) => {
 
  const onFileChange = (e) => {
    
    setValue(e.target.files[0].name);
    setFile(e.target.files[0]);
  }

  useEffect(() => {
    const getImage = async () => {
      if (file) {
        const data = new FormData();
        data.append("name", file.name);
        data.append("file", file);

      let res =  await uploadFile(data)
      
      setImage(res)
      }
    }
    getImage()
  }, [file])
  return (
    <Component>
      <EmojiEmotionsOutlined />
      <label htmlFor="fileInput">
        <Clip />
      </label>
      <input type="file" id='fileInput' style={{ display: 'none' }}
        onChange={(e) => onFileChange(e)}
      />

      <Search>
        <InputField
          
          value={value}
          placeholder='Type a message'
          onChange={(e) => setValue(e.target.value)}
          onKeyPress={(e) => sendText(e)}
        />
      </Search>
      <Mic />
    </Component>
  )
}
