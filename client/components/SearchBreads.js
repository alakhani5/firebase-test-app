import { query, where, onSnapshot, orderBy } from "firebase/firestore";
import React from "react";
import { useState } from "react";
import { breadRef } from "../../src";

const SearchBreads = (props) => {
  const [searchVal, setSearchVal] = useState("");
  const [result, setResult] = useState("");
  const [searchType, setSearchType] = useState("type");
  const [searched, setSearched] = useState(false);

  const q = query(
    breadRef,
    where(searchType, "==", searchVal),
    orderBy("desc")
  );
  console.log(q)

  onSnapshot(q, (snapshot) => {
    let breads = [];
    snapshot.docs.forEach((doc) => {
      breads.push({ ...doc.data(), id: doc.id }); // pulling the data and the id for each value
    });
    console.log("search breads", breads);
  });

  const handleSearch = (evt) => {
    evt.preventDefault();
    setResult(breadSearch);
    setSearched(true);

    // document.querySelector(".search").reset();
  };

  return (
    <div>
      <h2>Find Bread</h2>
      <form className="search" onSubmit={handleSearch}>
        <label for="type">Search for a type of bread: </label>
        <br />
        <label for="selector">
          Search By:
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
      <br />
      {result && searched ? (
        <div>we found the bread: {result}</div>
      ) : (
        <div>Nothing yet!</div>
      )}
    </div>
  );
};

export default SearchBreads;
