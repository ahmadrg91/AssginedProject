import './AboutSection.css';

function AboutSection(){
    return(
        <section id="about-section">
            <div style={{textAlign: "center"}}>
                <h1 style={{fontWeight: "regular"}}>ABOUT<span style={{color: "#B2AC88"}}> FOUNDERX</span></h1>
                <p>The world needs your creativity and ingenuity. Don't put your dreams on hold. Start your founder's journey today!</p>
            </div>
            <div>
                <div style={{color: 'white'}}>
                Image will go here
                </div>
                <div>
                    <ul>
                        <li>Neque porro <strong>quisquam est qui</strong> dolorem ipsum quia dolor sit amet</li>
                        <li>Neque porro quisquam est qui dolorem ipsum quia <strong>dolor sit amet</strong></li>
                        <li>Neque <strong>porro quisquam</strong> est qui dolorem ipsum quia dolor sit amet</li>
                        <li>Neque porro quisquam est qui dolorem ipsum <strong>quia dolor sit</strong> amet</li>
                        <li>Neque porro <strong>quisquam</strong> est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit</li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default AboutSection;