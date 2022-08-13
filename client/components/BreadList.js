import React, { useEffect, useState } from "react";
import { onSnapshot, query, where, orderBy } from "firebase/firestore";
import { breadRef } from "../../src";

const BreadList = (props) => {
  const [allBreads, setAllBreads] = useState([]);

  useEffect(() => {
    const q = query(breadRef, orderBy('createdAt', "asc"))
    onSnapshot(q, (snapshot) => {
      let breads = [];
      snapshot.docs.forEach((doc) => {
        breads.push({ ...doc.data(), id: doc.id }); // pulling the data and the id for each value
      });
      setAllBreads(breads);
    });
  }, []);

  return (
    <div>
      {allBreads.length ? (
        <div>
          <h1>Bread List</h1>
          {allBreads.map((bread) => (
            <div id={bread.id}>
              <h3>Type: {bread.type}</h3>
              <body>Difficulty: {bread.difficulty}</body>
            </div>
          ))}
        </div>
      ) : (
        <h3>no bread for you!</h3>
      )}
    </div>
  );
};

export default BreadList;
