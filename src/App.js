import { getDocs } from "firebase/firestore";
import { collection } from "firebase/firestore";

import db from "./firebase";
import { useEffect, useState } from "react";
import "./App.css";
import VideoCard from "./VideoCard";

import React from "react";

// import { collection } from "firebase/firestore";

// import {ref, onValue} from "firebase/database";

// Requests that start with a name are treated as module requests and resolve within module directories (node_modules

function App() {
  // Now, we have to pull information from the database. So, firstly we need a variable that will keep track of all the reels. In react, we create variable we use useState.

  // snapshot.docs returns the array containing all reels and map() will traverse each reels one by one.
  // doc.data(): any data that is associated with that reels, we get that info. Actually that data about that reel is an object (key-value pair). All that is asigned to doc.
  // So, finally you going to get the array of objects and it gets inside the reels variable.
  // This simply means that whenver something is changed or added to the Collection, it will provide that fresh data. It will update the database immediately.
  // There can be many collections you have, here we are doing it for reels collection.
  const [List,setList]= useState([]);
  useEffect(() => {
    (async () => {
      const listCol = collection(db, "reels");
      const listSnapshot = await getDocs(listCol);
      setList(listSnapshot.docs.map((doc) => doc.data()));
      console.log(List);
    })();
  }, []);
  //  Above is called self-call of function. clean up function

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
        {List.map(({ channel, avatarSrc, url, song, likes, shares }) => {
          return (
            <VideoCard
              channel={channel}
              avatarSrc={avatarSrc}
              url={url}
              song={song}
              likes={likes}
              shares={shares}
            />
          );
        })}

        {/* an arrow function wrapped by () will return the value it wraps, so if I wanted to use curly braces I had to add the return keyword */}
      </div>
    </div>
  );
}

// to install any modules forcefully: npm i module_name --legacy-peer-deps

export default App;
