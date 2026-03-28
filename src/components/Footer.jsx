import imgLogoBg from "../assets/img/dc-logo-bg.png"
import imgFb from "../assets/img/footer-facebook.png"
import imgPeriscope from "../assets/img/footer-periscope.png"
import imgPinterest from "../assets/img/footer-pinterest.png"
import imgTwitter from "../assets/img/footer-twitter.png"
import imgYoutube from "../assets/img/footer-youtube.png"
export default function Footer() {

    const footerSections = [
        {
            title: "DC COMICS",
            links: [
                { text: "Character", url: "#" },
                { text: "Comics", url: "#" },
                { text: "Movies", url: "#" },
                { text: "TV", url: "#" },
                { text: "Games", url: "#" },
                { text: "Videos", url: "#" },
                { text: "News", url: "#" },
            ]
        },
        {
            title: "SHOP",
            links: [
                { text: "Shop DC", url: "#" },
                { text: "Shop DC Collectibles", url: "#" },
            ]
        },
        {
            title: "DC",
            links: [
                { text: "Terms Of Use", url: "#" },
                { text: "Privacy policy", url: "#" },
                { text: "Ad Choices", url: "#" },
                { text: "Advertising", url: "#" },
                { text: "Jobs", url: "#" },
                { text: "Subscriptions", url: "#" },
            ]
        },
        {
            title: "SITES",
            links: [
                { text: "DC", url: "#" },
                { text: "MAD Magazine", url: "#" },
                { text: "DC Kids", url: "#" },
                { text: "DC Universe", url: "#" },
            ]
        }
    ];

    return (
        <footer>

            <div className="container">

                <div className="columns">
                    {footerSections.map((section, index) => (
                        <div key={index}>
                            <h4>{section.title}</h4>
                            <ul>
                                {section.links.map((link, i) => (
                                    <li key={i}>
                                        <a href={link.url}>{link.text}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
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