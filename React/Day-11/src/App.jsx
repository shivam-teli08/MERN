import React, { useState, useEffect } from 'react';

const App = () => {
  const [allTodo, setAlltodo] = useState([]);
  const [formdata, setFormdata] = useState({ title: "", desc: "" });

  useEffect(() => {
    const storedTodos = localStorage.getItem("todos");
    if (storedTodos) {
      setAlltodo(JSON.parse(storedTodos));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(allTodo));
  }, [allTodo]);

  function handleData(e) {
    const { name, value } = e.target;
    setFormdata(preData => ({
      ...preData,
      [name]: value
    }));
  }

  function submitData() {
    setAlltodo(prevdata => [...prevdata, formdata]);
    setFormdata({ title: "", desc: "" });
  }

  function deleteTodo(i) {
    const newList = allTodo.filter((item, index) => index !== i);
    setAlltodo(newList);
  }

  return (
    <>
      <div>
        <input
          type="text"
          placeholder="title"
          value={formdata.title}
          name="title"
          onChange={handleData}
        />
        <input
          type="text"
          placeholder="description"
          value={formdata.desc}
          name="desc"
          onChange={handleData}
        />
        <button onClick={submitData}>Add Task</button>
      </div>

      <div>
        {
          allTodo.map((data, index) => (
            <div key={index}>
              <h1>{data.title}</h1>
              <h1>{data.desc}</h1>
              <button onClick={() => deleteTodo(index)}>Delete</button>
            </div>
          ))
        }
      </div>
    </>
  );
};

export default App;
