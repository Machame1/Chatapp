import React, { useEffect, useState,useRef } from 'react'
import "./chats.css"
import Emoji from "emoji-picker-react"
function Chatss() {
  const[open,setopen]=useState(false);
  const[text,settext]=useState("")
  const endref=useRef(null)
  useEffect(()=>{
endref.current?.scrollIntoView({ behavior:"instant" });
  },[]);

const opens=()=>{
setopen((p)=>!p)
}
const emojiclick=(e)=>{
settext((p)=>p+e.emoji)
setopen(false)
}
console.log(text)
  return (
    <div className='chat'>
<div className="up">
  <div className="user">
    <img src="./ava.png" className="imgs" />
    <div className="texts">
      <span>sam</span>
      <p>Lorem ipsum efefwe </p>
    </div>
  </div>
  <div className="icons">
    <img src="./phone.png" alt="" />
    <img src="./vedio.png" alt="" />
    <img src="./info.png" alt="" />
  </div>
</div>
<div className="middle">

  <div className="message">
    <img src="./ava.png" alt="" />
    <div className="texts">
<p>Lorem ipsum dolor sit amet 
  consectetur adipisicing elit. Veritatis 
  quam quae harum excepturi iure eos quis! Labore
   quidem beatae at enim quo quod eumquibusdam 
   veniam, sequiratione consequuntur. Quibusdam.</p>
   <span>1 min ago</span>
    </div>
  </div>
  <div className="message own">
    <div className="texts">
<p>Lorem ipsum dolor sit amet 
  consectetur adipisicing elit. Veritatis 
  sdam.</p>
   <span>1 min ago</span>
    </div>
  </div>
  <div className="message">
    <img src="./ava.png" alt="" />
    <div className="texts">
<p>Lorem ipsum dolor sit amet 
  consectetur adipisicing elit. Veritatis 
  quam quae harum excepturi iure eos quis! Labore
   quidem beatae at enim quo quod eumquibusdam 
   veniam, sequiratione consequuntur. Quibusdam.</p>
   <span>1 min ago</span>
    </div>
  </div>
  <div className="message own">
    <div className="texts">
<p>Lorem ipsum dolor sit amet 
  consectetur adipisicing elit. Veritatis 
   consequuntur. Quibusdam.</p>
   <span>1 min ago</span>
    </div>
  </div>
  <div className="message">
    <img src="./ava.png" alt="" />
    <div className="texts">
<p>Lorem ipsum dolor sit amet 
  consectetur adipisicing elit. Veritatis 
  quam quae harum excepturi iure eos quis! Labore
   quidem beatae at enim quo quod eumquibusdam 
   veniam, sequiratione consequuntur. Quibusdam.</p>
   <span>1 min ago</span>
    </div>
  </div>
  <div className="message own">
    <div className="texts">
<p>Lorem ipsum dolor sit amet 
  consectetur adipisicing elit. Veritatis 
  . Quibusdam.</p>
   <span>1 min ago</span>
    </div>
  </div>
  <div className="message">
    <img src="./ava.png" alt="" />
    <div className="texts">
<p>Lorem ipsum dolor sit amet 
  consectetur adipisicing elit. Veritatis 
  quam quae harum excepturi iure eos quis! Labore
   quidem beatae at enim quo quod eumquibusdam 
   veniam, sequiratione consequuntur. Quibusdam.</p>
   <span>1 min ago</span>
    </div>
  </div>
  <div className="message own">
    <div className="texts">
<p>Lorem ipsum dolor sit amet 
  c quo quod eumquibusdam 
   veniam, sequiratione consequuntur. Quibusdam.</p>
   <span>1 min ago</span>
    </div>
  </div>
  <div className="message">
    <img src="./ava.png" alt="" />
    <div className="texts">
<p>Lorem ipsum dolor sit amet 
  consectetur adipisicing elit. Veritatis 
  quam quae harum excepturi iure eos quis! Labore
   quidem beatae at enim quo quod eumquibusdam 
   veniam, sequiratione consequuntur. Quibusdam.</p>
   <span>1 min ago</span>
    </div>
  </div>
  <div className="message own">
    <div className="texts">
<p>Lorem ipsum dolor sit amet 
   eumquibusdam 
   veniam, sequiratione consequuntur. Quibusdam.</p>
   <span>1 min ago</span>
    </div>
  </div>
  <div className="message">
    <img src="./ava.png" alt="" />
    <div className="texts">
<p>Lorem ipsum dolor sit amet 
  consectetur adipisicing elit. Veritatis 
  quam quae harum excepturi iure eos quis! Labore
   quidem beatae at enim quo quod eumquibusdam 
   veniam, sequiratione consequuntur. Quibusdam.</p>
   <span>1 min ago</span>
    </div>
  </div>
  <div className="message own">
    <div className="texts">
      <img src="./piz.png" alt="" />
<p>Lorem ipsum dolor sit amet 
  consectetur adipisicing elit. Veritatis 
   veniam, sequiratione consequuntur. Quibusdam.</p>
   <span>1 min ago</span>
    </div>
  </div>
  <div ref={endref}></div>
</div>

<div className="down">
  <div className="icons">
    <img src="./img.png" alt="" />
    <img src="./camera.png" alt="" />
    <img src="./micro.png" alt="" />
    <div className="emoji">
    <img src="./emoj.png" alt=""  onClick={opens}/>
    <div className="picker">
    <Emoji open={open} onEmojiClick={emojiclick}/>
    </div>
  </div>
  </div>
  <input type="text" placeholder='Type something' className='inputs' value={text} onChange={e=>settext(e.target.value)}/>  
  <button className='sendbutton'>Send</button>
</div>
    </div>
  )
}

export default Chatss