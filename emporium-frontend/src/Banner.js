
export default function Banner() {
  return (
    <>
      <div
        style={{
          position: "relative",
          left: "50px",
          right: "20px",
          height: "400px",
          width: "1500px",
          backgroundColor: "#673400",
          borderRadius: "15px",
        }}
      >
        <img
          style={{
            borderRadius: "15px",
            top: "58px",
            position: "relative",
            width: "500px",
            height: "300px",
            left: "900px",
          }}
          src="https://s3.envato.com/files/357631200/DSC_5964.JPG"
        ></img>

        <h2
          style={{
            color: "#DE970B",
            fontFamily: "monospace",
            position: "relative",
            left: "100px",
          }}
        >
          Valid on Orders over &#8377; 599{" "}
        </h2>
        <h1
          style={{
            marginLeft: "27px",
            color: "white",
            fontFamily: "cursive",
            fontStyle: "bold",
            letterSpacing: "5px",
            padding: "10px",
            position: "relative",
            bottom: "250px",
          }}
        >
          Get 2 Pc Chicken
          <span>
            <br></br>
          </span>{" "}
          Drumsticks at &#8377;{" "}
        </h1>
      </div>
    </>
  );
}
