import React, { useContext } from 'react'
import Navbar from './Navbar'
import DataContext from '../Api/DataContext'
import "./Blog.css";
import { Link } from "react-router-dom";


const Technology = () => {
  const data = useContext(DataContext);
  const Technology = data.filter((item)=>item.category == "Technology");
  return (
    <>

      <Navbar />
      <div className="Bollywoodmain">
        <h1 className="main-heading">Technology</h1>
        <div className="ChildMain">
          {Technology.slice(4, 7).map((item) => (
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
}

export default Technology