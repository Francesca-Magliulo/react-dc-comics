import img1 from "../assets/img/buy-comics-digital-comics.png"
import img2 from "../assets/img/buy-comics-merchandise.png"
import img3 from "../assets/img/buy-comics-shop-locator.png"
import img4 from "../assets/img/buy-comics-subscriptions.png"
import img5 from "../assets/img/buy-dc-power-visa.svg"


export default function BlueBanner() {
    return (
        <section>
            <div className="container">
                <div className="banner-item">
                    <img src={img1} alt="" />
                    <span>DIGITAL COMICS</span>
                </div>
                <div className="banner-item">
                    <img src={img2} alt="" />
                    <span>DC MERCHANDISE</span>
                </div>
                <div className="banner-item">
                    <img src={img3} alt="" />
                    <span>SUBSCRIPTION</span>
                </div>
                <div className="banner-item">
                    <img src={img4} alt="" />
                    <span>COMIC SHOP LOCATOR</span>
                </div>
                <div className="banner-item">
                    <img src={img5} alt="" />
                    <span>DC POWER VISA</span>
                </div>

            </div>
        </section>
    )
}