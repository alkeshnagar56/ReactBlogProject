import React, { useContext } from "react";
import Navbar from "./Navbar";
import DataContext from "../Api/DataContext";
import "./Blog.css";

const Home = () => {
  const data = useContext(DataContext);
  const random = Math.round(Math.random() * 10);
  console.log(random);
  return (
    <>
      <Navbar />
      <div>Home</div>
      <div className="HomeParentMain">
        {data.slice(random + 1, random + 2).map((item) => (
          <>
            <div className="childMain" key={item}>
              <img className="homemainimg" alt={item.title} src={item.img_url} />
            </div>
          </>
        ))}
      
      
        <div className="childMain">

          <div className="childMain">
            <img className="homemainimg" key={data} alt={data[random].title} src={data[random].img_url} />
          </div>

          {data.slice(random - 1, random).map((item) => (
            <>
              <div className="childMain" key={item}>
                <img className="homemainimg" alt={item.title} src={item.img_url} />
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
