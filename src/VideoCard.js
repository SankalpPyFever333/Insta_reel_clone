import React, { useRef, useState } from 'react'
import './VideoCard.css';
import VideoHeader from './VideoHeader';
import VideoFooter from './VideoFooter';

function VideoCard({url,likes,shares,channel,avatarSrc,song}) {
  // we want that when we click the video, the video start playig. For that we use useState hook and useRef hook
  // basically useRef creates a reference to the video.
  const [isVideoPlaying,setIsVideoPlaying]= useState(false);
  const videoRef= useRef(null);
  const onVideoPress=()=>{
    if(isVideoPlaying){
      //stop the video
      videoRef.current.pause();
      setIsVideoPlaying(false);
    }
    else{
      //play the video
      videoRef.current.play();
      setIsVideoPlaying(true);
    }

  }

  return (
    <div className="videoCard">
      <VideoHeader/> 
      {/* Here I am importing the VideoHeader component. */}
      <video loop unmuted="true" className="videoCard_player" ref={videoRef} onClick={onVideoPress}  >
        <source src={url} type="video/mp4" />
      </video>
      {/* The other properties which we are getting i.e likes,share,avatarSrc and song will be used in footer portion. */}
      <VideoFooter 
      channel={channel}
      likes={likes}
      shares= {shares}
      avatarSrc={avatarSrc}
      song={song}
      />
    </div>
    
  );
};

export default VideoCard;
