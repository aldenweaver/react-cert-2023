function Article(props) {
    return (
        <div className="article col-4">
            <img className="img-fluid" src={props.content.img} alt="featured" />
            <h2> {props.content.title} </h2>
            <p> {props.content.body} </p>
        </div>
    );
}
 
export default Article;