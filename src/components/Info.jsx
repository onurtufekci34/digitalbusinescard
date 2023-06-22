import profil from "../assets/images/profil.jpg";



import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faEnvelope} from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";


export default function Info() {

  

  const linkednUrl = "https://www.linkedin.com/in/onurtüfekci"

  const linkednOpen = () => {
    window.open(linkednUrl, '_blank');
  };

   
  return (
    <div className="info">
      <img className="profilfoto" src={profil} alt="onur" />
      <h1 className="name">Onur TÜFEKCI</h1>
      <h4 className="occupation">Frontend Developer</h4>
      <p className="website"><a href="https://coderonur.netlify.app/">onurs.website</a> </p>
      <div className="buttons">
        <button className="email">
          <FontAwesomeIcon icon={faEnvelope} style={{marginRight:"5px"}} /> Email
        </button>
        <button onClick={linkednOpen} className="linkedn">
        <FontAwesomeIcon icon={faLinkedin} style={{color:"#ffffff",marginRight:"5px"}} />
           Linkedn
        </button>
        
       
        
      </div>
    </div>
  );
}
