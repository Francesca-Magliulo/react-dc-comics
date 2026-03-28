import comics from "../data/comics";

export default function Comics() {
    return (
        <div>

            <div className="comics-container">
                {comics.map((comic) => (
                    <div className="card" key={comic.id}>
                        <img src={comic.thumb} alt={comic.title} />
                        <h5>{comic.title}</h5>
                    </div>
                ))}
            </div>

            <div className="load-more">
                <button>LOAD MORE</button>
            </div>

        </div>
    );
}