export default function Embed(props) {
    return (<div className="video-responsive">
        <iframe width="480" height="270"
            src={`https://www.youtube-nocookie.com/embed/${props.id}`}
            title={props.id} frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen>
        </iframe>
    </div>)
}