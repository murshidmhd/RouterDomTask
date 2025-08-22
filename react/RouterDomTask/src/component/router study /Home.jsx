import { useNavigate } from "react-router-dom";
import React from "react";

function Home() {
  const navigate = useNavigate();
  return (
    <>
      Home page
      <button onClick={() => navigate("order-summary", { replace: true })}>
        Place Order
      </button>
    </>
  );
}

export default Home;
