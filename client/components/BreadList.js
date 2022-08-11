import React, { useState } from "react";
import { onSnapshot } from "firebase/firestore";
import { breadRef } from "../../src";

const BreadList = (props) => {

  onSnapshot(breadRef, (snapshot) => {
    let breads = [];
    snapshot.docs.forEach((doc) => {
      breads.push({ ...doc.data(), id: doc.id }); // pulling the data and the id for each value
    })
    console.log('breads from list',breads)
  });

  const [breads, setBreads] = useState([]);
  // console.log('all breads',allBreads);

  return (
    <div>
      <h1>Bread List</h1>
      {breads.map((bread) => {
        <div id={bread.id}>
          <title>Type: {bread.type}</title>
          <desc>Difficulty: {bread.difficulty}</desc>
        </div>;
      })}
    </div>
  );
};

export default BreadList;
