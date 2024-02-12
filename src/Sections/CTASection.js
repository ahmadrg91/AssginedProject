import './CTASection.css';
import Button from "../Components/Button";
function CTASection(){
    return(
        <section id="cta-section">
            <div>
                <div>
                    <h2>Crash course Launch Offer (Save INR 1799)</h2>
                    <ul>
                        <li>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet</li>
                        <li>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet</li>
                        <li>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet</li>
                    </ul>
                </div>
                <div>
                    <p>Price of the Program <br/><span>&#8377; 499</span> <del>1999</del> </p>
                    <Button width={"100%"} height={70}>Register Now</Button>
                </div>
            </div>
        </section>
    )
}

export default CTASection;