import { useState } from "react";

function Home() {
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
        {toDo.map((item) => (
          <li key={item.id}>
            {item.text}
            <button>delete</button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Home;
