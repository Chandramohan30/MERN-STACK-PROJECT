import Header from "../Header";
import Sidebar from "../Sidebar";
import { Row,Col } from "react-bootstrap";
import Body from "../Body";
import { Link } from "react-router-dom";
 export let flist = [
  {
    pid: "1",
    pimage:
      "https://5.imimg.com/data5/SELLER/Default/2023/10/357242619/MV/BC/BG/194129336/cashew-kaju-sw-180-bold-whole-500x500.jpg",
    pname: "WhiteWholes-180",
    pquant: "1 kg",
    pprice: "650",
  },
  {
    pid: "2",
    pimage:
      "https://5.imimg.com/data5/EH/KM/LL/SELLER-62041954/cashew-nuts-lwp-large-white-pieces-500x500-500x500.jpg",
    pname: "Splits White Pieces Cashew Kernels",
    pquant: "1 kg",
    pprice: "300",
  },
  {
    pid: "3",
    pimage: "https://img1.exportersindia.com/product_images/bc-full/dir_168/5017742/baby-bits-cashew-kernals-01-1501649611_p_3186175_599620.jpeg",
    pname: "Baby Bits White Pieces Cashew Kernels",
    pquant: "1 kg",
    pprice: "470",
  },
  {
    pid: "4",
    pimage:"https://m.media-amazon.com/images/I/41rcOMiRUML._AC_UF1000,1000_QL80_.jpg",
    pname: "W 450 White Wholes Cashew Kernels",
    pquant: "1 kg",
    pprice: "580",
  },
  {
    pid: "5",
    pimage:
      "https://5.imimg.com/data5/SELLER/Default/2023/10/349356700/YD/MT/AB/195857744/w500-whole-cashew-nut.jpg",
    pname: "W 500 White Wholes Cashew Kernels",
    pquant: "1 kg",
    pprice: "550",
  },
  {
    pid: "6",
    pimage:
      "https://5.imimg.com/data5/TE/SY/BW/SELLER-62041954/raw-cashew-pieces-10-pound-cases-5-500x500.jpg",
    pname: "SWP White Pieces Cashew Kernels",
    pquant: "1 kg",
    pprice: "500",
  },
  {
    pid: "6",
    pimage:
      "https://5.imimg.com/data5/SELLER/Default/2022/4/JK/TW/YB/150678560/w450-cashew-nut-500x500.jpg",
    pname: "Raw White W 450 Cashew Kernels",
    pquant: "1 g",
    pprice: "550",
  },
  {
    pid: "6",
    pimage:
      "https://5.imimg.com/data5/IQ/FL/OP/SELLER-68610956/premium-quality-ws-cashew-nut-500x500.jpg",
    pname: "White Premium Quality Cashew Nut",
    pquant: "1 g",
    pprice: "820",
  },
  {
    pid: "7",
    pimage:
      "data:image/jpeg;base64,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",
    pname: "Solely Naturalz W180 Cashew Nuts",
    pquant: "1 kg",
    pprice: "459",
  },
];
export default function Cashews() {
  return (
    <>
      <Header />
      <Body />
      <Sidebar />
      <div
        style={{
          width: "1098px",
          height: "1100px",
          backgroundImage:
            "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSe8pOGZh6OQIcVJG2e7gon0nufrahGo7AWzQ&usqp=CAU)",
          position: "relative",
          bottom: "1100px",
          left: "440px",
        }}
      >
        <Row>
          {flist.map((p) => (
            <Col sm={4}>
              <Link to={`/cashews/${p.pid}`}  style={{ textDecoration: "none" }}>

              
              <div
                class="card "
                   style={{
                  width: "300px",
                  height: "300px",
                  backgroundColor: "white",
                  borderRadius: "8px",
                  border: "none",
                  marginLeft: "30px",

                  marginTop: "50px",
                }}
              >
                <div class="card-body">
                  <img
                    class="card-img-top"
                    src={p.pimage}
                    style={{
                      width: "250px",
                      height: "120px",
                      position: "relative",
                      left: "5px",
                      margin: "10px",
                      borderRadius: "10px",
                    }}
                  ></img>
                  <h5
                    class="card-text"
                    style={{
                      color: "black",
                      fontStyle: "italic",
                      fontSize: "18px",
                      marginLeft: "20px",
                    }}
                  >
                    {p.pname}
                  </h5>
                  <h6 style={{ color: "black", marginLeft: "20px" }}>
                    {p.pquant}
                  </h6>
                  <h3
                    style={{
                      color: "black",
                      fontSize: "20px",
                      marginLeft: "20px",
                    }}
                  >
                    &#8377;{p.pprice}
                  </h3>
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
