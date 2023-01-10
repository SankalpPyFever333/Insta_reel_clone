import React from 'react'
import "./VideoHeader.css"
import SendIcon from "@mui/icons-material/Send";
import CameraAltOutlinedIcon from "@mui/icons-material/CameraAltOutlined";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
// above imports xode coppied from mui website.
function VideoHeader() {
  return (
    <div className="videoHeader">
      {/* All the icons which you see in the instagram, they all come from material UI(A react component library). So you have to download them from terminal by running command: npm install @mui/material @mui/styled-engine-sc styled-components and for installing icons, we use: npm install @mui/icons-material>>  */}
      
      <ArrowBackIosIcon />
      <h3>Reels</h3>
      <CameraAltOutlinedIcon/>
    </div>
  );
}

export default VideoHeader;
