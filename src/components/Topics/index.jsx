import "./style.css"

export default function Topics(props) {
    return (
        <div className="topics-container">
            <h1 className="topics-container-title">
                {props.title}
            </h1>
        </div>
    )
}