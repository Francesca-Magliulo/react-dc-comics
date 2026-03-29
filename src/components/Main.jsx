import ComicsList from "./ComicsList"

export default function Main({ comics }) {
    return (
        <main>
            <div className="hero"></div>

            <div className="comics-section">
                <div className="container">
                    <span className="section-label">CURRENT SERIES</span>
                    <ComicsList comics={comics} />
                </div>
            </div>
        </main>
    )
}