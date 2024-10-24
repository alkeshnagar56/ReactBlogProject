import React from "react";
import Navbar from "./Navbar";
import DataContext from "../Api/DataContext";
import { useContext } from "react";
import "./Blog.css";
import { Link } from "react-router-dom";

const Bollywood = () => {
  const data = useContext(DataContext);
  const bollyMovies = data.filter((item) => item.category == "Bollywood");

  return (
    <>

      <Navbar />
      <div className="Bollywoodmain">
        <h1 className="main-heading">Bollywood</h1>
        <div className="ChildMain">
          {bollyMovies.slice(4, 7).map((item) => (
            <>
              <div className="BollyMainMovie">
                <Link to={`/details/${item.id}`} >
                  <img 
                    src={item.img_url}
                    alt="Bollywood movie"
                    className="BollyMainimg"
                  />
                  <h3 className="Title" >{item.title}</h3>
                  <p className="description" >{item.description}</p>
                </Link>
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
};

export default Bollywood;
