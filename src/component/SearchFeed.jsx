import React from 'react'
import { useEffect, useState } from 'react'
import { Box, Typography } from '@mui/material'

import { VideoDetail, Videos} from ".";
import { fetchFromAPI } from '../utils/fetchFromAPI';
import { useParams } from 'react-router-dom';


export default function SearchFeed() {
 
  const[videos,setVideo] = useState([]);
  const {searchTerm} = useParams();
 

  useEffect(()=>{
   const {data}=fetchFromAPI(`search?part=snippet&q=${searchTerm}`)
   .then((data)=>setVideo(data.items))
  },[searchTerm])

  return (
    <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
      <Typography variant="h4" fontWeight="bold" mb={2} sx={{ color: "white" }}>
      Search Results for <span style={{ color: "#FC1503" }}>{searchTerm}</span> videos
      </Typography>

      <Videos videos={videos} />
    </Box>
  )
}
