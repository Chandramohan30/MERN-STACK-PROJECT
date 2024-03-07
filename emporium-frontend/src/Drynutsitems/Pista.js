
import Header from "../Header";
import Body from "../Body";
import Sidebar from "../Sidebar";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {Link} from "react-router-dom";
export let flist = [
  {
    pid: "1",
    pimage:"https://ratinkhosh.com/wp-content/uploads/2021/11/Akbari-one.webp",
    pname: "Super Long Pistachio",
    pquant: "1 kg",
    pprice: "800",
  },
  {
    pid: "2",
    pimage:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYEWXFDgSj4SsJ8juNFU9DrCB-d_0k8NWdn8evPBtMlQ&s",
    pname: "Round Pistachios",
    pquant: "1 kg",
    pprice: "620",
  },
  {
    pid: "3",
    pimage:"https://tootsi.com/Images/ProductImg/10317P.jpg",
    pname: "Green Peeled Pistachio Kernel",
    pquant: "5 kg",
    pprice: "1000",
  },
  {
    pid: "4",
    pimage:
      "https://www.abk.co.in/images/thumbs/0001721_unsalted-green-pistachios-250-gm_510.jpeg",
    pname: "Roasted Shelled Pistachio",
    pquant: "1 kg",
    pprice: "985",
  },
  {
    pid: "5",
    pimage:"https://5.imimg.com/data5/SELLER/Default/2022/9/EI/WU/MY/48023543/1-500x500.jpg ",
    pname: "Pista Simple (Simple Pistachios)",
    pquant: "1 kg",
    pprice: "1,720",
  },
  {
    pid: "6",
    pimage:
      "https://5.imimg.com/data5/ECOM/Default/2023/10/355452428/CQ/IV/LH/143314082/99a9cc7e-e115-48b2-8761-fb6b42f1f98b-500x500.jpg",
    pname: "Californian Roasted & Salted Pistachios (pista)",
    pquant: "1 kg",
    pprice: "275",
  },
  {
    pid: "7",
    pimage:
      "https://5.imimg.com/data5/TM/MJ/MY-1423978/pasta-pishori-500x500.jpg",
    pname: "Pista Pishori",
    pquant: "1 kg",
    pprice: "2000",
  },
  {
    pid: "8",
    pimage:
      " https://5.imimg.com/data5/SELLER/Default/2023/7/326186542/UN/DN/RI/191619286/whatsapp-image-2023-07-15-at-15-35-04-500x500.jpeg",
    pname: " Iranian Pistachio",
    pquant: "200 g",
    pprice: "445",
  },
  {
    pid: "9",
    pimage:
      " https://5.imimg.com/data5/SELLER/Default/2022/7/DN/NQ/HL/105132062/afghani-unsalted-pista-500x500.jpg",
    pname: "Afghani Unsalted Pista",
    pquant: "1 kg",
    pprice: "880",
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
          backgroundImage:"url(https://5.imimg.com/data5/SELLER/Default/2023/11/358481929/YL/HB/PH/150604278/pistachio-pista-dry-fruits-500x500.png)",
          position: "relative",
          bottom: "1100px",
          left: "440px",
         
        }}
      >
       
          <Row>
            {flist.map((p) => (
              <Col sm={4}>

               <Link to={`/pista/${p.pid}`} style={{ textDecoration: "none" }}>
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
