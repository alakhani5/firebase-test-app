import React, { useEffect, useState } from "react";
import { onSnapshot, query, where, orderBy } from "firebase/firestore";
import { breadRef } from "../../src";
import BreadCard from "./BreadCard";
import Col from "react-bootstrap/Col";

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
    <Col xl>
      {allBreads.length ? (
        <div>
          <h1>Bread List</h1>
          <BreadCard allBreads={allBreads}/>
        </div>
      ) : (
        <h3>No bread for you!</h3>
      )}
    </Col>
  );
};

export default BreadList;
