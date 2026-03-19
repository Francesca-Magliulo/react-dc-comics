import img1 from "../assets/img/buy-comics-digital-comics.png"
import img2 from "../assets/img/buy-comics-merchandise.png"
import img3 from "../assets/img/buy-comics-shop-locator.png"
import img4 from "../assets/img/buy-comics-subscriptions.png"
import img5 from "../assets/img/buy-dc-power-visa.svg"


export default function BlueBanner() {
    return (
        <section>
            <div>
                <div className="banner-item">
                    <img src={img1} alt="" />
                    <span>DIGITAL COMICS</span>
                </div>
                <div className="banner-item">
                    <img src={img2} alt="" />
                    <span>DIGITAL COMICS</span>
                </div>
                <div className="banner-item">
                    <img src={img3} alt="" />
                    <span>DIGITAL COMICS</span>
                </div>
                <div className="banner-item">
                    <img src={img4} alt="" />
                    <span>DIGITAL COMICS</span>
                </div>
                <div className="banner-item">
                    <img src={img5} alt="" />
                    <span>DIGITAL COMICS</span>
                </div>

            </div>
        </section>
    )
}