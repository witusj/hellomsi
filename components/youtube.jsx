export const YouTube = (props) => {
    return (
        <iframe
        className="card-img-top"
        width="560"
        height="315"
        src={`https://www.youtube.com/embed/${props.url}`}
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        ></iframe>
    )
    }