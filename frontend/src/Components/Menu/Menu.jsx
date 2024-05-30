import "./Menu.css";
import { getMenu } from "../../requests";
import {useEffect, useState} from "react";
import plus from "../../Assets/plus.svg"
function Menu() {
    const [ menuData, setMenuData ] = useState([]);
    useEffect(()=>{
        fetchData();
    },[])

    const fetchData = async () => {
        const { data } = await getMenu();
        setMenuData(data);
    }
    return(
        <main>
            <div className="container_menu">
                <div className="appetizers">
                    <h2>Przekąski</h2>
                    {menuData.map((item) => {
                        if (item.kategoria === "Przekąski") {
                            return (
                                <div className="tile_menu">
                                    <p>{item.nazwa}</p>
                                    <p>{item.cena} zł</p>
                                </div>
                            )
                        }})}
                </div>

                <div className="soups">
                    <h2>Zupy</h2>
                    {menuData.map((item) => {
                        if (item.kategoria === "Zupy") {
                            return (
                                <div className="tile_menu">
                                    <p>{item.nazwa}</p>
                                    <p>{item.cena} zł</p>
                                </div>
                            )}})}
                </div>

                <div className="maincourse">
                    <h2>Dania główne</h2>
                    {menuData.map((item) => {
                        if (item.kategoria === "Dania główne") {
                            return (
                                <div className="tile_menu">
                                    <p>{item.nazwa}</p>
                                    <p>{item.cena} zł</p>
                                </div>
                            )}})}
                </div>

                <div className="desserts">
                    <h2>Desery</h2>
                    {menuData.map((item) => {
                        if (item.kategoria === "Desery") {
                            return (
                                <div className="tile_menu">
                                    <p>{item.nazwa}</p>
                                    <p>{item.cena} zł</p>
                                </div>
                            )}})}
                </div>

                <div className="drinks">
                    <h2>Napoje</h2>
                    {menuData.map((item) => {
                        if (item.kategoria === "Napoje") {
                            return (
                                <div className="tile_menu">
                                    <p>{item.nazwa}</p>
                                    <p>{item.cena} zł</p>
                                </div>
                            )}})}
                </div>
            </div>
        </main>
    )
}

export default Menu;