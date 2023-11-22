import { useState } from "react";
import { connect } from "react-redux";

function Home({ toDos }) {
  const [text, setText] = useState("");
  const [toDo, setToDo] = useState([]);

  const onChange = (e) => {
    setText(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    setToDo([{ id: new Date().getTime(), text }, ...toDo]);
    setText("");
  };
  console.log(toDo);
  return (
    <>
      <h1>To Do</h1>
      <form onSubmit={onSubmit}>
        <input type="text" value={text} onChange={onChange} />
        <input type="submit" />
      </form>
      <ul>
        {JSON.stringify(toDos)}
        {/* {toDos.map((item) => (
          <li key={item.id}>
            {item.text}
            <button>delete</button>
          </li>
        ))} */}
      </ul>
    </>
  );
}

const mapStateToProps = (state) => {
  return { toDos: state };
};
export default connect(mapStateToProps)(Home);
