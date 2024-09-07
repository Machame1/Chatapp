import { useState } from "react";
import "./login.css";
import { toast } from "react-toastify";

function Ogin() {
  const [ava, setAva] = useState({ file: null, url: "" });

  const handleFileChange = (e) => {
    if (e.target.files[0]) {
      setAva({
        file: e.target.files[0],
        url: URL.createObjectURL(e.target.files[0]),
      });
    }
  };
const halo = e =>{
  e.preventDefault()
toast.warn("syam")
}
  return (
    <div className="login">
      <div className="ite">
        <h2>Welcome Back</h2>
        <form action="" onSubmit={halo}>
          <input type="text" placeholder="Email" name="email" />
          <input type="password" placeholder="Password" name="password" />
          <button>Sign In</button>
        </form>
      </div>

      <div className="s"></div>

      <div className="ite">
        <h2>Create Account</h2>
        <form action="">
          <label htmlFor="file">
            <img src={ava.url || "./ava.png"} alt="avatar" />
            Upload Image
          </label>
          <input
            type="file"
            id="file"
            style={{ display: "none" }}
            onChange={handleFileChange}
          />
         <input type="text" placeholder="Username" name="username" />
          <input type="text" placeholder="Email" name="email" />  
          <input type="password" placeholder="Password" name="password" />
          <button>Sign Up</button>
        </form>
      </div>
    </div>
  );
}

export default Ogin;
