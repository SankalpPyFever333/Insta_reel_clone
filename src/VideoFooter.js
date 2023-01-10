import React from 'react'
import './VideoFooter.css'
import MusicNoteIcon from "@mui/icons-material/MusicNote";
// import Ticker from 'react-ticker'
import {Button,Avatar} from "@mui/material";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import SendIcon from "@mui/icons-material/Send";
import ModeCommentIcon from "@mui/icons-material/ModeComment";
import FavoriteIcon from "@mui/icons-material/Favorite";
// importing Avatar(similar to insta profile image) and Button.

function VideoFooter({channel,song,likes,shares,avatarSrc}) {
      // So,here for the number of likes,profile image comments etc, we use props.
  return (
    <div className="videoFooter">
      <div className="videoFooter_text">
        <Avatar src={avatarSrc} />
        <h3>
          {channel} ∙ <Button>Follow</Button>{" "}
        </h3>
        {/* Inside h3, I had write the channel name with a Button named "Follow" */}
      </div>
      {/* You see,the song name will be moving from one side to other. So for that we have to install React ticker. It works same as <marquee/> tag in HTML */}
      {/* for installing react-ticker forcefully, you can use:  npm install react-ticker --legacy-peer-deps */}
      <div className="videoFooter__ticker">
        <MusicNoteIcon className="videoFooter__icon" />
        {/* <Ticker mode="smooth" >
          {({index})=>(
            <>
              <h1>{song} </h1>
            </>
          )}
        </Ticker> */}
        <marquee behavior="sliding" scrollamount="7" direction="left">
          <h3>{song}</h3>
        </marquee>
        {/* Initially I am using react-ticker, but it diesn't work. So I use <marquee/> */}
      </div>
      <div className="videoFooter__actions">
        <div className="videoFooter__actionsLeft">
          <FavoriteBorderOutlinedIcon  />
          <ModeCommentIcon/>
          <SendIcon/>
          <MoreHorizIcon/>
        </div>
        <div className="videoFooter__actionsRight">
          <div className="videoFooter__stat">
            <FavoriteIcon fontSize='larger' />
            <p>{likes} </p>
          </div>
          <div className="videoFooter__stat">
            <ModeCommentIcon fontSize='larger' />
            <p>{shares} </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VideoFooter



