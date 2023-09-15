import { AiFillFacebook, AiFillInstagram, AiFillTwitterSquare, AiFillYoutube } from "react-icons/ai";
import "../styles/footer.css"



const Footer = () => {
    return ( 
        <div className="footer">
            <div className="socialmedia__list">
                <AiFillFacebook />
                <AiFillInstagram />
                <AiFillTwitterSquare />
                <AiFillYoutube />
            </div>
            <div className="footer__lists">
                <ul>
                    <li>Conditions of Use</li>
                    <li>Privacy & policy</li>
                    <li>Press Room</li>
                </ul>
            </div>
            <p>2021 MovieBox by Adriana Eka Prayudha</p>
        </div>
     );
}
 
export default Footer;