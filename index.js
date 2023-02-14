const Button = (props) => {
  const { className, text } = props;

  return <button className={`button ${className}`}>{text}</button>;
};

const element = (
  <div className="bg-container">
    <h1 className="heading">Social Buttons</h1>
    <div className="buttons-container">
      <Button text="Like" className="like-button" />
      <Button text="Comment" className="comment-button" />
      <Button text="Share" className="share-button" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
