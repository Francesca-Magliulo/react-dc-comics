export default function ComicCard(props) {
    const { id, thumb, title } = props

    return (
        <div className="card" key={id}>
            <img src={thumb} alt={title} />
            <h5>{title}</h5>
        </div>
    )
}