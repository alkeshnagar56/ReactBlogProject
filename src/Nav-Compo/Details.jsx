import React, { useContext } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import DataContext from "../Api/DataContext";
import { NavLink } from "react-router-dom";

const Details = () => {
  const { bollyMovies } = useParams();
  console.log(bollyMovies);
  const { id } = useParams();
  const data = useContext(DataContext);
  const Navigate = useNavigate();
  const post = data.find((item) => item.id === parseInt(id));
  return (
    <>
      <div className="pardetailslogo">
        <NavLink className="heading detailslogo" to="/">
          <div id="devil">Devil's </div>
          <span id="domain">Domain</span>
        </NavLink>
      </div>
      <div className="detailsParMain">
        <div className="detailschildmain">
          <button className="BackButton" onClick={() => Navigate(-1)}>
            <div className="BackEroImg"></div>
            Go Back
          </button>
          <div className="MainDetails">
            <h1 className="DetailsTitle">{post.title}</h1>



          <div className="personalintro">
          <div className="animeImg"></div>
          <div className="namedate">
            <h3>Alkesh Nagar</h3>
            <h4>1 November 2024</h4>
          </div>
          <div className="socialmedia">
            <div className="twitter"></div>
            <div className="facebook"></div>
            <div className="YouTube"></div>
            <div className="instagram"></div>
          </div>

          </div>





            <img className="Detailsimg" src={post.img_url} alt={post.title} />
            <p className="DetailsDescription">{post.description}</p>
          </div>
        </div>
      </div>
      <div className="DetailsMore">
        <h1 className="DetailsMoreHead">More From The Domain</h1>
      </div>
    </>
  );
};

export default Details;

