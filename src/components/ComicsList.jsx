
import ComicCard from "./ComicCard";

export default function ComicsList({ comics }) {
    return (
        <div>

            <div className="comics-container">
                {comics.map((comic) => (
                    <ComicCard
                        key={comic.id}
                        title={comic.title}
                        thumb={comic.thumb}
                    />
                ))}
            </div>

            <div className="load-more">
                <button>LOAD MORE</button>
            </div>

        </div>
    );
}