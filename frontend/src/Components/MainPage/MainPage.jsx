import "./MainPage.css"
import * as icon from "../../Assets/main.js"
function MainPage() {
    return(
        <main>
                <div className="container">
                        <div className="tile">
                                <h2>O nas</h2>
                                <p>
                                        Witamy w GastroFazie!
                                        Nasza restauracja to miejsce, gdzie pasja do gotowania spotyka się z miłością do
                                        wyjątkowych smaków. Z dumą serwujemy dania, które czerpią z tradycji
                                        kulinarnych, jednocześnie dodając nowoczesny akcent, aby zaspokoić najbardziej
                                        wymagające podniebienia.
                                </p>
                                <div className="tile__img">
                                <img   src={icon.mainImg1} alt="Photo" />
                                </div>

                        </div>
                        <div className="tile">
                                <h2>Kim jesteśmy?</h2>
                                <p>
                                        Jesteśmy zespołem doświadczonych kucharzy i entuzjastów gastronomii, którzy
                                        każdego dnia z zaangażowaniem pracują nad tworzeniem niezapomnianych doznań
                                        kulinarnych. Nasz szef kuchni, Wiesław, zdobywał doświadczenie w renomowanych
                                        restauracjach na całym świecie, co pozwala nam łączyć różnorodne smaki i
                                        techniki z różnych zakątków globu.
                                </p>
                                <div className="tile__img">
                                        <img src={icon.mainImg2} alt="Photo"/>
                                </div>
                        </div>
                        <div className="tile">

                                <h2>Nasza filozofia</h2>
                                <p>Wierzymy, że dobre jedzenie zaczyna się od najlepszych składników. Dlatego
                                        współpracujemy z lokalnymi dostawcami, którzy dostarczają nam świeże i
                                        ekologiczne produkty. Każde danie, które wychodzi z naszej kuchni, jest
                                        przygotowywane z najwyższą starannością i dbałością o szczegóły.
                                </p>
                                <div className="tile__img">
                                        <img src={icon.mainImg3} alt="Photo"/>
                                </div>
                        </div>
                        <div className="tile">
                                <h2>Co oferujemy?</h2>
                                <p>
                                        W naszym menu znajdziesz szeroki wybór dań, od klasycznych potraw po
                                        nowatorskie
                                        kompozycje smakowe. Serwujemy zarówno śniadania, obiady, jak i kolacje,
                                        a nasza
                                        oferta zmienia się sezonowo, aby zawsze dostarczać to, co najlepsze w
                                        danym
                                        okresie. Nasze menu obejmuje również opcje wegetariańskie i wegańskie,
                                        aby każdy
                                        mógł znaleźć coś dla siebie.
                                </p>
                                <div className="tile__img">
                                        <img src={icon.mainImg4} alt="Photo"/>
                                </div>
                        </div>
                        <div className="tile">
                                <h2>Atmosfera</h2>
                                <p>
                                        GastroFaza to nie tylko jedzenie, to również miejsce, gdzie można
                                        odpocząć i
                                        spędzić czas w miłej atmosferze. Nasze wnętrza są zaprojektowane tak,
                                        aby każdy
                                        czuł się komfortowo i swobodnie. Dbamy o każdy detal, aby stworzyć
                                        przestrzeń
                                        idealną zarówno na rodzinne obiady, romantyczne kolacje, jak i spotkania
                                        z
                                        przyjaciółmi.
                                </p>
                                <div className="tile__img">
                                        <img src={icon.mainImg5} alt="Photo"/>
                                </div>
                        </div>
                        <h2>Zapraszamy!</h2>
                </div>
        </main>
    )
}

export default MainPage;