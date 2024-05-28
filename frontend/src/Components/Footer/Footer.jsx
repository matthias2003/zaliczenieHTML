import "./Footer.css"
import facebook from "../../Assets/facebook.svg"
function Footer() {
    return(
        <footer>
            <p>Znajdź nas na facebooku!</p>
            <a href="https://www.facebook.com" target="_blank"><img src={facebook} alt="Facebook"/></a>
        </footer>
    )
}

export default Footer;