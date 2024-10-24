import React, { useContext } from "react";
import Navbar from "./Navbar";
import DataContext from "../Api/DataContext";
import "./Blog.css";
import { Link } from "react-router-dom";


const Hollywood = () => {
  const data = useContext(DataContext);
  const HollyMovies = data.filter((item) => item.category == "Hollywood");

  return (
    <>
      <Navbar />
      <div className="Bollywoodmain">
        <h1 className="main-heading">Hollywood</h1>
        <div className="ChildMain">
          {HollyMovies.slice(7, 10).map((item) => (
            <>
              <div className="BollyMainMovie">
                <Link to={`/details/${item.id}`}>
                  <img
                    src={item.img_url}
                    alt="Bollywood movie"
                    className="BollyMainimg"
                  />
                  <h3 className="Title">{item.title}</h3>
                  <p className="description">{item.description}</p>
                </Link>
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
};

export default Hollywood;
