import { BrowserRouter, Link } from "react-router-dom";
import nuts from "./nuts.png";
export default function DryNuts() {
  
  return (
    <>
 
        <Link to="/drynuts" style={{textDecoration:"none"}}>
          <div
            className="outline"
            style={{
              position: "relative",
              left: "50px",
              height: "400px",
              width: "1500px",
              backgroundColor: "#96ffaa",
              borderRadius: "10px",
              margin: "20px",
              padding: "20px",
            }}
          >
            <p>
              <h1
                style={{
                  fontSize: "90px",
                  position: "relative",
                  left: "30px",
                  letterSpacing: "5px",
                  fontFamily: "fantasy",
                  color: "black",
                  textShadow: "4px 4px WHITE",
                }}
              >
                {" "}
                DryNutsCorner{" "}
              </h1>
              <hr
                style={{ width: "700px", position: "relative", left: "20px" }}
              ></hr>
              <h6
                style={{
                  letterSpacing: "2px",
                  position: "relative",
                  left: "250px",
                  color: "gray",
                }}
              >
                Almonds,Pista,Walnuts,Cashews..
              </h6>
            </p>
            <button
              style={{
                fontStyle: "bold",
                marginTop: "20px",
                position: "relative",
                left: "30px",
                bottom: "50px",
                padding: "9px",
                borderRadius: "10px",
                color: "black",
                border: "none",
                fontSize: "20px",
              }}
            >
              Explore now
            </button>
            <img
              src={nuts}
              style={{
                width: "600px",
                borderRadius: "20px",
                position: "relative",
                left: "700px",
                bottom: "130px",
              }}
            ></img>
          </div>
        </Link>
   
    </>
  );
}
