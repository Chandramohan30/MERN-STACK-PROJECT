import React from "react";
import chandra from "./chandra.png";
import "./Header.css";
import { Link } from "react-router-dom";
export default function Header() {
  return (
    <>
      <div 
        style={{
          backgroundColor: "#701198",
          color: "whitesmoke",
          width: "100%",
          height: "78px",
        }}
      >
        <h1
          style={{
            color: "white",
            fontFamily: "cursive",
            padding: "20px",
            textAlign: "left",
            position: "relative",
            left: "90px",
          }}
        >
          CM EMPORIUM
        </h1>
        <img
          src={chandra}
          alt="not found"
          style={{
            width: "100px",
            borderRadius: "10px",
            position: "relative",
            bottom: "89px",
          }}
        ></img>

        <div
          class="form-outline w-50"
          style={{ position: "relative", bottom: "150px" }}
        >
          <input
            style={{ position: "relative", left: "450px", marginTop: "10px" }}
            max-width="50%"
            type="search"
            class="form-control rounded"
            placeholder="Search"
            aria-label="Search"
            aria-describedby="search-addon"
          />

          <button
            style={{
              padding: "10px",
              position: "relative",
              left: "1300px",
              bottom: "40px",
              color: "white",
              border: "none",
              backgroundColor: "#701198",
            }}
            type="button"
            class="btn btn-outline-primary"
            data-mdb-ripple-init
          >
            Search
          </button>

         
         
         <Link to="/SignUp">
         <button 
            style={{
              padding: "10px",
              color: "white",
              position: "relative",
              left: "1300px",
              bottom: "40px",
              border: "none",
              backgroundColor: "#701198",
            }}
          >
            SignUp

          </button >
         </Link> 






          <button
            style={{
              padding: "10px",
              color: "white",
              position: "relative",
              left: "1300px",
              bottom: "40px",
              border: "none",
              backgroundColor: "#701198",
            }}
          >
            {" "}
            My Cart
          </button>
        </div>
      </div>
    </>
  );
}
