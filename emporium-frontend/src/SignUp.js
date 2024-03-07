import Header from "./Header";
import Body from "./Body";
import "./Login.css";
import {Link} from "react-router-dom";
export default function SignUp() {
  return (
    <>
      <Header />
      <Body />
      <div style={{ height:"800px",width:"100%"}}>
        <form>
          <div
            style={{
              backgroundColor: "rgba(255,255,255,0.09)",
              width: "800px",
              borderRadius: "15px",
              padding: "20px",
              height: "550px",
              position:"relative",
              left:"560px",
              top:"500px",
              boxshadow:"0 8px 32px 0 rgba(31,38,135,.37)",
              borderleft:"1px solid rgba(255,255,255,.3"
            }}
          >
          
            <h1
              style={{
                color: "white",
                position: "relative",
                bottom: "500px",
                color: "orange",
                left:"140px",
                fontsize:"20px"
              }}
            >
            Sign Up
            </h1>
            <div style={{position:"relative",top:"-100px"}} >
            <h3
              style={{
                color: "white",
                position: "relative",
                bottom: "400px",
                color: "orange",
              }}
            >
            First Name
            </h3>
            <input
             
              style={{
                padding: "10px",
                borderRadius: "50px",
                position: "relative",
                bottom: "400px",
                width: "400px",
                fontSize: "15px",
              }}
              type="text"
            ></input>
            <h3
              style={{
                color: "white",
                position: "relative",
                bottom: "400px",
                color: "orange",
              }}
            >
              Last Name
            </h3>
            <input
             
              style={{
                padding: "10px",
                borderRadius: "50px",
                position: "relative",
                bottom: "400px",
                width: "400px",
                fontSize: "15px",
              }}
              type="text"
            ></input>
            <h3
              style={{
                color: "white",
                position: "relative",
                bottom: "400px",
                color: "orange",
              }}
            >
              Email
            </h3>
            <input
             
              style={{
                padding: "10px",
                borderRadius: "50px",
                position: "relative",
                bottom: "400px",
                width: "400px",
                fontSize: "15px",
              }}
              type="text"
            ></input>
            <h3
              style={{
                color: "white",
                position: "relative",
                bottom: "400px",
                color: "orange",
              }}
            >
              Password
            </h3>
            <input
             
              style={{
                padding: "10px",
                borderRadius: "50px",
                position: "relative",
                bottom: "400px",
                width: "400px",
                fontSize: "15px",
              }}
              type="text"
            ></input>
           <h3
              style={{
                color: "white",
                position: "relative",
                bottom: "400px",
                color: "orange",
              }}
            >
              Confirm Password
            </h3>
            <input
             
              style={{
                padding: "10px",
                borderRadius: "50px",
                position: "relative",
                bottom: "400px",
                width: "400px",
                fontSize: "15px",
              }}
              type="text"
            ></input>
            <button
              style={{
                border: "none",
                position: "relative",
                bottom: "370px",
                right: "7px",
                width: "400px",
                borderRadius: "50px",
                fontSize: "20px",
                padding: "10px",
                color: "white",
                backgroundColor: "#FF7415",
              }}
            >
            Sign Up
            </button>{" "}
            <div style={{position:"relative",top:"-350px",left:"50px"}}><h5 style={{position:"realtive",top:"-800px"}}>Already have an account ?<span><Link to="/login">Login here</Link></span> </h5></div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}