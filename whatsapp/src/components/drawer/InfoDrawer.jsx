import React from 'react'
import {Box, Drawer, Typography,styled} from "@mui/material"
import { ArrowBack} from "@mui/icons-material"
import { Profile } from './Profile'
const drawer = {
  left: 20,
  top: 17,
  height:"95%",
  width:"29.3%",
  boxShadow:"none"
  
}

const Header = styled(Box)`
  background: #008069;
  height: 107px;
  color: #FFFFFF;
  display: flex;
  & > svg, & > p {
      margin-top:auto;
      padding : 15px;
      font-weight : 600;
      
  }
`

const Component = styled(Box)`
    background: #ededed;
    height : 85%;
  `
export const InfoDrawer = ({open,setOpen}) => {

  return (
    <Drawer 
    style={{zIndex:1500}}
    PaperProps={{sx:drawer}} open={open} onClose={()=> setOpen(false)}>
        <Header>
          <ArrowBack onClick={()=> setOpen(false)}/>
          <Typography>Profile</Typography>
        </Header>
        <Component>
          <Profile/>
        </Component>
    </Drawer>

  )
}
 