import React from "react";

import { connect } from "react-redux";
import { useParams } from "react-router-dom";

function Detail({ toDos }) {
  const { id } = useParams();
  console.log(id);
  console.log(toDos);
  const toDo = toDos.find((item) => item.id === parseInt(id));

  return (
    <>
      <h1>{toDo?.text}</h1>
      <h5>Created at: {toDo?.id}</h5>
    </>
  );
}

const mapStateToProps = (state, _ownProps) => {
  /**
   * [ISSUE]: react-router-dom version 문제
   * ownProps에 match.params 값이 넘어 오지 않음
   * useParams 를 사용하여 구현
   */
  return {
    toDos: state,
  };
};
export default connect(mapStateToProps)(Detail);
