import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitterSquare,faFacebook,faInstagram } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <div className="footer">
        <FontAwesomeIcon icon={faTwitterSquare} className="icon" />
        <FontAwesomeIcon icon={faFacebook} className="icon" />
        <FontAwesomeIcon icon={faInstagram} className="icon" />
        
    </div>
  )
}
