import Header from "./Header";
import Body from "./Body.js";
import DryNuts from "./DryNutsCorner.js";
import Cards from "./Cards.js";
import Favorite from "./Favorite.js";
import ExploreCategories from "./ExploreCategories.js";
import NewCategories from "./NewCategories.js";
import Banner from "./Banner.js";
import Brands from "./Brands.js";
import Featureditem from "./Featureditem.js";
import Furnitures from "./Furnitures.js";
import Footer from "./Footer.js";

function Home() {
  return (
    <>
    <div style={{backgroundImage:"url(https://images.pexels.com/photos/7130469/pexels-photo-7130469.jpeg?cs=srgb&dl=pexels-codioful-%28formerly-gradienta%29-7130469.jpg&fm=jpg)"}}>
      
          <Header/>
          <Body />
          <DryNuts />
          <Favorite />
          <Cards />
          <ExploreCategories />
          <NewCategories />
          <Banner />
          <Brands />
          <Featureditem />
          <Furnitures/>
          <Footer/>
      
      </div>
    </>
  );
}
export default Home;
