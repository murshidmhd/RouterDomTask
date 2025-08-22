import { Routes, Route } from "react-router-dom";
import React from "react";
import Home from "./component/router study /Home";
import About from "./component/router study /About";
import Navbar2 from "./component/router study /Navbar";
import OrderSummary from "./component/router study /OrderSummary";
import NoMatch from "./component/router study /NoMatch";
import Products from "./component/router study /Products";
import FeaturedProducts from "./component/router study /FeaturedProducts";
import NewProducts from "./component/router study /NewProducts";

function App() {
  return (
    <>
      <Navbar2 />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="order-summary" element={<OrderSummary />} />
        <Route path="products" element={<Products />}>
          <Route index element={<FeaturedProducts />} />
          <Route path="featured" element={<FeaturedProducts />} />
          <Route path="new" element={<NewProducts />} />
        </Route>
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </>
  );
}

export default App;

// import "bootstrap/dist/css/bootstrap.min.css";
// import React from "react";
// import { Routes, Route } from "react-router-dom";
// import Home from "./component/Week2-React-Task1/Home";
// import Login from "./component/Week2-React-Task1/Login";
// import Registraion from "./component/Week2-React-Task1/Registraion";
// import Navbar from "./component/Week2-React-Task1/Navbar";
// function App() {
//   return (
//     <>
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/registration" element={<Registraion />} />
//       </Routes>
//     </>
//   );
// }

// export default App;
