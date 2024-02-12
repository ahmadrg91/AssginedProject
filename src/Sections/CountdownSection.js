import './CountdownSection.css';
import { useState, useEffect } from "react";
import Button from "../Components/Button";

function CountdownSection({seconds}){
    const [timeLeft, setTimeLeft] = useState(seconds);

  useEffect(() => {
    if (timeLeft === 0) return;

    const timer = setInterval(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  const formattedTime = () => {
    const hours = Math.floor(timeLeft/ 60 / 60);
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    return `${hours < 10 ? '0' : ''}${hours} : ${minutes < 10 ? '0' : ''}${minutes} : ${seconds < 10 ? '0' : ''}${seconds}`;
  };
    return(
        <section id="countdown-section">
          <div>
            <h1>Time is running out.<br/>Grab your spot fast!</h1>
            <h1 style={{fontWeight: "lighter"}}>{formattedTime()}</h1>
            <Button width={"100%"} height={70}>
                    Register Now at &#8377; 499 <del>1999</del>
                </Button>
          </div>
        </section>
    )
}

export default CountdownSection;