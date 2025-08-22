import { Link ,Outlet} from "react-router-dom";
import React from "react";

function Products() {
  return (
    <>
      <div>
        <input type="serchc" placeholder="search" />
      </div>
      <nav>
        <Link to="featured"> featured</Link>
        <Link to="new"> new</Link>
        <Outlet />
      </nav>
    </>
  );
}

export default Products;
