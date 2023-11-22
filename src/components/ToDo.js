import { connect } from "react-redux";
import { actionCreators } from "../store";
import { Link } from "react-router-dom";

function ToDo({ id, text, onButtonClick }) {
  return (
    <li>
      <Link to={`/${id}`}>{text}</Link>
      <button onClick={onButtonClick}>DEL</button>
    </li>
  );
}

const mapDispatchToProps = (dispatch, ownProps) => {
  const id = ownProps.id;
  return {
    onButtonClick: () => dispatch(actionCreators.deleteToDo(id)),
  };
};
export default connect(null, mapDispatchToProps)(ToDo);
