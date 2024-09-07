import React from 'react'
import "./details.css"
function Details() {
  return (
    <div className='detail'>
      <div className="users">
<img src="./ava.png" alt=""/>
<h2>syam</h2>
<p> vbjebgwe bjbhe bvfsjh</p>
      </div>
      <div className="info">
  <div className="title">
    <span>info</span>
  <img src="./down.png" alt="" />
  </div>

  <div className="title">
    <span>chat settings</span>
  <img src="./down.png" alt="" />
  </div>
  <div className="title">
    <span>privacy &security</span>
  <img src="./down.png" alt="" />
</div>
  <div className="title">
    <span>shared pics</span>
  <img src="./up.png" alt="" />
  </div>
  <div className="pics">
  <div className="picitem">
      <div className="picdetails">
      <img src="./dhoni.png" alt="" />
      <span>pic.png</span>
      </div>
    <img src="./download.png" alt="" className='icons'/>
  </div>
  <div className="picitem">
      <div className="picdetails">
      <img src="./dhoni.png" alt="" />
      <span>pic.png</span>
      </div>
    <img src="./download.png" alt="" className='icons'/>
  </div>
  
</div>
  <div className="title">
    <span>shared files</span>
  <img src="./down.png" alt="" />
  </div>
<button className='button'>BLOCK</button>
<button className='butto'>LOGOUT</button>

      </div>
    </div>
  )
}

export default Details