import './LandingSection.css';
import { faCalendar, faClock, faHourglass2 } from "@fortawesome/free-solid-svg-icons";
import Button from '../Components/Button';
import Box from "../Components/Box";

function LandingSection(){
    const catchPhrase = "Discover a Consultant's Approach to Problem Solving";
    const details = "Learn the proven approach used by top strategy consultants to tackle complex business challenges effectively. Solve an MBB case study LIVE with Ashwin to understand the concepts hands-on";
    const sessionDetails = [
        {
            icon: faCalendar,
            text: "3rd March"
        },
        {
            icon: faClock,
            text: "1 PM Onwards"
        },
        {
            icon: faHourglass2,
            text: "2.5 Hours"
        }
    ]
    return (
        <section id="landing-section" style={{display: "flex", justifyContent: "space-between", columnGap: "10rem"}}>
            <div>
                <h1>{catchPhrase}</h1>
                <p>{details}</p>
                <div style={{display: "flex", justifyContent: "space-between"}}>
                    {
                        sessionDetails.map((item, index)=>
                        <Box icon={item.icon} content={item.text} key={index}></Box>)
                    }
                </div>
                <Button width={"100%"} height={70}>
                    Register Now at &#8377; 499 <del>1999</del>
                </Button>
            </div>
            <div style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
                <div>
                </div>
            </div>
        </section>
    )
}

export default LandingSection;