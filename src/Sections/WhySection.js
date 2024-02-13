import "./WhySection.css";
import {
  faBars,
  faBookOpen,
  faBrain,
  faList,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function WhySection() {
  const content = [
    {
      icon: faBookOpen,
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis",
    },
    {
      icon: faList,
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis",
    },
    {
      icon: faBrain,
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis",
    },
    {
      icon: faPaperPlane,
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis",
    },
    {
      icon: faBars,
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis",
    },
  ];
  return (
    <section id="why-section">
      <h1>
        <span style={{ color: "chocolate" }}>But,</span>
        <br />
        Why should you become a Mindful Marketer
      </h1>
      <div>
        {content.map((item, index) => (
          <article key={index}>
            <FontAwesomeIcon icon={item.icon} />
            <p>{item.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default WhySection;
