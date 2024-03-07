import Header from "../Header";
import Body from "../Body";
import Sidebar from "../Sidebar";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

let flist = [
  {
    pid: "1",
    pimage:"https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/515OiqseM1S.jpg",
    pname: "Flyberry Gourmet Halawi Dates",
    pquant: "500 g",
    pprice: "349",
  },
  {
    pid: "2",
    pimage:"https://www.nutnutties.com/wp-content/uploads/2021/09/Medjool-Dates-Premium.png",
    pname: "Medjool Dates",
    pquant: "5 kg",
    pprice: "1,100",
  },
  {
    pid: "3",
    pimage:"https://cdn.anscommerce.com/image/tr:e-sharpen-01,h-822,w-940,cm-pad_resize/data/wonderland/24-Jan-2023/Mazafati-Dates-400g-1.jpg",
    pname: "Mazafati Dates",
    pquant: "400 g",
    pprice: "225",
  },
  {
    pid: "4",
    pimage:
      "data:image/jpeg;base64,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",
    pname: "Barhi Dates",
    pquant: "500 g",
    pprice: "349",
  },
  {
    pid: "5",
    pimage:"https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/71THcscyTVL._AC_UF1000,1000_QL80_.jpg",
    pname: "Plum Dates",
    pquant: "250 g",
    pprice: "380",
  },
  {
    pid: "6",
    pimage:
      "data:image/jpeg;base64,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",
    pname: "Safawi Dates",
    pquant: "250 g",
    pprice: "340",
  },
  {
    pid: "7",
    pimage:
      "https://www.tasteatlas.com/images/ingredients/20e657eb283c4c1ba77f943d92c4af32.jpg",
    pname: "Sagai Dates",
    pquant: "500 g",
    pprice: "",
  },
  {
    pid: "8",
    pimage:
      "https://5.imimg.com/data5/YQ/QT/SV/SELLER-31778532/honey-dates.jpg",
    pname: "Honey Dates",
    pquant: "500 g",
    pprice: "120",
  },
  {
    pid: "9",
    pimage:
      "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEBUTEhMVExMWGBIYFRUVFxAYGBUVGBMWFhkXFhgYHSghGBslHRcYITEjJSktLi4uGiAzODMvNygtLisBCgoKDg0OGxAQGy0lICUtLS4yMC0yLS0tLTAvLS0tLS4uLS0tLS0tKy0vLS0tLSstLS8tLS0wLS0tLS0tLS01Lf/AABEIAOEA4QMBIgACEQEDEQH/xAAcAAEAAgMBAQEAAAAAAAAAAAAABQYDBAcCAQj/xAA8EAACAQIDBQYEAwYGAwAAAAAAAQIDEQQhMQUSQVFhBhMicZGhMkKBsQfB0RQVI1Ji8BYzcoLh8UOSsv/EABoBAQADAQEBAAAAAAAAAAAAAAACAwQBBQb/xAAqEQEAAgICAQIEBgMAAAAAAAAAAQIDEQQhEhMxBTJBURQigbHB8EJhof/aAAwDAQACEQMRAD8A7iAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUjtp25WHbo4e063zS1jT6JfNL2XXQ5NoiNynjx2yTqq44nFQpq9ScYLnJpL3POEx1Krfu6kJ213ZRdvO2hwl7Vq1KneVZyqS47zb9OXkSrqtbtai3F3veLzT5XM88jX0enHwu2o3Pcu0gqnZftfGslTr2hV0TdlGf6S6enItZfW8WjcPNy4r4reN4AASVgAAAAAAAAAAAAAAAAAAAAAAAAAAAACG7W7RlRws5Q+NpqPTLNrrY4dDEXlvPPnc7L2/pN4W8dYu/s3+RxWtDdqNLTh5NXt7mTJbd5r9ntfDq1im/u2cRDjHj+mpl2Zj93J/C9ehr0F8r433f0McKS30pZJ39eBVp60TuNSnZq1uK4SLr2Q7USUe7ru8FZRnm2uj5o51Snu3i84PVcuq6EzsatHddNuyvdPk8vYUmazuFHIxVy49WdlhNNJppp5prNNdD0c/7Obflh6ndVruD0a4f1RX3S811v0JppNNNNJprNNPRpm2l4tD5zNhnFbUvQAJqQAAAAAAAAAAAAAAAAAAAAAAAAAAR+38K6uGqwj8ThLd/1JXXujh+JwjklKKvbJrjZ5rL19j9AHK+2Wx+4quytGblKm9FnJScelm/Qx8r8k1vr/U/r7f9en8PyfNj/WP5UWed3ydl0t05/oZZ4iMl4sn04nnFPxZ5Sbzvxa59epgUJK+7ro1r/fAjMPWx3iYStajanF8bL3MWErtSyV48+K5pLijWwWKai4yV4rhy8uhsYeUMoOSSd7Sa0beSv5kdJ761KcoVIyShKzg14X/K9U1yXMtvZ3a0qDUKjbpvXjut/MunNfXXXnUMRKLcJrOLvfi42u3HnzfnxLBs3EKUVGTTy8Lvk15+5Klu+mTkYvKupdeTufStdidpupTlSk05U2t3rTaVvR3XoWU2xO428C9ZrbUgAOogAAAAAAAAAAAAAAAAAAAAAAeZzSV27LqB6K9262c6uDm4236ac1fikvEvT7GPana2FNyjCDbje8peGKa+/sUfaXaGtWfjnuQWbu/l52WUV7vmyrJ43rNZ7asGO9bRf20pmMk5a/FH3S59V/fVCtdKS1TSfWP/AAa1fH05zk6d7Ju1+Mb5M8xmlLLSRTEdPUi2pSdWO5K7vryNrZ25WhOi1ZpuUU+Kdm1bzuamFqKfgla60b4qx9rQUHvKSTjmndejOTC+k76+rPQpb0nQqN8e7lfNO17N8RgcVKlJxqKyTz/od83b+W+Zkx2IhUpxrQklLJ247yaysb1ShHEU1Vg7Ts7+aya/voRmPrCU261b+ymdmY9UKsalO1srpaNWzXozpdDaVKcYyU42kk1dq/15M4ns6p3cXF3yd7P5XzX9L9iVxOLkoN03ur5ovNPyvwT9Losx5Op087kcbytG3YYSTV001zR9OI0ts4hf5DlFvVrL7HqltTHKV3VrN83Un+pZOXUezPPCnfzQ7YDj/wDizGxS/iT87Ql90bmA7f4qLSmoVV/VHdfrHL2I/iax80TDk8DJ/jqXVAVzZPbCjVspp0ZP+azj/wC6/OxYky2l63jdZ2y3x2pOrRp9ABNAAAAAAAAAAAAAACifiLt6Sj+zUspPOcrpWir3/wC+hZ+0u0v2fDTmvj+GH+p6P6Zv6HHNpxlUlzk91Su3e2rz6u79CvJbUaauNj8rblH4rEQjZp1K01xfwJ/0qTv9XH6IiNpYutUjutqEG7tK+b5yk3dlgxFKMMrZ8rJtK36le2k6cWledWo7OzT4+yXkVw3R3PSInVhBZSvLgo5+r09zfoSc4JwzaehC4iL3nJpJvguB82djXTlr4XqS07aVop196KmtY2duaJSrh4SSnFKzsyAwMWp5Zxld+uqN/BVam64K1k2s736kZqnW/wBkhh6EE97Le+3kSHZuulUqU5XSl4l14P8AL0IXu5RzTbkrO/8AwSWzpqrUUl4ZQV+rvkVtNp3XcpWph7pr5k5ON9X0+p4wtXegknpZq/Fcvy+p9xFRKUEtbjGxUZOUPhbu1/LJriuTOWrruGa07jSOxM8TCo9yd6esd6XDln6Gpi9p4iWu7TjxknFt9b8vJG3tik6kMp2gt2SWXhblaWetvzbIWrs+U0tyV0uGt+ZZrce6ut433ENmnj0mruaby3pNrT1JPB7Tg8qiUlzy3l+pVMfGo5KFsl14mN4aSzTfkQmNN2PHS8e/bo+GhlelJTjy5ea4EtsftHUw7svFT405cP8AQ+Hlocrwe1KlOWrXJ6NfXiWLD7ebynFS66PzyKfTitvKnUpZcEzHjeNw7hsratLEQ3qcr2+KLylF8mv7RvHG8DjKl+8w38Oos073Xk1bNPqdK7MbejiqbutytCyq0/5XzXOL4G3Hk8up93h8nizi7j2/ZNAAtYwAAAAAAAAA81JWi3yTfsBzHt3tjvK+6neNNtQir239HKV8nn9vMrFHEwbkmnnbNaq2SNfaFSW9Ztym1nnpf88yO7qazd0Y7Wme3uYsNaxqU7VwzSb3lZ/NfV/XTyIHa+w6n+dZ2tZtJ3ilxaWdn+RlhiakJRmvGotPdfEmMRjp1HGrSzhwds1zhLlqc8p+q2aePs5viqeu7ZpWu+fkR0oos+3sFuOSSst6ba/3u3tYrMlmX09mbJMb6SmyMc1aD14NljpSnF3jZqVm0/5l9srFTwFJN8b8Er5+mrLHgMXK26o+LS70XU7KvaXm96MZpa3y5O+hpYecIvxOUZttpxTv9LcDZw11F0nm3eUJLi9XHzMVHDNaX3pNK+tk2kvQrmF1MnWm7gJ3cpOTlHg372NnZVSMnUp3SvouFs9OGu6R2Je7Hdhd2vnlm29Xc2qSp1IRy3ZRS3lbTqrdTsOXncMeNpvu6lOV84T+y088vqkVanTqU1vRnJWu+mWZaMBvftMYtvd3ZZyk3p4le+mhB9rqcqdbcjfcaUrcrt5ex3WkcVvzal6wm3ZuzqK64t5r30JZxhUjdWKzT2hFRaUbO1l0/Uy7Ox+7k3lzIzLTGLfdUtPCNXvmj3hqGVktM+f3NvCTUle6MW0MaoeGLXW3ErmF1Mlo6TfZ7FKEZXTk20opavj+hKYPHVaGJjitHdRnTWjpcYvm9Wm+KRFbIlGnTjKXxPdsvvn538iWqVIypbzt4r311d+C/vIRGlN58t7jqXWqVRSipRd00mnzTV0z0RXZVv8AYqO9qoJfRNpeyRKmyJ3DwbRq0wAA6iAAAAAB5mrprnkfWeJMjMuw4LUhac1L4oSlF+ak0z5GurO/p06mz23pqGPxEbOKlNTX+5KTf1dyA7+PJtOyavnrfgUUjXT2JtN4iW0opXm5WTeStfrmbWAxai7xe7f4lwI7aGJW6oRXK6yv/wBmljq25FXai2k1G6vbmRvj8k65vGGztzGKUpSU1Z6ppNN2tkrZFZqpb1pPV5qKS9bZmvWqSnLJ3fTUntgbPpxkpVNeRZWkVhmyZJstnYnsT3y7yT7ulJ5xVu8nFfLdfBH3+uZOfiF2SnGMMRhaatTio1KdNZqEV4ZqK1ssmlnkuTPmxNswpWUWkuRddm7epzVnJXOqJmYlxTZnjWuV/C8734NM3cLXne8rStkk8m2nqmvzJDtf2anhK06tHxYaTvHds+6vrGS4JO9nysnnrX6GL/qtrqrLPrwEwupeExKvFuzg7O+dr29D5h8JLvVKleVm7pRldritLEbQxKbbTT3fljm36Fy7O4veSvOa5Kz+yMfI5E4o6jbTjxep2gNquMf4kozppOSk2ks7Zx87NZdSo1MX3k3KU5Seics3urJJsvn4uwrTp4eNOEnT/iuVl863LNpdHI5e9+Oqa81/0aMGT1McWlR4+M9JqHdvVZ/T8zM400srX6qJCUsS1wXo/wBTMq7fFLpZosmIW0vaEzRpxa8OXk/yPcMKroj8Ne/xK3QnMDRc2lHN+aXuyvWl85Jn2WLDRj3Ucr8L5dVbprcy4Wjv1VCC+KSSX11JDZ/YnFzis6cY65zv/wDNy5dmOyUcNLvJyVSpwaVlHnbmzsUmWS3JrSJ77WHCUdynGC+VJeiMoBpeVPYAAAAAAAD40YppmYHNOxLn/wCIWxaVZKbi1WSspLjFcJLj9zmFXZNSEvCvqj9F1KKlqrmvPZ1N6wj6Irmk7aaciK11L88rYeIn8K3erzfuef8AAdeb3pylJvVu7P0N+7KfCK9EP3dDkhqUp5EOAU+wFVaXNin2LrLmd3/d8eSH7BHkhqUfWhxSl2aqR1TN2jgKsea5HXHs2PI+fuuHJDUnrQ5riu8dJxz8s9Si7T2fa63HnqlvJeZ+hVsmnxijDLYNJ6wXoNTDnqw/M+y1UoV4zSuk808rxfPy1+h1DAbUe5/DpKo5fBKLiknb5lrryTOjf4bw/GlB+cUZ8LsWhT+ClCL5qMV9ijNx/VncrsXLjHGkNsrZdR0YrEbsqlvFZWS8lwFfsnRn8UIv6ItCgkfbF1MUVrqGe+e1rTKgYn8NsLL/AMaXlkRtX8KaXyykvRnUgT8COReHK6f4X2+dehKYH8P9x5s6ADnpwl+LyIzZWzHRVt5tciTAJxGlFrTadyAA6iAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP/9k=",
    pname: "Mabroom Dates",
    pquant: "1 kg",
    pprice: "650",
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
          backgroundImage:"url(https://www.shutterstock.com/image-photo/full-frame-background-top-view-600nw-2223473303.jpg)",
          position: "relative",
          bottom: "1100px",
          left: "440px",
         
        }}
      >
       
          <Row>
            {flist.map((p) => (
              <Col sm={4}>

               
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
                
                
                
                
              </Col>
            ))}
          </Row>
        
      </div>
    </>
  );
}
