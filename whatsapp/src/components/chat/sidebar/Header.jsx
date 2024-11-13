import { Box ,styled} from '@mui/material'
import React, { useContext } from 'react'
import { AccContext } from '../../../context/Provider'
import {Chat as MessageIcon,MoreVert} from "@mui/icons-material"
import { HeaderMenu } from './HeaderMenu'
import { InfoDrawer } from '../../drawer/InfoDrawer'
import { useState } from 'react'
import { emptyProfilePicture } from '../../../constants/links'


const Component = styled(Box)`
    height: 44px;
    background: #ededed;
    display: flex;
    padding: 8px 16px;
    align-items: center;
`;

const Wrapper = styled(Box) `
    margin-left: auto;
    display:flex;
    & > * {
        margin-left: 2px;
        padding: 8px;
        color: #000;
    };
    & :first-child {
        font-size: 22px;
        margin-right: 8px;
        margin-top: 3px;
    }
`;
    
const Image = styled('img') ({
    height: 40,
    width: 40,
    borderRadius: '50%'
})


export const Header = () => {
  const [openDrawer,setOpenDrawer] = useState(false)
  const { acc } = useContext(AccContext);
  const url = acc.picture || emptyProfilePicture;

  return (
    <>
      <Component>
        
        <Image src={url} alt="Pic" onClick={()=>
          setOpenDrawer(true)}/>
        <Wrapper>
        <MessageIcon/>
        <HeaderMenu open={openDrawer} setOpen={setOpenDrawer}/>
        </Wrapper>
       
      </Component>
      <InfoDrawer open={openDrawer} setOpen={setOpenDrawer}/>
    </>
  )
}
