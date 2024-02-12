import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Box.css";

function Box({icon, content}){
    return(
        <div className="box">
            <FontAwesomeIcon icon={icon}/>
            <p>{content}</p>
        </div>
    )
}

export default Box;