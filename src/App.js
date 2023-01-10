import { useEffect, useState } from "react";
import "./App.css";
import VideoCard from "./VideoCard";
import db from "./firebase";
import React from "react";
import { doc } from "firebase/firestore";
// import { collection } from "firebase/firestore";

// import {ref, onValue} from "firebase/database";

// Requests that start with a name are treated as module requests and resolve within module directories (node_modules

function App() {
  // Now, we have to pull information from the database. So, firstly we need a variable that will keep track of all the reels. In react, we create variable we use useState.
  const [reel, setReels] = useState([{
    avatarSrc:"https://i.pinimg.com/736x/47/3f/01/473f01670ae8c0bfa515541f554f0ea1.jpg",
    channel: "FluteFever",
    likes: 89,
    shares: 23,
    song: "Pandeyji Flute Song.mp3",
    url: "ReelsVideo/flutevideo.mp4",
  }]);
  
  
  
  // snapshot.docs returns the array containing all reels and map() will traverse each reels one by one.
  // doc.data(): any data that is associated with that reels, we get that info. Actually that data about that reel is an object (key-value pair). All that is asigned to doc.
  // So, finally you going to get the array of objects and it gets inside the reels variable.
  // This simply means that whenver something is changed or added to the Collection, it will provide that fresh data. It will update the database immediately.
  // There can be many collections you have, here we are doing it for reels collection.
  
  useEffect(()=>{
    db.collection("reels").onSnapshot(snapshot=> setReels(snapshot.docs.map(doc=> doc.data())))
  }
  
  )
  
  
  // Inside that [], you can give more values whenver they get change this useEffect will run. It is called dependency array.
  
  
  return (
    // using BEM naming convention for naming class or id.
    <div className="app">
      <div className="app_top">
        {/* insta image at top:logo */}
        {/* reels text */}
        <img
          src="https://img.icons8.com/3d-fluency/2x/instagram-new.png"
          alt=""
          className="app_logo"
        />
        <h1>Reels</h1>
      </div>

      <div className="app_videos">
        {/* container of app_videos (Scrollable videos) */}
        {/* here we import the VideoCard component */}
        {/* In VideoCard component, wehave to pass some props like url,likes, shares,song,profile Source and channel name. */}
        {/* In the above component, we are passing the exact values of the props. */}
        {/* You can write <VideoCard/> component as many you want. */}
        {/* Now , we pass it access values from firebase and pass it to the props. */}
        {/* reels is the name of our collection */}
        {reel.map(element => {
          <VideoCard
            channel={element.channel}
            avatarSrc={element.avatarSrc}
            song={element.song}
            url={element.url}
            likes={element.likes}
            shares={element.shares}
            key={element.id}
          
          />
      })}
        {/* an arrow function wrapped by () will return the value it wraps, so if I wanted to use curly braces I had to add the return keyword */}
      </div>
    </div>
  );
}

// to install any modules forcefully: npm i module_name --legacy-peer-deps

export default App;
