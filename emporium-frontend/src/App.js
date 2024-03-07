import "./App.css";
import Header from "./Header.js";

import Almonds from "./Drynutsitems/Almonds.js";
import Home from "./Home.js";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cashews from "./Drynutsitems/Cashews.js";
import Walnuts from "./Drynutsitems/Walnuts.js";
import Pista from "./Drynutsitems/Pista.js";
import Dates from "./Drynutsitems/Dates.js";
import ProductAlmondsDetails from "./Drynutsitems/ProductAlmondsDetails.js";
//import ExploreCategories from "./ExploreCategories.js";
import ExploreAll from "./ExploreAll.js";
import ProductCashewsDetails from "./Drynutsitems/ProductCashewsDetails.js";
import ListAll from "./ListAll.js";
import Login from "./Login.js";
import ProductWalnutDetails from "./Drynutsitems/ProductWalnutDetails.js";
import ProductPistaDetails from "./Drynutsitems/ProductPistaDetails.js";
import NutsCorner from "./DryNuts/NutsCorner.js";
import SignUp from "./SignUp.js";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/SignUp" element={<SignUp/>} />
          <Route path="/login" element={<Login/>}/>
          <Route path="/drynuts" element={< NutsCorner/>} />

          <Route path="/almonds" element={<Almonds />} />

          <Route path="/almonds/:id" element={<ProductAlmondsDetails />} />

          <Route path="/cashews" element={<Cashews />} />
          <Route path="/cashews/:id" element={<ProductCashewsDetails />} />

          <Route path="/walnuts" element={<Walnuts />} />
          <Route path="/walnuts/:id" element={<ProductWalnutDetails />} />

          <Route path="/pista" element={<Pista />} />
          <Route path="/pista/:id" element={<ProductPistaDetails />} />
          <Route path="/dates" element={<Dates />} />
          <Route path="/see" element={<ExploreAll />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
