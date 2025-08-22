import { useNavigate } from "react-router-dom";
import React from "react";

function OrderSummary() {
  const navigate = useNavigate();
  return (
    <>
      {" "}
      <div>Order Confirmed</div>
      <button onClick={() => navigate(-1)}>Go Back</button>
    </>
  );
}

export default OrderSummary;
