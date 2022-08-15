import { query, where, onSnapshot, getDocs, orderBy } from "firebase/firestore";
import React from "react";
import { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import { breadRef } from "../../src";
import BreadCard from "./BreadCard";

const SearchBreads = (props) => {
  const [searchVal, setSearchVal] = useState("");
  const [result, setResult] = useState("");
  const [searchType, setSearchType] = useState("type");
  const [searched, setSearched] = useState(0);

  // console.log('searched breads',searchedBreads)

  const handleSearch = (evt) => {
    evt.preventDefault();
    const q = query(
      breadRef,
      where(searchType, "==", searchVal),
      orderBy("createdAt", "asc")
    );
    getDocs(q)
      .then((snapshot) => {
        let breads = [];
        snapshot.docs.forEach((doc) => {
          breads.push({ ...doc.data(), id: doc.id }); // pulling the data and the id for each value
        });
        setResult(breads);
      })
      .catch((err) => console.log("error fetching bread", err));

    setSearched(1);

    // document.querySelector(".search").reset();
  };

  return (
    <div>
<Col sm>
      <Form className="search" onSubmit={handleSearch}>

      <h2>Find Bread</h2>
        <Form.Label for="type">Search for a type of bread: </Form.Label>
        <br />
        <Form.Label for="selector">
          {/* Search By: */}
          <Form.Select
            name="selector"
            value={searchType}
            onChange={(evt) => setSearchType(evt.target.value)}
            required
          >
            <option value="type">Type</option>
            <option value="difficulty">Difficulty</option>
          </Form.Select>
        </Form.Label>
        <Form.Control
          type="text"
          name="type"
          placeholder={searchType === "type" ? "Focaccia" : "Easy"}
          onChange={(evt) => setSearchVal(evt.target.value)}
        ></Form.Control>
        <br />
        <br />
        <Button type="submit">Find that bread</Button>
      </Form>
      </Col>
      <br />
      {searched === 0 ? (
        <div></div>
      ) : result.length ? (
        <div>
          <h2>Results:</h2>
          <BreadCard allBreads={result}/>
        </div>
      ) : (
        <div>You've hit a bread end</div>
      )}
      <br/>
      <br/>
      <br/>
    </div>
  );
};

export default SearchBreads;
