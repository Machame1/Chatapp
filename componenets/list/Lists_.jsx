import React from 'react'
import "./list.css"
import Userinfo from './useinfo/Userinfo'
import Chatlist from './chatlist/Chatlist'
function Lists_() {
  return (
    <div className='list'>
      <Userinfo/>
      <Chatlist/>
    </div>
  )
}

export default Lists_