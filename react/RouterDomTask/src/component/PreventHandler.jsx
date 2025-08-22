import React, { useState } from "react";

function WithoutPreventDefault() {
  const [count, setCount] = useState(0);

  const handleSubmit = (event) => {
    event.preventDefault();
    //  // Commented out to demonstrate default behavior
    setCount(count + 1);
  };

  return (
    <div>
      <h2>Count: {count}</h2>
      <form onSubmit={handleSubmit}>
        <button type="submit">Submit (No preventDefault)</button>
      </form>
      <p>
        Click submit: page will reload, count resets because default form
        submit reloads page.
      </p>
    </div>
  );
}

export default WithoutPreventDefault;
