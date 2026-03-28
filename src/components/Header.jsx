import imgLogo from "../assets/img/dc-logo.png"
import Navbar from "./Navbar"
export default function Header() {
    return (
        <header>
            <div className="container">
                <figure>
                    <img src={imgLogo} alt="logo" />
                </figure>

                <Navbar />
            </div>
        </header>
    )
}