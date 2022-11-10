import './Card.css'

function Card(props) {
  /*
    className is a reserved name which is used to access the classes
    that were passed when calling the component
  */
  const classes = 'card ' + props.className;

  // children is a reserved name which are used to wrap components
  return <div className={classes}>{props.children}</div>;
}

export default Card;
