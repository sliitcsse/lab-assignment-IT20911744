
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Loginpage from "./components/Customer/Login";
import ViewInventoryList from "./components/Trader/ViewInventry";
import ViewCustomer from "./components/Trader/ViewCustomer";
import AddItems from "./components/Trader/AddItems";
import AddPromotion from "./components/Trader/AddPromotion";
import ViewPromotion from "./components/Trader/ViewPromotion";
import ViewItems from "./components/Customer/ViewItems";
import ViewCart from "./components/Customer/ViewCart";
import ViewWishlist from "./components/Customer/ViewWishlist";


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
        <Route path="/" element={<Loginpage />} />
        <Route path="/viewInventory" element={<ViewInventoryList />} />
        <Route path="/viewCustomer" element={<ViewCustomer />} />
        <Route path="/additem" element={<AddItems />} />
        <Route path="/addpromo" element={<AddPromotion />} />
        <Route path="/viewpromo" element={<ViewPromotion />} />
        <Route path="/viewitems" element={<ViewItems />} />
        <Route path="/viewCart" element={<ViewCart />} />
        <Route path="/viewWlist" element={<ViewWishlist />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
