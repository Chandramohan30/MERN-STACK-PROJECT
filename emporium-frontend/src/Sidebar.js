import { Link } from "react-router-dom";
export default function Sidebar() {
  return (
    <>
      <div
        style={{      

          position: "relative",
          left: "100px",
          width: "300px",
          height: "1100px",
          backgroundColor: "white",
          borderRadius: "10px",

        }}
      >
        <div style={{ margin: "10px" }}>
          <h2
            style={{
              margin: "20px",
              textAlign: "center",
              padding: "20px",
              color: "black",
            }}
          >
            Categories
          </h2>

          {/* Item1 */}
          <Link to="/almonds" style={{ textDecoration: "none" }}>
            <div className="Almonds">
              <img
                style={{
                  borderRadius: "20px",
                  marginLeft: "20px",
                  width: "200px",
                  height: "150px",
                }}
                src="https://static4.depositphotos.com/1020804/364/i/450/depositphotos_3649833-stock-photo-almonds.jpg"
              ></img> 
              <h3
                style={{
                  marginLeft: "60px",
                  fontStyle: "monospace",
                  color: "black",
                }}
              >
                Almonds
              </h3>
            </div>
          </Link>

          {/* Item2 */}
          <Link to="/cashews" style={{ textDecoration: "none" }}>
            <div>
              <img
                style={{
                  borderRadius: "20px",
                  marginLeft: "20px",
                  width: "200px",
                }}
                src="https://static.vecteezy.com/system/resources/previews/004/158/798/large_2x/cashews-in-the-scoop-on-white-background-photo.jpg"
              ></img>
              <h3
                style={{
                  marginLeft: "60px",
                  fontStyle: "monospace",
                  color: "black",
                }}
              >
                Cashews
              </h3>
            </div>
          </Link>

          {/* Item3 */}
          <Link to="/walnuts" style={{ textDecoration: "none" }}>
            <div>
              <img
                style={{
                  borderRadius: "20px",
                  marginLeft: "20px",
                  width: "200px",
                }}
                src="https://media.istockphoto.com/id/639478614/photo/walnut-isolated-on-white-background-with-clipping-path.jpg?s=612x612&w=0&k=20&c=bT5XpqZskiPL5PAgUrUqTAO5tQtS_SMSzv6fJ2aOjPo="
              ></img>
              <h3
                style={{
                  marginLeft: "60px",
                  fontStyle: "monospace",
                  color: "black",
                }}
              >
                Walnuts
              </h3>
            </div>
          </Link>

          <Link to="/pista" style={{textDecoration:"none"}}>
            <div>
              <img
                style={{
                  borderRadius: "20px",
                  marginLeft: "20px",
                  width: "200px",
                }}
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlo5JinuIJ0nRA0cIEpgIgg1UVvx2U9RXxqA&usqp=CAU"
              ></img>
              <h3
                style={{
                  marginLeft: "70px",
                  fontStyle: "monospace",
                  color: "black",
                }}
              >
                Pista
              </h3>
            </div>
          </Link>

          {/* Item4 */}

          <Link  to="/dates"style={{textDecoration:"none"}}>
          <div>
            <img
              style={{
                borderRadius: "20px",
                marginLeft: "20px",
                width: "200px",
              }}
              src="https://i.pinimg.com/474x/a1/49/ce/a149cef6ad248e22b7fcf46f4c48b8db.jpg"
            ></img>
            <h3
              style={{
                marginLeft: "70px",
                fontStyle: "monospace",
                color: "black",
              }}
            >
              Dates
            </h3>
          </div>
          
          
          
          </Link>

          {/* Item 5 */}
         
        </div>
      </div>
    </>
  );
}
