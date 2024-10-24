import React, { useContext } from 'react'
import DataContext from '../Api/DataContext'
import Navbar from './Navbar';
import "./Blog.css"
import { Link } from 'react-router-dom';

const Food = () => {
    const data = useContext(DataContext);
    const Food = data.filter((item) => item.category == "Food");
    return (
        <>
    
          <Navbar />
          <div className="Bollywoodmain">
            <h1 className="main-heading">Food</h1>
            <div className="ChildMain">
              {Food.slice(4, 7).map((item) => (
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

export default Food