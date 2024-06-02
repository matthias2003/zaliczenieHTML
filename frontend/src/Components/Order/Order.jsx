import "./Order.css"
import {useState} from "react";
import { getItem } from "../../requests";
import plus from "../../Assets/plus.svg"
function Order() {
    const [name, setName] = useState();
    const [address, setAddress] = useState();
    const [menuItem, setMenuItem] = useState();
    const [quantity, setQuantity] = useState();
    const [search, setSearch] = useState("");
    const [returnedData, setReturnedData] = useState([]);
    const [basket, setBasket] = useState([]);
    const [price, setPrice] = useState(0);
    const searchHandler = async (e) => {
        e.preventDefault();
        const { data } = await getItem(search);
        setReturnedData(data);
    }

    return(
        <main>
            <div className="container_order">
                <h2>Złóż zamówienia</h2>
                <div className="search_cont">
                    <form onSubmit={searchHandler}>
                        <label htmlFor="search">Wyszukaj produktu:</label>
                        <input type="text" name="search" id="search" value={search} onChange={(e) => {
                            setSearch(e.target.value)
                        }} required/>
                        <button>Wyszukaj</button>
                    </form>
                </div>
                <div className="search_data">
                    {returnedData.map(item => (
                        <div className="search_row" key={item._id}>
                            <p>{item.nazwa}</p>
                            <img onClick={() => {
                                setBasket(prevArray => [...prevArray, item]);
                                setPrice(prevState => prevState+item.cena)
                            }}
                                 className="add_icon" src={plus} alt="Dodaj"/>
                        </div>
                    ))}
                </div>
                <form className="order-form">
                    <div>
                        <h2>Koszyk</h2>
                        {basket.map(it => (
                            <div className="basket_row">
                                <p>{it.nazwa}</p>
                                <p>{it.cena} zł</p>
                            </div>
                        ))}
                        <div className="price_row">
                            <h4>Wartość koszyka:</h4>
                            <p>{price} zł</p>
                        </div>
                    </div>
                    <h2>Dane</h2>
                    <div className="data_row">
                        <label htmlFor="name">Imię:</label>
                        <input
                            type="text"
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </div>
                    <div className="data_row">
                        <label htmlFor="address">Adres:</label>
                        <input
                            type="text"
                            id="address"
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                            required
                        />
                    </div>
                    <button className="button-68" type="submit">Złóż zamówienie</button>
                </form>
            </div>
        </main>
    )
}

export default Order;