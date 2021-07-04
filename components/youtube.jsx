export const YouTube = (props) => {
    return (
        <iframe
        width="560"
        height="315"
        src={`https://www.youtube.com/embed/${props.url}`}
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        ></iframe>
    )
}
    
export const Map = () => {
    return (
        <iframe
        width="600"
        height="450"
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d9865.793520476172!2d5.7640991!3d51.8162392!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xc60a0e0a98ea053d!2sEromesMarko%20B.V.!5e0!3m2!1sen!2snl!4v1625400390949!5m2!1sen!2snl"
        frameBorder="0"
        allowfullscreen="" 
        ></iframe>
    )
}