import React, { useState } from 'react'
import "./chatlist.css"
import Addmem from './add/Addmem'
function Chatlist() {
   const[add,setadd]=useState(false)
   const setup=()=>{
    setadd((add)=>!add)
   }
  return (
    <div className='chatlist'>
        <div className="search">
            <div className="search_box">
                <img src="./search.png" alt="" />
                <input type="text" placeholder='search'/>
            </div>
            <img src={add?"./min.png":"./plus.png"} alt=""  className='plus' onClick={setup}/>
        </div>
        <div className="item">
          <img src="./ava.png" alt=""/>
          <div className="texts">
<span>
  sampath
</span>
<p>hello</p>
          </div>
        </div>
        <div className="item">
          <img src="./ava.png" alt="" />
          <div className="texts">
<span>
  sampath
</span>
<p>hello</p>
          </div>
        </div>
        <div className="item">
          <img src="./ava.png" alt="" />
          <div className="texts">
<span>
  sampath
</span>
<p>hello</p>
        </div>
        </div>
        <div className="item">
          <img src="./ava.png" alt=""/>
          <div className="texts">
<span>
  sampath
</span>
<p>hello</p>
          </div>
        </div>
        <div className="item">
          <img src="./ava.png" alt="" />
          <div className="texts">
<span>
  sampath
</span>
<p>hello</p>
          </div>
        </div>
        <div className="item">
          <img src="./ava.png" alt="" />
          <div className="texts">
<span>
  sampath
</span>
<p>hello</p>
          </div>
        </div>
        <div className="item">
          <img src="./ava.png" alt="" />
          <div className="texts">
<span>
  sampath
</span>
<p>hello</p>
          </div>
        </div>
        {add && <Addmem/>}
    </div>
  )
}

export default Chatlist