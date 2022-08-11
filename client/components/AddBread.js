import React from "react";
import { useState } from "react";
import { addDoc } from "firebase/firestore";
import { breadRef } from "../../src";

const AddBread = (props) => {
  const [type, setType] = useState("");
  const [difficulty, setDifficulty] = useState("easy");

  const handleAdd = (evt) => {
    // need to use arrow functions!
    evt.preventDefault();
    addDoc(breadRef, {
      type: type,
      difficulty: difficulty,
    }).then(() => {
      document.querySelector('.add').reset()
      setType("");
      setDifficulty("easy");
    });
  };

  return (
    <div>
      <h2>Add that Bread</h2>
      <form className="add" onSubmit={handleAdd}>
        <label for="type">Type: </label>
        <input type="text" name="type" onChange={(evt) => setType(evt.target.value)} placeholder='Ciabatta' required></input>
        <br />
        <label for="difficulty">
          Difficulty:
          <select
            name="difficulty"
            value={difficulty}
            onChange={(evt) => setDifficulty(evt.target.value)}
            required
          >
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select>
        </label>{" "}
        <br /><br/>
        <button type="submit">Get that bread</button>
      </form>
    </div>
  );
};

export default AddBread;
