import { Link } from "react-router-dom";
import axios from "axios";
import {useState} from "react";
import ListAll from "./ListAll";
export default function ExploreCategories() {
  const[list,setlist]=useState([]);
  axios.get("http://localhost:5000").then((res)=>{
         setlist(res.data);
  })
  return (
    <>
      <h3
        style={{
          position: "relative",
          left: "70px",
          marginTop: "20px",
          marginBottom: "20px",
        }}
      >
        Explore By Categories
      </h3>

      <Link to="/see">
     < button
        style={{
          position: "relative",
          bottom: "40px",
          left: "1400px",
          width: "100px",
          borderRadius: "10px",
          padding: "10px",
          border: "none",
          backgroundColor: "#FFB6C1",
        }}
      >
        See All
      </button>
      </Link>
 <ListAll category={list}/>
    </>
  );
}
