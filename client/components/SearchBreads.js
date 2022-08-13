import { query, where, onSnapshot, getDocs, orderBy } from "firebase/firestore";
import React from "react";
import { useState } from "react";
import { breadRef } from "../../src";

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
      <h2>Find Bread</h2>
      <form className="search" onSubmit={handleSearch}>
        <label for="type">Search for a type of bread: </label>
        <br />
        <label for="selector">
          {/* Search By: */}
          <select
            name="selector"
            value={searchType}
            onChange={(evt) => setSearchType(evt.target.value)}
            required
          >
            <option value="type">Type</option>
            <option value="difficulty">Difficulty</option>
          </select>
        </label>
        <input
          type="text"
          name="type"
          placeholder={searchType === "type" ? "Focaccia" : "Easy"}
          onChange={(evt) => setSearchVal(evt.target.value)}
        ></input>
        <br />
        <br />
        <button type="submit">Find that bread</button>
      </form>
      <br />
      {searched === 0 ? (
        <div></div>
      ) : result.length ? (
        <div>
          <h2>Results:</h2>
          {result.map((bread) => (
            <div id={bread.id}>
              <h3>Type: {bread.type}</h3>
              <body>Difficulty: {bread.difficulty}</body>
            </div>
          ))}
        </div>
      ) : (
        <div>You've hit a bread end</div>
      )}
    </div>
  );
};

export default SearchBreads;
