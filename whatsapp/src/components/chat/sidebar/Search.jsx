import { Box, InputBase, styled } from '@mui/material'
import React from 'react'
import { Search as SeachIcon } from '@mui/icons-material';

const Component = styled(Box)`
    background: #fff;
    height: 45px;
    border-bottom: 1px solid #F2F2F2;
    display : flex;
    align-items:center;
`

const Wrapper = styled(Box)`
      background-color: #f0f2f5;
      position:relative;
      margin: 0 13px;
      width:100%;
      border-radius: 10px;
      
      `

const InputField = styled(InputBase)`
width : 100%;
padding:16px;
height: 15px;
padding-left:3rem;
margin-top: 0.1rem;
font-size: 14px;
color: gray;
`

const Icon = styled(Box)`
position : absolute;
height: 100%;
padding: 6px 10px;
color: #919191;


`


export const Search = ({ setText }) => {

  return (
    <Component>
      <Wrapper>
        <Icon>
          <SeachIcon />
        </Icon>
        <InputField placeholder='Search or start a new chat'
          onChange={(e) => {
            setText(e.target.value)
          }}
        />
      </Wrapper>
    </Component>
  )
}
