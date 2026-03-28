import Comics from "./Comics"

export default function Main() {
    return (
        <main>
            <div className="hero"></div>

            <div className="comics-section">
                <div className="container">
                    <span className="section-label">CURRENT SERIES</span>
                    <Comics />
                </div>
            </div>
        </main>
    )
}