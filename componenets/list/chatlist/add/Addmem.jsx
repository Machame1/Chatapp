import React from 'react';
import "./Addmem.css";
function Addmem() {
  return (
    <div className='addu'>
        <form>
            
        <input type="text" placeholder='Username' name="username"/>
        <button>Search</button>
        </form>
<div className="us">
    <div className="det">
        <img src="./ava.png " alt="" />
    <span>Syam</span>
    </div>
    <button>Add user</button>
</div>
    </div>
  )
}

export default Addmem