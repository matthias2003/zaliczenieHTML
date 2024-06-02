import "./Gallery.css";
import Slider from "react-slick";
import * as photo from "../../Assets/Gallery/index";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function Gallery() {
    const options = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    }

    return(
        <main>
            <h2>Galeria naszej restarucji</h2>
            <div className="slider-container">
                <Slider {...options} >
                    <div>
                        <img src={photo.gallery1} alt="First"/>
                    </div>

                    <div>
                        <img src={photo.gallery2} alt="First"/>
                    </div>

                    <div>
                        <img src={photo.gallery3} alt="First"/>
                    </div>

                    <div>
                        <img src={photo.gallery4} alt="First"/>
                    </div>

                    <div>
                        <img src={photo.gallery5} alt="First"/>
                    </div>

                    <div>
                        <img src={photo.gallery6} alt="First"/>
                    </div>
                </Slider>
            </div>
        </main>
    )
}

export default Gallery;
