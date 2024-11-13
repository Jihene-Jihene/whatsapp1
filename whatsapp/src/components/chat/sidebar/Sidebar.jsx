import { Box ,styled} from '@mui/material'
import { lazy, Suspense } from 'react';

import React from 'react'
import { useState } from 'react';
import AppLoader from '../../loader/AppLoader';
import { Header } from './Header';
import { Search } from './Search';

const  Conversation  = lazy(() => import('./Conversation'));

// import { Conversation } from './Conversation';
export const Sidebar = () => {
  const [text,setText] = useState('')
  return (
    <Box>
        <Header/>
        <Search  setText={setText}/>
        <Suspense fallback={<AppLoader />}>
        <Conversation text={text}/>
        </Suspense>
    </Box>
  )
}
