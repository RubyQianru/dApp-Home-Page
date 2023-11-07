
import React, { useState, useEffect } from "react";
import Typography from '@mui/material/Typography';
import Post from "./Post";
import RecordList from "./RecordList";


import { Route, Routes } from "react-router-dom";



function Forum() {
   
  return (
    <div>
        <Post/>
        <br/>
        <br/>
        <Routes>
          <Route exact path="/" element={<RecordList />} />
          {/* <Route path="/create" element={<Create />} /> */}

        </Routes>
    </div>
    
  );
}

export default Forum;