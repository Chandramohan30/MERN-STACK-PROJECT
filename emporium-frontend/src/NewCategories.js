import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

let categories = [
  {
    image:
      "https://media.istockphoto.com/id/477794666/vector/group-of-realistic-3d-colorful-gifts-with-colorful-ribbons-wrap.jpg?s=612x612&w=0&k=20&c=I0twArG32LIZJVep-9qqyB3PAhPX-RQ4PNTw7gr0_AQ=",
    name: "Gift Store",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2byhG00UKUsKcJLJqMTqbqAiBKABxKT3w9w&usqp=CAU",
    name: "Party Essentials",
  },
  {
    image:
      "https://i.pinimg.com/1200x/df/96/2d/df962d2e0544cfd0f9a18fe8a8cce349.jpg",
    name: "Kitchen Needs",
  },
  {
    image:
      "https://media.istockphoto.com/id/618328002/photo/various-colorful-tomatoes.jpg?s=612x612&w=0&k=20&c=B-wN619gNBSE4YofubnMOei6cefKSctQPz0J7S9k8dI=",
    name: "Organic Foods",
  },
  {
    image:
      "https://media.istockphoto.com/id/527959671/photo/fitness-equipment-objects-isolated-on-white.jpg?s=612x612&w=0&k=20&c=Q6IkKOZ8JarNrBxe_OxrqmOh2P_Ag6Nc71YgfWFZScc=",
    name: "Fitness & Sports",
  },
  {
    image:
      "data:image/jpeg;base64,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",
    name: "MakeUp & Beauty",
  },
];
export default function NewCategories() {
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
        Explore New Categories
      </h3>
      <button
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
      <Container
        style={{
          position: "relative",
          right: "80px",
          bottom: "40px",
          marginTop: "5px",
        }}
      >
        <Row>
          {categories.map((c) => (
            <Col sm={2}>
              <div class="card"
              style={{ border:"1px dotted red",
              borderRadius:"10%"}}>
              <img
                class="card-img-top"
                src={c.image}
                style={{
                  width: "150px",
                  height: "230px",
                  marginTop: "5px",
                  position: "relative",
                  left: "20px",
                 
                }}
              ></img>
              <div
                class="card-text"
                style={{
                  margin: "10px",
                  textAlign: "center",
                  fontFamily: "poppins",
                  fontSize: "20px",
                  fontStyle: "bold",
                }}
              >
                {" "}
                {c.name}{" "}
              </div>

              </div>
              
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}
