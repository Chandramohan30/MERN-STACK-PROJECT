import Header from "./Header";
import Body from "./Body";
import "./Login.css";
export default function Login() {
  return (
    <>
      <Header />
      <Body />
      <div style={{ height:"800px",width:"100%",backgroundColor:""}}>
        <form>
          <div
            style={{
              backgroundColor: "rgba(255,255,255,0.09)",
              width: "800px",
              borderRadius: "15px",
              padding: "20px",
              height: "550px",
              position:"relative",
              left:"450px",
              top:"60px"
            }}
          >
            <div
              style={{
                backgroundColor: "#FAE6FA",
                width: "300px",
                height: "489px",
                position: "relative",
                left: "450px",
                borderRadius: "20px",
              }}
            >
              <img
                style={{
                  width: "200px",
                  height: "300px",
                  position: "relative",
                  left: "58px",
                  borderRadius: "50%",
                  top: "20px",
                  marginBottom: "10px",
                }}
                src="https://i.pinimg.com/originals/52/66/34/52663497d1ea99915498516ac86c4945.png"
              ></img>
              <h2>
                <span style={{ marginLeft: "50px", marginTop: "50px" }}>
                  Order faster{" "}
                </span>
                <br></br> & easier everytime
              </h2>
            </div>
            <h1
              style={{
                color: "white",
                position: "relative",
                bottom: "500px",
                color: "orange",
                left:"200px",
                
              }}
            >
            Login 
            </h1>
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
                fontSize: "20px",
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
                fontSize: "20px",
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
            Login
            </button>{" "}
          </div>
        </form>
      </div>
    </>
  );
}
