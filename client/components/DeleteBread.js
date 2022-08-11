import React from "react";
import { useState } from "react";
import { deleteDoc, doc } from "firebase/firestore";
import { breadRef, db, breadTable } from "../../src";

const DeleteBread = (props) => {
  const [id, setId] = useState("");


  const handleDelete = (evt) => { // need to use arrow functions!
    evt.preventDefault()
    const deletedBread = doc(db,breadTable,id)
    deleteDoc(deletedBread)
    .then(() => {
      document.querySelector('.delete').reset()
      setId("");
    })
  }

  return (
    <div>
      <h2>Deleting Bread</h2>
    <form className="delete" onSubmit={handleDelete}>
      <label for="id">Bread ID: </label>
      <input type="text" name="id" onChange={(evt) => setId(evt.target.value)} placeholder='insertlongstringhere' required></input>
        <br/><br/>
      <button type="submit">Delete this bread</button>
    </form>
    </div>

  );
};

export default DeleteBread;
