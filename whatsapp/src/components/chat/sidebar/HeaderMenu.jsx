import React from 'react'
import { MoreVert } from "@mui/icons-material"
import { Box ,styled} from '@mui/system'
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useState } from 'react';



const MenuOption = styled(MenuItem)`
    font-size: 14px;
    padding: 15px 60px 15px 24px;
    color: #4A4A4A'

`

export const HeaderMenu = (props) => {

    const [open,setOpen] = useState(null);

    const handleClose = () =>{
        setOpen(null)
    }
    const handleClick = (e) =>{
        setOpen(e.currentTarget)
    }
    return (
        <Box>
            <MoreVert onClick={handleClick}/>
            <Menu
                keepMounted
                anchorEl={open}
                open={open}
                onClose={handleClose}
                getcontentanchore1={null}
               anchorOrigin={{
                vertical: "bottom",
                horizontal:"center"
               }}
               transformOrigin={{
                vertical:"top",
                horizontal:"right"
               }}
            >
                <MenuOption onClick={()=>{
                    handleClose();
                    props.setOpen(true)
                    
                }}>Profile</MenuOption>
                {/* <MenuItem onClick={handleClose}>My account</MenuItem>
                <MenuItem onClick={handleClose}>Logout</MenuItem> */}
            </Menu>
        </Box>
    )
}
