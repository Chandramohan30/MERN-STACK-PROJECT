
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import "./Favorite.css";

let flist=[
    {
        pid:"1",
    pimage:"https://cdn.zeptonow.com/production///tr:w-450,ar-4733-3447,pr-true,f-webp,q-80/inventory/product/84da30f9-0dc2-4c1a-9b25-7df2f077254d-coriander_leaves.jpg",
    pname:"Coriander Leaves",
    pquant:"100 g",
    pprice:"8"
    },
    {
    pid:"2",
    pimage:"https://cdn.zeptonow.com/production///tr:w-450,ar-1000-1000,pr-true,f-webp,q-80/inventory/product/25eb526c-9c26-48cd-95a3-8e4058910f8a-1qr-g2BjKO0dwcUclzzYCwcyevavAX1FA.jpeg",
    pname:"Nandini Fresh Toned Fresh Milk (Pouch)",
    pquant:"500 ml",
    pprice:"22"
    },
    {
        pid:"3",
        pimage:"https://cdn.zeptonow.com/production///tr:w-450,ar-6783-3278,pr-true,f-webp,q-80/inventory/product/1d5dfa68-981a-479e-ba57-4b51eda333eb-shutterstock_769886404.jpg",
        pname:"Onion",
        pquant:"1 kg",
        pprice:"66"
        },
      {
        pid:"4",
        pimage:"https://cdn.zeptonow.com/production///tr:w-450,ar-651-657,pr-true,f-webp,q-80/inventory/product/f05fb698-1b4a-4c68-a16a-1dbc018ccb0c-1vMzYn5qqO8eRf-SlRU6KSp11rFFt7ReY.jpeg",
        pname:"Nandini Thick Curd Pouch",
        pquant:"500 ml",
        pprice:"26"
        },
        {
            pid:"5",
            pimage:"https://cdn.zeptonow.com/production///tr:w-450,ar-808-832,pr-true,f-webp,q-80/inventory/product/ca3b745b-c324-4940-8e3a-81d2894d5786-19kfCHHLVMER0KB7trGzMtTiQ4MOXhToO.jpeg",
            pname:"Sunpure Refined Sunflower Oil (Pouch)",
            pquant:"1 l",
            pprice:"111"
         },
         {
                pid:"6",
                pimage:"https://cdn.zeptonow.com/production///tr:w-450,ar-1000-1000,pr-true,f-webp,q-80/inventory/product/ffa11209-9d10-4dcb-80a6-2c9b587415a9-image_file.jpeg",
                pname:"Chilli Green",
                pquant:"100 g",
                pprice:"8"
          },


];

function  Favorite(){
    return (
        <>


<h3 style={{position:"relative",left:"69px",marginTop:"10px"}}>Your Favorite Picks</h3>
        <div style={{width:"1500px",position: "relative",
              left: "70px",
              height: "400px",
              marginBottom:"10px"}}>
  
            <Container style={{position:"relative",right:"80px",bottom:"40px"}}>
           
                    <Row>
                  
            {flist.map((p)=> (
                <Col sm={2.0}>   
                 <div  class="card shadow red  my-5" style={{width:"200px",height:"310px",backgroundColor:"white",borderRadius:"10%",border:"2px solidv red"}}>
                    <div class="card-body">
                    <img class="card-img-top"src={p.pimage} style={{marginLeft:"40px",width:"100px",height:"150px",borderRadius:"20%"}} ></img>
                   <div style={{position:"relative",left:"20px"}}>
                   <h5 class="card-text" >{p.pname}</h5>
                    <h6>{p.pquant}</h6>
                    <h3>&#8377;{p.pprice}</h3>
                

                   </div>
                  
                    </div>
                    </div>
                  
                </Col>
            ))}
             </Row>
             </Container>

        </div>
   
             
        </>
       
    )
}


export default Favorite;






