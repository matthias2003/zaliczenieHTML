import { useLocation, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import "./Nav.css"
import * as cover from "../../Assets/index.js";
function Nav() {
    const location = useLocation();
    const [ headerImage, setHeaderImage] = useState('');
    const getImagePath = () => {
        switch (location.pathname) {
            case '/':
                return cover.mainPage
            case '/menu':
                return cover.menu
            case '/order':
                return cover.order
            default:
                return cover.mainPage
        }
    }
    useEffect(() => {
            setHeaderImage(getImagePath());
    }, [location.pathname]);

    return(
        <header>
            <nav>
                <ul className="nav__items">
                    <Link to={"/"}>
                        <li>O nas</li>
                    </Link>
                    <Link to={"/menu"}>
                        <li>Menu</li>
                    </Link>
                    <Link to={"/order"}>
                        <li>Zamów</li>
                    </Link>
                    <Link to={"/"}>
                        <li>Galeria</li>
                    </Link>
                    <Link to={"/"}>
                        <li>Kontakt</li>
                    </Link>
                </ul>
            </nav>
            <div className="headerImg">
                <img src={headerImage}/>
            </div>
        </header>
    )
}

export default Nav;