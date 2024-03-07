import { Container, Row, Col } from "react-bootstrap";
let brands = [
  {
    name: "Cheesy delights for the win",
    offer: "BEST DEALS",
    image:"https://assets.wakefern.com/is/image/wakefern/2100007714-001?$Mi9Product_detail$",
  },
  {
    name: "Satisfy cravings,choose Goeld",
    offer: "UPTO 50% OFF",
    image:"https://www.siue.edu/news/2021/08/img/SBDC-SweetCravings-web.jpg"
  },
  {
    name: "Delicious delights",
    offer: "UPTO 35% OFF",
    image:"https://www.jiomart.com/images/product/original/rvn0khofqw/delight-nuts-cashew-roasted-and-salted-1000-gm-pack-of-5-product-images-orvn0khofqw-p593794434-0-202209160022.jpg?im=Resize=(420,420)"
 },
  {
    name: "Eat healthy with Zoff",
    offer: "UPTO 30% OFF",
    image:"https://rukminim1.flixcart.com/image/300/400/xif0q/spice-masala/w/3/e/-original-imagmt2p8b4nzm49.jpeg?q=90"
  },
  {
    name: "The Coffee that India loves ",
    offer: "UPTO 10% OFF",
    image:"https://m.media-amazon.com/images/I/41bSTozhltL._AC_UF1000,1000_QL80_.jpg"
  },
  {
    name: "Exotic range of premium products ",
    offer: "UPTO 50% OFF",
    image:"https://5.imimg.com/data5/SELLER/Default/2023/6/316483671/YC/DH/OF/182855032/hide-seek-milano.jpg"
  },
];

export default function Brands() {
  return (
    <>
      <Container
        style={{
          position: "relative",
          right: "80px",
          bottom: "40px",
          marginTop: "80px",
        }}
      ><h3  style={{margin:"20px"}}>Brands In Focus
        </h3>
        <Row>
          {brands.map((c) => (
            <Col sm={2}>
              <div
                class="card shadow"
                style={{
                  marginBottom: "24px",
                  marginLeft: "10px",
                  width: "200px",
                  padding: "5px",
                  borderRadius: "20px",
                  padding: "20px",
                  height: "300px",
                  backgroundColor: "#52a447",
                }}
              >
                <div class="Card-body">
                  <div
                    class="card-text"
                    style={{
                      textAlign: "center",
                      fontFamily: "poppins",
                      fontSize: "20px",
                      fontStyle: "bold",
                      color: "White",
                    }}
                  >
                    {" "}
                    <img
                      style={{
                        width: "150px",
                        height: "150px",
                        borderRadius:"20px"
                      
                      }}
                      src={c.image}
                    ></img>
                    {c.name}
                    <br></br>
                
                    {c.offer} 
                    
                  </div>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}
