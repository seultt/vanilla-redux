import { connect } from "react-redux";
import { actionCreators } from "../store";

function ToDo({ text, onButtonClick }) {
  return (
    <li>
      {text}
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
