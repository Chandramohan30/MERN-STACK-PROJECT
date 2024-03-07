import {Link} from "react-router-dom"
import Header from "../Header";
import Body from "../Body";
import Sidebar from "../Sidebar";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export let flist = [
  {
    pid: "1",
    pimage:"https://www.shutterstock.com/image-photo/black-walnuts-isolated-on-white-600nw-2076093058.jpg",
    pname: "Black Walnut",
    pquant: "500 g",
    pprice: "600",
  },
  {
    pid: "2",
    pimage:"https://5.imimg.com/data5/GC/IV/RS/SELLER-3615067/organic-walnuts.jpg",
    pname: "Organic Walnut",
    pquant: "500 g",
    pprice: "950",
  },
  {
    pid: "3",
    pimage:"https://www.kashmirexotics.com/image/cache/catalog/Shilajit/Dry%20Fruits/organic-walut-kernels-6-500x500.jpg",
    pname: "Kashmiri Walnut Kernels ",
    pquant: "250 g",
    pprice: "230",
  },
  {
    pid: "4",
    pimage:
      "https://manakmewa.com/wp-content/uploads/2021/04/140.jpg",
    pname: "Manak Mewa Dried Walnuts",
    pquant: "1 kg",
    pprice: "610",
  },
  {
    pid: "5",
    pimage:" https://5.imimg.com/data5/XR/YQ/MY-60338884/edible-walnut-500x500.jpg",
    pname: "Dried Walnut",
    pquant: "1 kg",
    pprice: "800",
  },
  {
    pid: "6",
    pimage:
      "https://5.imimg.com/data5/SELLER/Default/2023/11/363253433/CA/RZ/HW/188353667/walnut-2020071512444955-500x500.png",
    pname: "Malone's California Walnut",
    pquant: "1 kg",
    pprice: "610",
  },
  {
    pid: "7",
    pimage:
      "data:image/jpeg;base64,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",
    pname: "Truefarm Organic Walnut",
    pquant: "200 g",
    pprice: "562",
  },
  {
    pid: "8",
    pimage:
      " https://5.imimg.com/data5/SELLER/Default/2023/10/354632283/TH/HF/WG/182136552/dry-whole-walnut-500x500.jpg",
    pname: "Dry Organic Whole Walnut",
    pquant: "1 kg",
    pprice: "400",
  },
  {
    pid: "9",
    pimage:
      "http://5.imimg.com/data5/SELLER/Default/2023/5/308377215/TK/BP/KO/129081929/wallnut-1000x1000.jpeg",
    pname: "Organic Dry Walnut Kernels",
    pquant: "1 kg",
    pprice: "1,150",
  },
];
export default function Walnuts() {
  return (
    <>
      <Header />
      <Body />
      <Sidebar />

      <div
        style={{
          width: "1098px",
          height: "1100px",
          backgroundImage:"url(https://images.unsplash.com/photo-1635843108103-9af0ea224a19?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHdhbG51dHxlbnwwfHwwfHx8MA%3D%3D)",
          position: "relative",
          bottom: "1100px",
          left: "440px",
         
        }}
      >
       
          <Row>
            {flist.map((p) => (
              <Col sm={4}>

               <Link to={`/walnuts/${p.pid}`}  style={{ textDecoration: "none" }}>
               <div
                  class="card "
                  style={{
                    width: "300px",
                    height: "300px",
                    backgroundColor: "white",
                    borderRadius: "8px",
                    border: "none",
                    marginLeft:"30px",
                
                   marginTop:"50px"
                  }}
                >
                  <div class="card-body">
                    <img
                      class="card-img-top"
                      src={p.pimage}
                      style={{ width: "250px", height: "120px",position:"relative",left:"5px",margin:"10px",borderRadius:"10px"}}           ></img>
                    <h5
                      class="card-text"
                      style={{color:"black", fontStyle: "italic", fontSize: "18px" ,marginLeft:"20px"}}
                    >
                      {p.pname}
                    </h5>
                    <h6  style={{color:"black",marginLeft:"20px"}}>{p.pquant}</h6>
                    <h3 style={{color:"black",fontSize:"20px",marginLeft:"20px"}}>&#8377;{p.pprice}</h3>
                  </div>
                </div>
                
                
                
                
               </Link>
              
              </Col>
            ))}
          </Row>
        
      </div>
    </>
  );
}
