import { useParams } from "react-router-dom";
import Header from "../Header";
import Body from "../Body";
import { Link } from "react-router-dom";

import { flist } from "./Cashews.js";
export default function ProductCashewsDetails() {
    
    let q; let n; let r; const {id} = useParams();
 return (
      <>
        <Header />
        <Body />

        <div
          style={{
            backgroundImage: "url(https://wallpapercave.com/wp/wp4271326.jpg)",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div
            className="productimage"
            style={{
              borderRadius: "10px",
              backgroundColor: "silver",
              padding: "50px",
              border: "1px solid grey",
              width: "700px",
              height: "500px",
              position: "relative",
              left: "200px",
              top: "30px",
            }}
          >
            {flist.map((p) => {
              if (id == p.pid) {
                n = p.pname;
                q = p.pquant;
                r = p.pprice;
                return (
                  <>
                    <img
                      style={{
                        width: "400px",
                        position: "relative",
                        left: "100px",
                        borderRadius: "50%",
                      }}
                      src={p.pimage}
                    />
                  </>
                );
              }
            })}
          </div>

          <div
            className="details"
            style={{
              height: "500px",
              backgroundColor: "#ffcc99",
              borderRadius: "20px",
              padding: "30px",
              width: "600px",
              position: "relative",
              left: "947px",
              bottom: "470px",
            }}
          >
            <Link to="/" style={{ textDecoration: "none" }}>
              Home
            </Link>{" "}
            <br></br>
            <h1>{n}</h1>
            <h2>{q}</h2>
            <br></br>
            <h3>&#8377; {r}</h3>
            <br></br>
            <button
              type="button"
              class="btn btn-primary btn-lg btn-lg btn-block"
              style={{
                position: "relative",
                top: "150px",
                width: "500px",
                backgroundColor: "#fc6c85 ",
                border: "none",
              }}
            >
              Add
            </button>
          </div>
        </div>
      </>
      ); 
}
