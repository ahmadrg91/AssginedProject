import "./From.css";
import { useState, useEffect } from "react";

function Form() {
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowForm(true);
    }, 15000);

    return () => clearTimeout(timer);
  }, []);

  const submitHandler = e => {
    e.preventDefault();
    setShowForm(false);
  }

  return (
    <div className={`form-container ${showForm ? "show" : ""}`}>
      <div style={{textAlign: 'right', margin: "0"}}>
        <button onClick={() => setShowForm(false)} style={{backgroundColor: 'transparent'}} >✗</button>
      </div>
      <div style={{textAlign: 'center'}}>
        <h1 style={{margin: "0"}}>Flat 50% Off!</h1>
        <p>Don't miss the oppurtunity</p>
      </div>
      <form onSubmit={submitHandler}>
        <input type="number" placeholder="Enter your Mobile Number" />
        <input type="email" placeholder="Enter your Email" />
        <input type="submit" value={"Register now"} />
      </form>
    </div>
  );
}

export default Form;
