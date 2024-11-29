import React, { useContext } from "react";
import DataContext from "../Api/DataContext";
import { Link, NavLink, useNavigate, useParams } from "react-router-dom";

// const SearchResult = () => {
  // const Data = useContext(DataContext);
  // const { SearchText } = useParams();
  // const navigate = useNavigate();

  // const SearchItem = Data.filter((item) =>
  //   item.title.toLowerCase().includes(SearchText.toLowerCase())
  // );

  //   const searchData = data.filter((item) =>
  //     item.title.toLowerCase().includes(searchText.toLowerCase())
  //   );





  


// import React, { useContext } from "react";
// import { Link, useParams, useNavigate } from "react-router-dom";
// import DataContext from "../DataContext";
// import "./SearchResults.css";

// Helper function to calculate similarity score
const calculateSimilarity = (str1, str2) => {
  const editDistance = (a, b) => {
    const matrix = Array.from({ length: a.length + 1 }, (_, i) =>
      Array(b.length + 1).fill(0)
    );

    for (let i = 0; i <= a.length; i++) matrix[i][0] = i;
    for (let j = 0; j <= b.length; j++) matrix[0][j] = j;

    for (let i = 1; i <= a.length; i++) {
      for (let j = 1; j <= b.length; j++) {
        if (a[i - 1] === b[j - 1]) {
          matrix[i][j] = matrix[i - 1][j - 1];
        } else {
          matrix[i][j] = Math.min(
            matrix[i - 1][j - 1] + 1, // Substitution
            matrix[i][j - 1] + 1,     // Insertion
            matrix[i - 1][j] + 1      // Deletion
          );
        }
      }
    }

    return matrix[a.length][b.length];
  };

  const maxLen = Math.max(str1.length, str2.length);
  const distance = editDistance(str1.toLowerCase(), str2.toLowerCase());
  return (1 - distance / maxLen) * 100; // Similarity percentage
};

const SearchResults = () => {
  const { SearchText } = useParams();
  const data = useContext(DataContext);
  const navigate = useNavigate();

  // Filter items with a similarity score of 70% or more
  const results = data.filter(item => {
    const similarity = calculateSimilarity(item.title, SearchText);
    return similarity >= 70; // Threshold for similarity
  });




  return (
    <>
    <div className="pardetailslogo">
            <NavLink className="heading detailslogo" to="/">
              <div id="devil">Devil's </div>
              <span id="domain">Domain</span>
            </NavLink>
          </div>
      <div className="SearchResult">
        <button className="BackButton" onClick={() => navigate("/")}>
          <div className="BackEroImg"></div>
          Go Back
        </button>

        <h1 className="SearchResultHead">Search Result for : {results.map((item) => item.title)}</h1>
        {results.length > 0 ? (
          <div className="ResultContainer">
            {results.map((item) => (
              <Link className="resultData" to={`details/${item.id}`} key={item.id}>
                <img src={item.img_url} alt={item.title} />
                <p>{item.description.split(" ").slice(0, 50).join(" ")}........</p>
              </Link>
            ))}
          </div>
        ) : (
          <h2>No results Found</h2>
        )}
      </div>
    </>
  );
};
// }

export default SearchResults;
