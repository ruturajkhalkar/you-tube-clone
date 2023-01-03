import React from 'react'
import {Box} from '@mui/material';
import { BrowserRouter, Routes,Route } from "react-router-dom";
import { Navbar,Feed,VideoDetail,ChannelDetail,SearchFeed } from './component';


export default function app() {
  return (
  <BrowserRouter>
    <Box sx={{background:'#000'}}>
        <Navbar/>
        <Routes>
               <Route exact path='/' element={<Feed />} />
                <Route path='/video/:id' element={<VideoDetail/>}/>
                <Route path='/channel/:id' element={<ChannelDetail/>}/>
                <Route path='/search/:searchTerm' element={<SearchFeed/>}/>
        </Routes>
      
    </Box>
  </BrowserRouter>
  )
}

