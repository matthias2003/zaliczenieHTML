import "./Contact.css";

function Contact() {

    return(
    <main>
        <div className="container_contact">
            <h2>Masz pytanie? Napisz do nas!</h2>
            <form>
                <div>
                    <label htmlFor="name">Imię i nazwisko:</label>
                    <input type="text" id="name" name="name" required/>
                </div>

                <div>
                    <label htmlFor="email">Adres e-mail:</label>
                    <input type="email" id="email" name="email" required/>
                </div>

                <div>
                    <label htmlFor="subject">Temat:</label>
                    <select id="subject" name="subject" required>
                        <option value="general">Ogólne</option>
                        <option value="reservation">Rezerwacja</option>
                        <option value="order">Zamówienie</option>
                        <option value="feedback">Opinia</option>
                    </select>
                </div>

                <div>
                    <textarea id="message" name="message" placeholder="Treść wiadomości" required></textarea>
                </div>

                <button type="submit">Wyślij</button>
            </form>
        </div>
    </main>
    )
}

export default Contact;