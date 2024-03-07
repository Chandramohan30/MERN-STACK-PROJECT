import fruits1 from "./fruits1.png"
import chease from "./chease.png"
import Carousel from 'react-bootstrap/Carousel';
import { Link } from "react-router-dom";
export default function Card(){
     
    return (
      <>
        <Carousel
          class="my-10"
          data-bs-theme="dark"
          style={{ position: "relative", left: "70px" }}
        >
          <Carousel.Item>
            <Link to="/greatfruitfair">
            <img
              style={{ width: "1500px", height: "600px", borderRadius: "20px" }}
              src={fruits1}
              alt="First slide"
            />
            </Link>
            
          </Carousel.Item>
          <Carousel.Item>
            <img
              style={{ width: "1500px", height: "600px", borderRadius: "20px" }}
              src={chease}
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              style={{ width: "1500px", height: "600px", borderRadius: "20px" }}
              src={fruits1}
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
      </>
    );
}