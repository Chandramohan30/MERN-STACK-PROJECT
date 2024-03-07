import Header from "./Header";
import Body from "./Body";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";

export default function ListAll(props) {
  return (
    <>
    
   

      <div style={{width:"1988px",height:"2000px",backgroundImage:"url()"}}>
        <h3 style={{position:"relative",left:"700px"}} >Categories</h3>
      <Container
        style={{
          position: "relative",
          right: "80px",
          bottom: "40px",
          marginTop: "5px",
          top:"200px"



        }}
      >
        <Row>
          {props.category.map((c) => (
            <Col sm={2}>
                <Link to={`/${c.name}` } style={{textDecoration:"none"}}>


                <div
                class="card"
                style={{
                  marginBottom: "24px",
                  marginLeft: "10px",
                  width: "200px",
                  padding: "5px",
                  borderRadius: "20px",
                  border:"none"
                }}
              >
                <div class="Card-body">
                  <img
                    class="card-img-top"
                    src={c.src}
                    style={{
                      width: "150px",
                      height: "230px",
                      marginTop: "5px",
                    }}
                  ></img>
                  <div
                    class="card-text"
                    style={{
                      textAlign: "center",
                      fontFamily: "poppins",
                      fontSize: "20px",
                      fontStyle: "bold",
                    }}
                  >
                    {c.name}
                  </div>
                </div>
              </div>
                </Link>
             
            </Col>
          ))}
        </Row>
      </Container>
     



      </div>
     

    








   
         





     

   


      
    </>
  );
}
