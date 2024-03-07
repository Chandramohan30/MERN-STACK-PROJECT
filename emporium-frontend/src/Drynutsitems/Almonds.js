
import Header from "../Header";
import Body from "../Body";
import Sidebar from "../Sidebar";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
 export let flist = [
  {
    pid: "1",
    pimage:"https://thumbs.dreamstime.com/b/california-almonds-white-background-macro-shot-handful-isolated-healthy-foods-concept-keto-diet-235595225.jpg",
    pname: "Califorina Almonds",
    pquant: "100 g",
    pprice: "206",
  },
  {
    pid: "2",
    pimage:"https://shop.tulsidas.com/cdn/shop/files/IMG-3302.png?v=1695030959",
    pname: "Mamra Almonds",
    pquant: "100 g",
    pprice: "350",
  },
  {
    pid: "3",
    pimage:"https://4.imimg.com/data4/PX/CW/MY-32363079/sonora-almond.jpg",
    pname: "Sonora  Almonds",
    pquant: "1 kg",
    pprice: "66",
  },
  {
    pid: "4",
    pimage:
      "https://5.imimg.com/data5/ML/SW/MY-10457880/almond-gurbandi.jpg",
    pname: "Gurbandi Almonds",
    pquant: "100 g",
    pprice: "199",
  },
  {
    pid: "5",
    pimage:" https://5.imimg.com/data5/SELLER/Default/2023/2/BC/GL/BW/181903510/shalimar-almond-nut-500x500.jpg",
    pname: "Shalimar Almonds",
    pquant: "1 kg",
    pprice: "620",
  },
  {
    pid: "6",
    pimage:
      "https://5.imimg.com/data5/SELLER/Default/2023/6/312742808/RR/SD/NU/124490442/irani-mamra-almond-500x500.jpg",
    pname: "Irani Mamra Almonds",
    pquant: "100 g",
    pprice: "300",
  },
  {
    pid: "7",
    pimage:
      "https://cdn.zeptonow.com/production///tr:w-450,ar-1000-1000,pr-true,f-webp,q-80/inventory/product/ffa11209-9d10-4dcb-80a6-2c9b587415a9-image_file.jpeg",
    pname: "Chilli Green",
    pquant: "100 g",
    pprice: "8",
  },
  {
    pid: "8",
    pimage:
      "https://cdn.zeptonow.com/production///tr:w-450,ar-1000-1000,pr-true,f-webp,q-80/inventory/product/ffa11209-9d10-4dcb-80a6-2c9b587415a9-image_file.jpeg",
    pname: "Chilli Green",
    pquant: "100 g",
    pprice: "8",
  },
  {
    pid: "9",
    pimage:
      "https://cdn.zeptonow.com/production///tr:w-450,ar-1000-1000,pr-true,f-webp,q-80/inventory/product/ffa11209-9d10-4dcb-80a6-2c9b587415a9-image_file.jpeg",
    pname: "Chilli Green",
    pquant: "100 g",
    pprice: "8",
  },
];
export default function Almonds() {
  return (
    <>
      <Header />
      <Body />
      <Sidebar />

      <div
        style={{
          width: "1098px",
          height: "1100px",
          backgroundImage:"url(data:image/jpeg;base64,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)",
          position: "relative",
          bottom: "1100px",
          left: "440px",
         
        }}
      >
       
          <Row>
            {flist.map((p) => (
              <Col sm={4}>

               <Link to={`/almonds/${p.pid}`} style={{textDecoration:"none"}}>
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
                  <div class="card-body"  style={{borderRadius:"30px"}}>
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
