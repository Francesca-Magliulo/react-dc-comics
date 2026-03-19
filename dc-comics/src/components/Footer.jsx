import imgLogoBg from "../assets/img/dc-logo-bg.png"
import imgFb from "../assets/img/footer-facebook.png"
import imgPeriscope from "../assets/img/footer-periscope.png"
import imgPinterest from "../assets/img/footer-pinterest.png"
import imgTwitter from "../assets/img/footer-twitter.png"
import imgYoutube from "../assets/img/footer-youtube.png"
export default function Footer() {
    return (
        <footer>

            <div className="container">

                <div className="columns">
                    <div>
                        <h4>DC COMICS</h4>
                        <ul>
                            <li>Character</li>
                            <li>Comics</li>
                            <li>Movies</li>
                            <li>TV</li>
                            <li>Games</li>
                            <li>Videos</li>
                            <li>News</li>
                        </ul>
                    </div>

                    <div>
                        <div>
                            <h4>SHOP</h4>
                            <ul>
                                <li>Shop DC</li>
                                <li>Shop DC Collectibles</li>
                            </ul>

                        </div>
                    </div>

                    <div>
                        <h4>DC</h4>
                        <ul>
                            <li>Terms Of Use</li>
                            <li>Privacy policy</li>
                            <li>Ad Choices</li>
                            <li>Advertising</li>
                            <li>Jobs</li>
                            <li>Sunscriptions</li>
                        </ul>
                    </div>

                    <div>
                        <h4>SITES</h4>
                        <ul>
                            <li>DC</li>
                            <li>MAD Magazine</li>
                            <li>DC Kids</li>
                            <li>DC Universe</li>
                        </ul>
                    </div>
                </div>

                <img src={imgLogoBg} alt="logo bg" />

            </div>

            <div className="footer-bottom">
                <button>SING-UP NOW</button>

                <div className="social">
                    <span>FOLLOW US</span>
                    <img src={imgFb} alt="" />
                    <img src={imgPeriscope} alt="" />
                    <img src={imgPinterest} alt="" />
                    <img src={imgTwitter} alt="" />
                    <img src={imgYoutube} alt="" />
                </div>
            </div>

        </footer>
    )
}