import axios from "axios";
import { useState } from "react";
import ListAll from "../ListAll";
export default function(){
    const[list,setlist]=useState([]);
 axios.get("http://localhost:5000/drynuts").then((res)=>{
          setlist(res.data);
 })
 return (
    <>
    <ListAll category={list}/>
    
    
    </>
 )



}