import React, { useState } from "react";

const App = () => {
  const [userText, setUserText] = useState("write something here");

  const [toDoList, setToDoList] = useState([
    { id: 1, value: "gabriela" },
    { id: 2, value: "test" },
  ]);

  const userInputHandler = (e) => {
    const text = e.target.value.trim();
    setUserText(text);
  };

  const addHandler = () => {
    console.log("user text", userText);
    setToDoList([...toDoList, { id: toDoList.length + 1, value: userText }]);
    setUserText("");
  };

  const removeHandler = (id) => {
    console.log("id", id);
    const newToDoList = toDoList.filter((toDo) => toDo.id !== id);
    setToDoList(newToDoList);
  };

  return (
    <>
      <div className="formToDo">
        <input value={userText} onChange={userInputHandler}></input>
        <button onClick={addHandler}>enter</button>
      </div>

      <div className="toDoList">
        {toDoList.map((toDo) => (
          <div key={toDo.id}>
            <div className="toDoItem">{toDo.value} </div>
            <button onClick={() => removeHandler(toDo.id)} className="delete">
              delete
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default App;
